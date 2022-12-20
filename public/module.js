function addTodo() {
    var view = document.getElementById('add_todo');
    var view_wrap = document.getElementById('hide');
    view.style.display = "inline-block";
    view_wrap.style.display = "block";
    document.loginform.userid.focus();
    document.addform.title.focus();
}

function hide_addTodo() {
    var view = document.getElementById('add_todo');
    var view_wrap = document.getElementById('hide');
    view.style.display = "none";
    view_wrap.style.display = "none";
}

function delete_all() {
    if (confirm("리스트를 모두 삭제할까요?") == true) {
        document.location.href = "/ocy/deleteall";
    } else return;
}

function logout() {
        document.location.href = "/ocy/logout";
}
