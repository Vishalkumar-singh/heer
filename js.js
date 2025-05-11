const key = "123";
const key2 = "321";
let checkPass = document.querySelector(".inPass");
let pass = document.querySelector(".yourPass");
let loginP = document.querySelector(".login");
let mainCon = document.querySelector(".main");
let mainCon2 = document.querySelector(".main2");

mainCon.classList.add("hide");
mainCon2.classList.add("hide");

checkPass.addEventListener("click", () => {
    let passk = pass.value;
    if (passk === key) {
        console.log("yes");
        mainCon.classList.remove("hide");
        loginP.classList.add("hide");


    }
    else if (passk === key2) {
        mainCon2.classList.remove("hide");
        loginP.classList.add("hide");
    }
    else {
        console.log("no");
        alert("your wrong ")
        mainCon.classList.add("hide"); mainCon2.classList.add("hide");
    }
});