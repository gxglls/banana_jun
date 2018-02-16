from flask import Flask,render_template,request
import MySQLdb
import json
import sys

#utf-8
reload(sys)    
sys.setdefaultencoding('utf8')

#import dependent
sys.path.append("/root/my_flask/app/api/")

#db init
blogDB = MySQLdb.connect("localhost","root","toor","blog")
cursor = blogDB.cursor()
cursor.execute('SET NAMES UTF8')


from db import *

app = Flask(__name__)
app.config.from_envvar("BLOG_SETTING")

@app.route("/")
def hello():
    return "<h1 style='text-align:center'>hello world</h1>"

@app.route("/blog")
def front_page():
    return render_template("frame.html")

@app.route("/blog/tag",methods=['POST','GET'])
def tag_dispaly():
    tag=request.get_json()['tag_id']
    article_list=get_article_list_by_tag(cursor,tag)
    return render_template("catelogue/article_list_yunwei.html",article_list=article_list)

@app.route("/blog/article",methods=['POST','GET'])
def show_article():
    article_name=request.get_json()['article_name']
    return render_template("article/"+article_name+".html")

@app.route("/blog/comment",methods=['POST','GET'])
def show_comment():
    titleEn=request.get_json()['title_en']
    commentList=get_comment_list_by_title_en(cursor,titleEn)
    return render_template("comment/comment_"+titleEn+".html",commentList=commentList)

@app.route("/test",methods=['POST','GET'])
def test():
    req=request.headers
    return render_template("test.html",req=req)

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')
