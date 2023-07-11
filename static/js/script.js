// [Read]
$(document).ready(function () {
    show_order();
});
function show_order() {
    fetch('/mars').then((res) => res.json()).then((data) => {
        // json 형식으로 변환, 반환된 데이터가 res 인자로 들어옴
        // res.json()에 의해 Promise 객체로 변환되어 data에 저장
        // data 내용 테스트
        console.log(data)

        // data의 내용이 OpenAPI로부터 데이터 받는것과 동일
        // 리스트 형태의 data를 rows 변수에 담고
        let rows = data['result']
        $('#order-box').empty();
        // forEach 반복문을 통해
        rows.forEach((a) => {
            // 한줄씩 콘솔에 출력(브라우저 콘솔)
            // console.log(a)

            // 리스트에 있는 key의 value들을 각 변수에 담기
            let name = a['name']
            let address = a['address']
            let size = a['size']

            // index.html에 위 변수들이 들어가도록 백틱 내 자리표시자${variable} 작성한 내용을 temp_html에 작성
            let temp_html = `<tr>
                                <td>${name}</td>
                                <td>${address}</td>
                                <td>${size}</td>
                            </tr>`

            // 위 temp_html을 index.html의 #order-box 테이블에 붙여주기.
            $('#order-box').append(temp_html) 
        });
        // alert(data['msg'])
    })
}

// [Create]
function save_order() {
    // 프론트엔드 클라이언트로부터 입력값(value) 가져오기
    // index.html의 input태그의 id로부터 value를 각 변수에 담는다.
    let name = $('#name').val()
    let address = $('#address').val()
    let size = $('#size').val()

    let formData = new FormData();
    // formData.append("sample_give", "샘플데이터");
    // formData에 객체를 생성하고
    // append를 통해 ("key", "value")로 데이터를 추가한다.
    formData.append("name_give", name);
    formData.append("address_give", address);
    formData.append("size_give", size);

    // POST 요청에 위 formData를 body에 담아 요청한다.
    fetch('/mars', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        // console.log(data);
        alert(data["msg"]);
        // 브라우저 새로고침 추가
        window.location.reload()
    });
}