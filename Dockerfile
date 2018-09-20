FROM python:3.6.5
MAINTAINER Huiming (me@yxzhm.com)

RUN apt-get update

RUN apt-get install build-essential libspeex-dev libspeexdsp-dev libpulse-dev libopus0 libopus-dev -y

RUN apt-get install python3-dev -y

COPY ./ /audio

WORKDIR /audio

RUN pip3 install -r requirements.txt

CMD ["python3.6", "/audio/portal/main.py"]
