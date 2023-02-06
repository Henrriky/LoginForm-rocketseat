const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const imgMail = document.querySelector('img[alt="Icone de email"');
const imgPass = document.querySelector('img[alt="Icone de senha"]');


email.addEventListener("focus", () => {
    imgMail.setAttribute("src", "./assets/svg/mail-focus.svg");
})

email.addEventListener("blur", () => {
    imgMail.setAttribute("src", "./assets/svg/mail.svg");
});

password.addEventListener("focus", () => {
    imgPass.setAttribute("src", "./assets/svg/lock-focus.svg");
})

password.addEventListener("blur", () => {
    imgPass.setAttribute("src", "./assets/svg/lock.svg");
});