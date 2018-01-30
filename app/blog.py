from flask import Flask,render_template,request

app = Flask(__name__)
app.config.from_envvar("BLOG_SETTING")

@app.route("/")
def hello():
    return "<h1 style='text-align:center'>hello world</h1>"

@app.route("/blog")
def front_page():
    return render_template("frame.html")

@app.route("/blog/yunwei",methods=['POST','GET'])
def tag_yunwei():
    print request.get_json()
    return render_template("tag_yunwei.html")

@app.route("/blog/linux_c",methods=['POST','GET'])
def tag_linux_c():
    tagType="linux_c"
    return render_template("tag_linux_c.html")

@app.route("/blog/vim",methods=['POST','GET'])
def tag_vim():
    tagType="vim"
    return render_template("tag_vim.html")

@app.route("/test",methods=['POST','GET'])
def test():
    req=request.headers
    return render_template("test.html",req=req)

if __name__=='__main__':
    app.run(host='0.0.0.0')
