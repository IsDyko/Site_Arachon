const nav = document.querySelector("header nav");
const btn = document.querySelector(".hamburger");

btn.addEventListener("click", () => {
	const isOpen = nav.classList.toggle("open");
	document.body.classList.toggle("menu-open", isOpen);
});
