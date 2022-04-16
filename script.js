const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
let password = "";
let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?<>";
let characterLength = characters.length;

function generatePassword(length) {
    password = "";
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characterLength));
    }

    this.message.style.display = "none";
    return (this.passwordInput.value = password);
}

function copyToClipboard() {
    this.passwordInput.select();
    if (password.length > 0) {
        document.execCommand("copy");
        this.message.style.display = "block";
    }
    setTimeout(() => {
        this.message.style.display = "none";
    }, 5000);
}

console.log(Math.random());