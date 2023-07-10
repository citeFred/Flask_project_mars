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
    let formData = new FormData();
    formData.append("sample_give", "샘플데이터");

    fetch('/mars', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        console.log(data);
        alert(data["msg"]);
    });
}