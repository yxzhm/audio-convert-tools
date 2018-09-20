def _decode_nuance_container_frame(data):
    sizes = []
    for char in data:
        sizes.append(((char) & 0x7f))
        if (char) & 0x80 == 0:
            break

    size = 0
    for i in range(len(sizes)):
        size += sizes[i] * (2 ** 7) ** (len(sizes) - i - 1)

    return len(sizes), size


def decode_nuance_container(data):
    audio = []
    pos = 0
    # print(len(server_message.audio))
    while pos < len(data):
        (size_len, packet_len) = _decode_nuance_container_frame(data[pos:])
        # print(size_len, packet_len)
        pos += size_len
        audio.append(data[pos:pos + packet_len])
        pos += packet_len
    return audio
