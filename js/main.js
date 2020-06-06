let menushopicon = document.getElementById("menushopicon");

function openshop() {
    document.getElementById("menushop").classList.add("openshop");
    document.getElementById("menushopicon").classList.add("hidden");
    document.getElementById("menushopdeafult").classList.add("hidden");
    document.getElementById("menushopclose").classList.remove("hidden");
}

menushopicon.addEventListener("click", openshop);

let menushopclose = document.getElementById("menushopclose");

function closeshop() {
    document.getElementById("menushop").classList.remove("openshop");
    document.getElementById("menushopclose").classList.add("hidden");
    document.getElementById("menushopdeafult").classList.remove("hidden");
    document.getElementById("menushopicon").classList.remove("hidden");
}

menushopclose.addEventListener("click", closeshop);
