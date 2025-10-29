from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example fake data
DATA = {
    1: {"title": "Page 1", "content": "This is page one."},
    2: {"title": "Page 2", "content": "This is page two."},
    3: {"title": "Page 3", "content": "This is page three."},
}


# no index route?
# we can have an index route with react on a seperate server
@app.route("/")
def home():
    return jsonify({"message": "Flask backend is running!"})


# putting these in <>
@app.route("/api/page/<int:page_id>")
def get_page(page_id):
    data = DATA.get(page_id, {"title": "Not Found", "content": "No data for this page."})
    return jsonify(data)

# gets all pages
@app.route("/api/pages", methods=["GET"])
def get_all_pages():
    # cant do this
    # return f'All of the data: \n{jsonify(list(DATA.values()))}'

    # only this, which turns it into JSON
    return jsonify(list(DATA.values()))

if __name__ == "__main__":
    app.run(debug=True)
