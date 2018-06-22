import os

from aiohttp import web

from ws.config import Config, singleton
from ws.ws_handler import ws_handler

routes = web.RouteTableDef()


@routes.get('/ws')
async def ws_route(request):
    await ws_handler(request)


if __name__ == '__main__':
    config = Config()
    config.read(os.path.dirname(os.path.abspath(__file__))+'/config.yml')
    app = web.Application()
    app.add_routes(routes)
    web.run_app(app)
