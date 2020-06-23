from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
data = {
    "id": "unique id",
    "writer": {
        "email": "blablabla@mail.pl",
        "name": "testingName",
        "avatar": "http://someradnomurl.com/",
        "footer": "testFooter"
    },
    "essence": "testEssence",
    "responseIds": ["id1", "id2", "id3"]
}

@app.route('/')
def get():
    return jsonify(data), 200

app.add_url_rule('/', get)
app.run(debug=True)

