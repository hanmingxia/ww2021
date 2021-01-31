$(".foottwoa").click(function(){
    let http = new XMLHttpRequest()
    http.open("get",`http://192.168.31.252:8080/login?username=${$("#username").val()}&password=${$("#password").val()}`)
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "error"){
                alert("用户名或密码错误")
            }
            else{
                sessionStorage.setItem("isLogin","1")
                alert("登录成功")
                location.href = "http://192.168.31.252/ww/shouye.html"
            }
        }
    }
})