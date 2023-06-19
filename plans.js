const basicPlan = document.getElementById("botao1");
const plusPlan = document.getElementById("botao2")

function basicRedirect (){
    window.location.href = "paypages/basicbuy.html"
}


function plusRedirect(){
    window.location.href = "paypages/plusbuy.html"
}


basicPlan.addEventListener('click', basicRedirect)
plusPlan.addEventListener('click', plusRedirect)
