// [Read]
$(document).ready(function () {
    show_order();
});
function show_order() {
    fetch('/mars').then((res) => res.json()).then((data) => {
        console.log(data)
        alert(data['msg'])
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