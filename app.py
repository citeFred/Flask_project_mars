# 라이브러리 임포트
# Flask Framework
# view페이지 렌더링을 위한 render_template 메서드
# 요청 데이터에 접근 할 수 있는 flask.request 모듈
# dictionary를 json형식의 응답 데이터를 내보낼 수 있는 jsonify 메서드
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

# MongoDB(Atlas Cloud)를 사용하기 위한 pymongo 임포트
from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient('mongodb+srv://ohnyong:test@cluster0.lu7mz8j.mongodb.net/?retryWrites=true&w=majority',tlsCAFile=ca)
db = client.dbsparta 

# "localhost:5001/" URL요청에 메인 뷰 페이지 반환 응답
@app.route('/')
def home():
    return render_template('index.html')

# fetch('URL')부분, 반환값은 res로 전달.
# "localhost:5001/mars" URL POST방식 요청에 응답
@app.route("/mars", methods=["POST"])
def mars_post():
    # request.form을 통해 요청과 함께 담겨진 body(==formData)를 가져옴
    # sample_receive = request.form['sample_give']
    # print(sample_receive)

    # request.form을 통해 요청과 함께 담겨진 body(==formData)를 가져옴
    # 주문자의 이름, 주소, 땅 수량을 가져온다.
    name_receive = request.form['name_give']
    address_receive = request.form['address_give']
    size_receive = request.form['size_give']
    print(name_receive,address_receive,size_receive)

    # DB에 넣기 (pymongo 사용 필요)
    # INSERT_ONE
    # 저장 - 예시
    doc ={
        'name':name_receive,
        'adress':address_receive,
        'size':size_receive
    }
    db.mars.insert_one(doc)

    return jsonify({'msg':'POST 연결 완료! + DB 저장(insert) 완료!'})

# fetch('URL')부분, 반환값은 res로 전달.
# "localhost:5001/mars" URL GET방식 요청에 응답
@app.route("/mars", methods=["GET"])
def mars_get():
    return jsonify({'msg':'GET 연결 완료!'})

# app이라는 메인 함수 
# if __name__ == "__main__" 의 의미는 메인 함수의 선언, 시작을 의미
# 이 파이썬 스크립트가 직접 실행될 때에는 main() 함수를 실행하라
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)