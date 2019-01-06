import json
import pronouncing
import tornado.ioloop
import tornado.websocket

class RhymeHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, _origin):
        return True

    def on_message(self, message):
        parsed = json.loads(message)
        word = parsed['word']
        payload = {
            'type': 'RHYMES',
            'payload': pronouncing.rhymes(word)
        }
        self.write_message(json.dumps(payload))

if __name__ == '__main__':
    application = tornado.web.Application([
        ("/rhymes", RhymeHandler)
    ])
    application.listen(4000)
    print('listening on 4000')
    tornado.ioloop.IOLoop.current().start()
