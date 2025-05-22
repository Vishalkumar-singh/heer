const key = "123";
const key2 = "vishal8809121317";
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



// let send = document.querySelector(".send");
// let massage = document.querySelector(".send-mass");
// send.addEventListener("click", () => {
//     (function () {
//         emailjs.init("kumarsinghvishal496@gmail.com"); // Replace with your EmailJS user ID
//     })();
//     function sendEmail() {
//         var params = {
//             to_name: "💞",
//             from_name: "Heer",
//             message: massage.value
//         };
//         emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params) // Replace with your EmailJS service and template IDs
//             .then(function (response) {
//                 alert("Email sent successfully!", response);
//             }, function (error) {
//                 alert("Error sending email:", error);
//             });
//     }

// });

