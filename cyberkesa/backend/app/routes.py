from flask import Flask, jsonify
from .models import db, Blog

app = Flask(__name__)
app.config.from_object('app.config.Config')

db.init_app(app)

@app.route('/blogs', methods=['GET'])
def get_blogs():
    blogs = Blog.query.all()
    return jsonify([blog.title for blog in blogs])
