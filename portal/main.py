import os

import aiohttp_jinja2
import jinja2
from aiohttp import web

from ws.config import Config, singleton
from ws.ws_handler import ws_handler

routes = web.RouteTableDef()


@routes.get('/ws')
async def ws_route(request):
    await ws_handler(request)


@routes.get('/')
@aiohttp_jinja2.template('index.html')
async def page(request):
    pass


if __name__ == '__main__':
    config = Config()
    config.read(os.path.dirname(os.path.abspath(__file__)) + '/config.yml')

    app = web.Application()
    app.add_routes(routes)

    app.add_routes([web.static('/', os.path.dirname(os.path.abspath(__file__)) + '/pages', follow_symlinks=True, show_index=True)])

    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(os.path.dirname(os.path.abspath(__file__)) + '/pages/'))
    web.run_app(app)
