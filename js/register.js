$(".foottwoa").click(function(){
    let http = new XMLHttpRequest()
    http.open("get",`http://192.168.31.252:8080/addUser?username=${$("#username").val()}&password=${$("#password").val()}`)
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                alert("新用户注册成功,点击去登录")
                location.href = "http://192.168.31.252/ww/login.html";
            }
            else{
                alert("注册失败")
            }
        }
    }
})