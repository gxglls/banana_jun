from flask import Flask,render_template

app = Flask(__name__)
app.config.from_envvar("BLOG_SETTING")

@app.route("/blog")
def front_page():
    return render_template("frame.html")

if __name__=='__main__':
    app.run(host='0.0.0.0')
