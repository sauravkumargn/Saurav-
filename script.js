
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});



window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#020617";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    }

    else {

        header.style.background = "rgba(15,23,42,.95)";

        header.style.boxShadow = "none";

    }

});



const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



const text = [
    "Data Analyst",
    "Python Developer",
    "SQL Developer",
    "Excel Expert"
];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type() {

    if (count === text.length) {

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h2").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    }

    else {

        setTimeout(type, 120);

    }

})();



const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";

topBtn.style.right = "20px";

topBtn.style.bottom = "20px";

topBtn.style.padding = "12px 18px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#38bdf8";

topBtn.style.color = "#fff";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});