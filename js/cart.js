let addList = $(".add")
let subList = $(".sub")
let countNode = $(".count")
let deleteList = $(".delete")
let moneyNode = $(".money")//单价
let totalcount = $(".totalcount")//总件数
let totalprice = $(".totalprice")//总价 合计
let accountBtn = $(".accountBtn")//结算
let check = $(".check")
let checkAll = $(".checkAll")

addList.onclick = function () {
    // 数量
    let countNode = this.parentNode.querySelector(".count");
    // 单价
    let moneyNode = this.parentNode.parentNode.parentNode.querySelector(".money");
    // 合计
    let totalprice = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".totalprice");
    console.log(countNode)
    if (countNode.innerHTML >= 0) {
        countNode.innerHTML = parseInt(countNode.innerHTML) + 1;
    }
}
subList.onclick = function () {
    // 数量
    let countNode = this.parentNode.querySelector(".count");
    // 单价
    let moneyNode = this.parentNode.parentNode.parentNode.querySelector(".money");
    // 合计
    let totalprice = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".totalprice");

    if (countNode.innerHTML > 0) {
        // 数量减
        countNode.innerHTML = parseInt(countNode.innerHTML) - 1;
    }
  
}
deleteList.onclick = function () {
    let tr = this.parentNode.parentNode.parentNode.parentNode;
    tr.style.opacity = 1;
    let fadeout = setInterval(function () {
        let o = parseFloat(tr.style.opacity)
        if (o <= 0) {
            clearInterval(fadeout);
            tr.remove();
            return;
        }
        tr.style.opacity = o - 0.02;
    }, 16)
    computed()
}
// 复选框
check.onclick = function () {
    if(check.checked){
        totalcount.innerHTML = countNode.innerHTML
        // 小计减
        totalprice.innerHTML =Number(countNode.innerHTML)* Number(moneyNode.innerHTML);
    }
    else{
        totalcount.innerHTML = 0
        // 小计减
        totalprice.innerHTML =0;
    }
}   



