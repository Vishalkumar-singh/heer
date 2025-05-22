const key = "123";
const key2 = "555";
let checkPass = document.querySelector(".inPass");
let pass = document.querySelector(".yourPass");
let loginP = document.querySelector(".login");
let mainCon = document.querySelector(".main");
let mainCon2 = document.querySelector(".main2");
let my_text = document.querySelector(".mytext");
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
        my_text.innerHTML = `5/22/2025 <br> Aaj mai sabse jyada khush tha kyuki mughe pahle kabhi yesa feel nhi huaa tha jaisa mai tumahre se liptke huaa. us samay mughe kuchh hosh nhi tha mai bs itans chahta tha ki bs ye pal kabhi khatam na ho mughe kisi ki chinta nhi thi thanks, thanks for this moment.aur ha agli bar jab mai tumhe hug karu to tum bhi karana is bar tumhe bs jane ki jaldi thi pr agli bat yesa mat karna samghi meri red panda😘🐼`
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

