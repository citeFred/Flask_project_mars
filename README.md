# Flask_project_mars
[Flask] Flask framework 미니프로젝트(project mars) 

## 🖥️ 프로젝트 소개 
"화성땅"을 주문하는 주제로 만드는 일종의 "Memo" 기능 웹 페이지

## 🕰️ 개발 기간
* 23.07.09일 - 23.07.XX

### 🧑‍🤝‍🧑 맴버구성 
 - 김인용 - 싱글 프로젝트

### ⚙️ 개발 환경 
- **MainLanguage** : `PYTHON`
- **IDE** : VisualStudio Code 1.79.2 (Universal)
- **Framework** : Flask Framework(2.3.2)
- **Database** : MongoDB(5.0.11)
- **SERVER** : Flask

## 📌 주요 기능
#### View 구성
- Header부분에 웹 페이지 정보 : 타이틀(title)과 주문 설명(desc)
- Content부분에 주문을 진행하는 양식(div>input으로 구성 form(X)) : 주문자 이름, 주문자 주소, 주문하고자하는 땅 수량(평수)
- footer(사실상 content 하단 division)에는 주문 완료 된 주문 정보 리스트 : 주문자 이름, 주문자 주소, 땅 주문 량
  
#### 주문진행
- 주문자 이름, 주문자 주소, 주문하고자하는 땅 수량 입력
- '주문하기' 버튼으로 입력값 DB로 전송 및 저장 (insert)

#### 주문목록확인
- DB에 저장된 주문된 데이터 받기(find(==read))
- 받은 데이터를 bottom 부분에 표 형태로 출력
