// Données des voitures
const carModels = [
	{
		name: "Sport",
		type: "sport",
		image: "./medias/images/car_side2-removebg-preview.png",
	},
	{
		name: "Panther",
		type: "electric",
		image: "./medias/images/car_side3-removebg-preview.png",
	},
	{
		name: "M",
		type: "suv",
		image: "./medias/images/car_side-removebg-preview.png",
	},
	{
		name: "S7",
		type: "4wd",
		image: "./medias/images/car_side4-removebg-preview.png",
	},
];

const cardModelsContainer = document.querySelector(".card_models");
const modelButtons = document.querySelectorAll(".models button");

// Fonction pour générer les cartes de modèles
function renderModels(filter = "all") {
	cardModelsContainer.innerHTML = "";
	carModels
		.filter((model) => filter === "all" || model.type === filter)
		.forEach((model) => {
			const card = document.createElement("div");
			card.classList.add("card");

			const img = document.createElement("img");
			img.src = model.image;
			img.alt = model.name;

			const name = document.createElement("h3");
			name.textContent = model.name;
			name.classList.add("model-name");

			card.appendChild(img);
			card.appendChild(name);
			cardModelsContainer.appendChild(card);
		});
}

// 🔹 Préparer les boutons (sauvegarder les icônes originales)
modelButtons.forEach((btn) => {
	const icon = btn.querySelector("i");
	if (icon) {
		// on garde la classe originale de l'icône
		btn.dataset.originalIcon = icon.className;
	}
});

// Logique des boutons
modelButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const filter = btn.dataset.filter || "all";

		// reset tous les boutons
		modelButtons.forEach((b) => {
			b.classList.remove("active");

			const icon = b.querySelector("i");
			if (icon) {
				if (b.dataset.originalIcon) {
					// remettre l'icône d'origine
					icon.className = b.dataset.originalIcon;
				} else {
					// si à la base il n'y en avait pas, on l'enlève
					icon.remove();
				}
			}
		});

		// activer le bouton cliqué
		btn.classList.add("active");

		// gérer l'icône du bouton actif
		let activeIcon = btn.querySelector("i");
		if (!activeIcon) {
			activeIcon = document.createElement("i");
			activeIcon.className = "fa-solid fa-check";
			btn.prepend(activeIcon);
		} else {
			activeIcon.className = "fa-solid fa-check";
		}

		// filtrer les modèles
		renderModels(filter);
	});
});

// État initial : premier bouton actif
if (modelButtons.length > 0) {
	modelButtons[0].click(); // utilise toute la logique ci-dessus
} else {
	renderModels("all");
}
