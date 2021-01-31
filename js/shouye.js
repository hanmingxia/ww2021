let xq = $(".xq")
let banleft = $(".banleft")
xq.click(function(){
    $(".banleft").toggle()
})

// 轮播图
let n = 0;	//代表当前在第几张
let liList = $("#bannerimg li")
let bannerdot = $("#bannerdot")[0]
let ul = $("#bannerimg")
let timer = setInterval(function () {
    changeImg();
}, 3000);
function changeImg(){
    ul.animate({
        marginLeft:-(n * 1226)    
    })
    dotList.removeClass("focus");
    dotList.eq(n).addClass("focus");
}
for(let i = 0; i < liList.length;i++){
    let dot = document.createElement("li");
    if(!i){dot.className = 'focus'}
    bannerdot.appendChild(dot)
}
let dotList = $("#bannerdot li");
dotList.click(function(){
    n = $(this).index();
    changeImg()
})


// // 轮播图
// var liList = $("#bannerimg li");
// var bannerdot = $("#bannerdot")[0];
// var ul = $("#bannerimg");
// // 当前在第几张上
// var n = 0;
// // 当前动画是否正在执行
// var isAnimation = false;
// // 动态生成小圆点
// for (var i = 0; i < liList.length; i++) {
//     var dot = document.createElement('li')
//     dot.setAttribute("data-index", i)
//     bannerdot.appendChild(dot)
//     if (i === 0) {
//         dot.className = "focus"
//     }
// }

// var dotList = $("#bannerdot li")

// function changeImg() {
//     // 隐藏所有图片 
//     for (var i = 0; i < liList.length; i++) {
//         liList[i].className = ""
//         dotList[i].className = ""
//     }

//     dotList[n].className = "focus";
//     // 显示第n张图片
//     liList[n].className = "show";
//     liList[n].style.opacity = 0;
//     isAnimation = true;
//     var fade = setInterval(function () {
//         var o = parseFloat(liList[n].style.opacity);
//         if (o >= 1) {
//             clearInterval(fade);
//             isAnimation = false;
//             return;
//         }
//         liList[n].style.opacity = o + 0.02;
//     }, 16)

// }
// bindEvent(dotList, "onclick", function () {
//     if (isAnimation) {
//         return;
//     }
//     n = this.getAttribute("data-index");
//     changeImg()
// })




      


