//  var cart = []
//     var mycart = document.getElementById("cart")
//     function oncart(x) {
//         var product = x.parentNode
//         var img = product.childNodes[0].src
//         var  name = product.childNodes[1]

//     }
// ẩn và hiện cart
document.getElementById("card").style.display = "none";
function showcart() {
    var nn = document.getElementById("card")

    if (nn.style.display == "none") {
        nn.style.display = "block"
    }
    else {
        nn.style.display = "none"
    }
}


// chuyển slide show
var arr_hinh = [
    "anh/s1.jpg",
    "anh/s2.jpg",
    "anh/s3.jpg",
    "anh/s6.jpg",
];

//*********************************************** */
var cart = []
var myCart = document.querySelector("#card")
function onCart(e) {

    var product = e.parentNode.parentNode
    console.log(e.parentNode.parentNode)
    console.log(e.parentNode.parentNode.childNodes)
    var name = e.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    console.log(e.parentNode.parentNode.childNodes[3].childNodes[1].innerText)
    var img = e.parentNode.parentNode.childNodes[1].childNodes[0].src
    console.log(e.parentNode.parentNode.childNodes[1].childNodes[0].src)

    var pricee = e.parentNode.parentNode.childNodes[5].childNodes[1].innerText
    var price=  pricee.substring(0,pricee.length-1)
    //console.log(e.parentNode.parentNode.childNodes[5].childNodes[1].innerText.substring(0,price.length-1))
    console.log(price)
    var id = product.getAttribute("data-id")
    console.log(id)
    var index = getIndex(id)
    if (getIndex(id) >= 0)
        cart[getIndex(id)][4] += 1
    else cart.push([id, name, img, price, 1])
    console.log(cart);
    showCart()
}

function showCart() {
    myCart.innerHTML = ""
    tong = 0
    for (var i = 0; i < cart.length; i++) {
        tong = tong + cart[i][4] * cart[i][3]*1000;
  
        var mydiv = document.createElement("div")
        mydiv.innerHTML = `<img src='${cart[i][2]}'/> ${cart[i][1]} số lượng: ${cart[i][4]} Đơn giá: ${cart[i][3]} thành tiền ${cart[i][4] * cart[i][3]} <button onclick="onDelete(${i})">Xóa</button>`
        myCart.append(mydiv)
    }
    var tongDiv = document.createElement("div")
    tongDiv.innerHTML = `<hr> Tổng tiền:  ${tong}`
    myCart.append(tongDiv)
}

function getIndex(id) {
    var luui = -1
    for (var i = 0; i < cart.length; i++) {
        if (cart[i][0] == id) {
            luui = i;
            break
        }
    }
    return luui
}

function onDelete(id) {
    cart.splice(id, 1)
    showCart()
}





// xóa item trong giỏ hàng
var iitem = document.getElementById("ancc")
function ancc() {
    if (iitem.style.display == "none") {
        iitem.style.display == "block"
    }
    else {
        iitem.style.display = "none"
    }
}

var item = document.getElementById("anc")
function anc() {
    if (item.style.display == "none") {
        item.style.display == "block"
    }
    else {
        item.style.display = "none"
    }
}
//chuyển slide show
var index = 0;
function tiep() {
    index++;
    if (index == arr_hinh.length) {
        index = 0;
    }
    document.getElementById("hinh").src = arr_hinh[index];
}
function ve() {
    index--;
    if (index == 0) {
        index = arr_hinh.length - 1;
    }
    document.getElementById("hinh").src = arr_hinh[index];
}