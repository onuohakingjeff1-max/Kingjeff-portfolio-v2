let contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", function(){
    alert("Welcome! I'm glad you're here. Click OK to continue to my contact page.");
});
}

let projectBtn = document.getElementById("projectBtn");

if (projectBtn) {
    projectBtn.addEventListener("click", function(){
    alert("Welcome! Here are some of the projects I've created using HTML, CSS and JavaScript.");
});
}

let heroTitle = document.getElementById("heroTitle");

if (heroTitle) {
    heroTitle.textContent = "Welcome to Kingjeff's Portfolio!";
}

let message = document.getElementById("message");

if (contactBtn && message) {
    contactBtn.addEventListener("click", function(){
    message.textContent = "Thank you for reaching out! I'll get back to you soon.";
});
}

let themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "Light Mode";
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "Dark Mode";
        }

    });

}

let sendBtn = document.getElementById("sendBtn");

if (sendBtn) {
    sendBtn.addEventListener("click", function(event) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Hi! please complete all the fields before sending your message.");
    } else {
        alert("Thank you! Your message has been received.");
    }
});
}

let hamburger = document.getElementById("hamburger");
let navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("show");
});
}

