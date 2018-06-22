from functools import wraps

import yaml


def singleton(cls):
    instances = {}

    @wraps(cls)
    def get_instance(*args, **kw):
        if cls not in instances:
            instances[cls] = cls(*args, **kw)
        return instances[cls]

    return get_instance


@singleton
class Config:
    def __init__(self):
        self.config_data = None

    def read(self, path):
        file = open(path, 'r')
        self.config_data = yaml.load(file)

    def get(self):
        return self.config_data
