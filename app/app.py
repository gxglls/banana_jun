import os
from flask import Flask,url_for,request,redirect,flash
from werkzeug import secure_filename

UPLOAD_FOLDER = '/tmp/upload'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif' , 'cpp' , 'rar' , 'zip' , 'c' ])

app = Flask(__name__)
app.config.from_envvar('FLASKR_SETTINGS', silent=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'some_secret'

@app.route('/')
def hello_world():
    return 'Hello World!'



def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
	uploaded_files = request.files.getlist("file[]")
	be_uploaded_files=[]
	print "uploade:"+str(uploaded_files)
	for i in uploaded_files:
		print i
		if i and allowed_file(i.filename):
		    #filename = secure_filename(i.filename)
		    filename = i.filename
		    i.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		    be_uploaded_files.append(filename)
	if len(be_uploaded_files) == 0:
		return "file forbidden"
	else:
		os.system('bash  /tmp/upload/judge.sh')
		result=os.popen('cat /root/result').read()
		return  str(be_uploaded_files)+"upload succ"+"<br><br>same files:<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+result
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
	<form  accept-charset="UTF-8" method="POST" enctype="multipart/form-data" action="/upload">
	  <input type="file" name="file[]" multiple="">
	  <input type="submit" value="add">
	</form>
    '''

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=true)
