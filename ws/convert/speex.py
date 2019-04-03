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
            vocoded = b''
            pcm = b''
            i = 0
            for data in audio:
                vocoded += data

            while i < len(vocoded):
                packet_size = self.get_frame_byte_size(vocoded, i)
                pcm += decoder.decode(vocoded[i:i + packet_size])
                i += packet_size
            return codec, pcm
        else:
            return None, audio

    def get_frame_byte_size(self, vocoded, start_byte_index):
        if vocoded and len(vocoded) > 0:

            global_bit_index = start_byte_index * 8
            total_byte_size = 0
            terminator_flag = False
            while int(global_bit_index / 8) < len(vocoded):
                current_byte_index = int(global_bit_index / 8)
                current_bit_index = global_bit_index % 8

                # Handle two bytes here, in case the model_type and model_id are not in same byte.
                if current_byte_index < (len(vocoded) - 1):
                    data = ((vocoded[current_byte_index] << 8) & 0xFF00) | (vocoded[current_byte_index + 1] & 0x00FF)
                else:
                    data = ((vocoded[current_byte_index] << 8) & 0xFF00) | 0x0000

                mode_type = (data >> (16 - current_bit_index - 1)) & 0x01

                if mode_type == 0:
                    mode_id = data >> (16 - current_bit_index - 5) & 0x0F
                elif mode_type == 1:
                    mode_id = data >> (16 - current_bit_index - 4) & 0x07
                else:
                    raise ValueError("invalid model_id")

                bit_size = self._get_frame_bit_size(mode_type, mode_id)

                if bit_size == -1 and mode_type == 0:
                    terminator_flag = True
                else:
                    global_bit_index += bit_size

                if global_bit_index % 8 == 0:
                    total_byte_size = int(global_bit_index / 8) - start_byte_index
                else:
                    total_byte_size = int(global_bit_index / 8) - start_byte_index + 1

                if terminator_flag:
                    return total_byte_size

            return total_byte_size
        else:
            return len(vocoded)

    def _get_frame_bit_size(self, mode_type, model_id):

        # For Narrow Band Frame. Refer to the chapter 9.3 at https://www.speex.org/docs/manual/speex-manual.pdf
        if mode_type == 0 and model_id == 0:
            return 5
        elif mode_type == 0 and model_id == 1:
            return 43
        elif mode_type == 0 and model_id == 2:
            return 119
        elif mode_type == 0 and model_id == 3:
            return 160
        elif mode_type == 0 and model_id == 4:
            return 220
        elif mode_type == 0 and model_id == 5:
            return 300
        elif mode_type == 0 and model_id == 6:
            return 364
        elif mode_type == 0 and model_id == 7:
            return 492
        elif mode_type == 0 and model_id == 8:
            return 79

        # For Wide Band Frame. Refer to the chapter 10.4 at https://www.speex.org/docs/manual/speex-manual.pdf
        elif mode_type == 1 and model_id == 0:
            return 4
        elif mode_type == 1 and model_id == 1:
            return 36
        elif mode_type == 1 and model_id == 2:
            return 112
        elif mode_type == 1 and model_id == 3:
            return 192
        elif mode_type == 1 and model_id == 4:
            return 352

        else:
            return -1


