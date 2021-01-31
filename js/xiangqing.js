// 第一个轮播图
let n = 0;	//代表当前在第几张
let liList = $("#bannerimg li")
let ul = $("#bannerimg")
// console.log(liList)
function changeImg(){
    ul.animate({
        marginTop:-(n * 282)    
    })
}
function autoPlay(){
    n++;
    if(n >= liList.length){
        n = 0;
    };
    changeImg()
}
setInterval(autoPlay, 5000);

// 第二个轮播图
let i = 0;	//代表当前在第几张
// let liLista = $("#banimg li")
let banlength = $("#banlength")
let ulList = $("#banlength ul")
let left = $(".left")
let right = $(".right")
function changeImga(){
    banlength.animate({
        marginLeft:-(i * 1240)    
    })
}
function autoPlaya(){
    i++;
    if(i >= ulList.length){
        i = 0;
    };
    changeImga()
}
left.click(function(){
    autoPlaya()
});
right.click(function(){
    autoPlaya()
});

setInterval(autoPlaya, 5000);

// 购物车
let addList = document.getElementsByClassName("add")[0]
let subList = document.getElementsByClassName("sub")[0]
let countNode = document.getElementsByClassName("count")[0]
addList.onclick = function(){
    let countNode = document.querySelector(".count");
    if (countNode.innerHTML >= 0) {
        countNode.innerHTML = parseInt(countNode.innerHTML) + 1;
    }
}
subList.onclick = function () {
    // 数量
    let countNode = this.parentNode.querySelector(".count");
    if (countNode.innerHTML > 0) {
        // 数量减
        countNode.innerHTML = parseInt(countNode.innerHTML) - 1;
    }
}
    
