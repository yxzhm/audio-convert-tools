import collections
import json

import aiohttp

from aiohttp import web

from ws.config import Config

Message = collections.namedtuple('Message', ['type', 'data'])
QUERY_BEGIN = 'query_begin'
QUERY_END = 'query_end'
QUERY_CONFIG = 'query_config'
QUERY_AUDIO = 'query_audio'


async def ws_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    try:
        msg_handler = MessageHandler(ws)
        async for msg in ws:
            if msg.type == aiohttp.WSMsgType.TEXT:
                if QUERY_BEGIN in msg.data:
                    query_msg = Message(QUERY_BEGIN, json.loads(msg.data))
                elif QUERY_END in msg.data:
                    query_msg = Message(QUERY_END, json.loads(msg.data))
                elif QUERY_CONFIG in msg.data:
                    query_msg = Message(QUERY_CONFIG, json.loads(msg.data))
            elif msg.type == aiohttp.WSMsgType.BINARY:
                query_msg = Message(QUERY_AUDIO, msg.data)
            else:
                raise Exception('Unknown error')

            await msg_handler.handle(query_msg)

    except Exception as e:
        print(e)
    finally:
        ws.close()


class MessageHandler:
    def __init__(self, ws):
        self.ws = ws
        self.input_data = b''
        self.output_data = b''
        self.config = Config()
        self.audio_codec = None

    async def handle(self, query_msg):
        if query_msg.type == QUERY_CONFIG:
            await self.ws.send_str(json.dumps(self.config.get()))
        elif query_msg.type == QUERY_BEGIN:
            self.audio_codec = query_msg.data
        elif query_msg.type == QUERY_AUDIO:
            self.input_data = self.input_data+query_msg.data
        elif query_msg.type == QUERY_END:
            pass