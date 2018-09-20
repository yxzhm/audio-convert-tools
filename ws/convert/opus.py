import opuslib


class OpusConvert:
    def __init__(self, parameter):
        self.parameter = parameter

    def decode(self, audio):
        decoder = None
        codec = {'codec': 'pcm'}
        if self.parameter == '8K':
            codec['rate'] = 8000
        elif self.parameter == '12K':
            codec['rate'] = 12000
        elif self.parameter == '16K':
            codec['rate'] = 16000
        elif self.parameter == '24K':
            codec['rate'] = 24000
        elif self.parameter == '48K':
            codec['rate'] = 48000

        if 'rate' in codec:
            decoder = opuslib.Decoder(fs=codec['rate'], channels=1)

        if decoder:
            whole_data = b''
            for data in audio:
                # The maximum frame size for Opus is 120 ms which amounts to 5760 samples at 16 kHz sampling rate.
                whole_data += decoder.decode(data, 5760)

            return codec, whole_data
        else:
            return None, audio
        return None, audio
