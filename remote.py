#!/usr/bin/python

import sys, os
from libLGTV_serial import libLGTV_serial as LGTV
from bottle import route, run, template, static_file

model = '42LK450'               # Change this to your TV's model
serial_port = "/dev/ttyUSB0"    # Change this to your serial port

@route('/')
def webroot():
    return template('remote')

@route('/command/<command>', method='POST')
def sendcommand(command):
    tv = LGTV.LGTV(model, serial_port)
    tv.add_toggle('input', 'inputhdmi1', 'inputhdmi2')
    return tv.send(command)

@route('/s/<filename>')
def server_static(filename):
    webroot = os.path.abspath(os.path.dirname(__file__))
    return static_file(filename, root=os.path.join(webroot, 'static/'))

run(host='0.0.0.0', port=8080)

