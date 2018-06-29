from speex import *


class SpeexConvert:
    def __init__(self, parameter):
        self.parameter = parameter

    def decode(self, audio):
        decoder = None
        codec = {'codec': 'pcm'}
        if self.parameter == 'NB':
            decoder = NBDecoder()
            codec['rate'] = 8000
        elif self.parameter == 'WB':
            decoder = WBDecoder()
            codec['rate'] = 16000
        elif self.parameter == 'UWB':
            decoder = UWBDecoder()
            codec['rate'] = 32000

        if decoder:
            return codec, decoder.decode(audio)
        else:
            return None, audio