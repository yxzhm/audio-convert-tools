FROM python:3.6
MAINTAINER Huiming (me@yxzhm.com)

RUN apt-get update

RUN apt-get install build-essential libspeex-dev libspeexdsp-dev libpulse-dev python3.6-dev -y

COPY ./ /audio

WORKDIR /audio

RUN pip install -r requirements.txt

CMD ["python", "/audio/portal/main.py"]