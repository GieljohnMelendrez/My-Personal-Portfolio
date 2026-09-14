// Feature 1: Welcome Message Button Interaction
const welcomeBtn = document.getElementById("welcome-btn");
const welcomeMsg = document.getElementById("welcome-msg");

const greetings = [
	"Hello there! Thanks for dropping by my portfolio!",
	"Glad to have you here! Feel free to check out my projects.",
	"Welcome! Let's build something amazing together.",
];

welcomeBtn.addEventListener("click", () => {
	const randomGreeting =
		greetings[Math.floor(Math.random() * greetings.length)];
	welcomeMsg.textContent = randomGreeting;
	welcomeMsg.style.animation = "none";
	welcomeMsg.offsetHeight;
	welcomeMsg.style.animation = "fadeIn 0.4s ease-in-out";
});

// Expandable About Me Content
const readMoreBtn = document.getElementById("read-more-btn");
const extraAbout = document.getElementById("extra-about");

readMoreBtn.addEventListener("click", () => {
	if (extraAbout.style.display === "block") {
		extraAbout.style.display = "none";
		readMoreBtn.textContent = "Read More";
	} else {
		extraAbout.style.display = "block";
		readMoreBtn.textContent = "Read Less";
	}
});

// Dynamic Theme Toggle (Dark/Light mode switch)
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = themeToggleBtn.querySelector("i");

themeToggleBtn.addEventListener("click", () => {
	document.body.classList.toggle("light-theme");
	if (document.body.classList.contains("light-theme")) {
		themeIcon.classList.remove("fa-moon");
		themeIcon.classList.add("fa-sun");
	} else {
		themeIcon.classList.remove("fa-sun");
		themeIcon.classList.add("fa-moon");
	}
});

// Mobile Responsive Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll("nav a").forEach((link) => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("active");
	});
});

// Real-Time Live Clock Widget
function updateDateTime() {
	const datetimeSpan = document.getElementById("live-datetime");
	const now = new Date();
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	};
	datetimeSpan.textContent = now.toLocaleString("en-US", options);
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Interactive Contact Form Handler
const contactForm = document.getElementById("contact-form");
const formResponseMsg = document.getElementById("form-response-msg");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value;

	formResponseMsg.textContent = `Thank you, ${name}! Your message has been routed successfully. I will get back to you soon.`;
	formResponseMsg.style.color = "var(--primary-color)";

	contactForm.reset();
});

// Image Pop-up (Lightbox) Modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.querySelector(".modal-close");

// Kunin ang lahat ng profile photo at gallery images
const clickableImages = document.querySelectorAll(
	".profile-photo, .gallery-img",
);

clickableImages.forEach((img) => {
	img.addEventListener("click", () => {
		modal.style.display = "block";
		modalImg.src = img.src;
	});
});

// Isara ang modal kapag pinindot ang 'X'
modalClose.addEventListener("click", () => {
	modal.style.display = "none";
});

// Isara din ang modal kapag pinindot ang labas ng larawan (backdrop)
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});
