document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".pridejimoForma form");
    const cardsContainer = document.querySelector(".cardsContainer");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            animal: document.getElementById("animal").value,
            breed: document.getElementById("breed").value,
            info: document.getElementById("info").value,
            image: document.getElementById("image").value
        };

        fetch("http://localhost:3000/gyvunai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => {
            form.reset();
            loadAnimals();
        })
        .catch(error => console.error("Error:", error));
    });

    function loadAnimals() {
        fetch("http://localhost:3000/gyvunai")
            .then(response => response.json())
            .then(data => {
                cardsContainer.innerHTML = "";

                data.forEach(animal => {
                    const card = document.createElement("div");
                    card.classList.add("animal-card");

                    const img = document.createElement("img");
                    img.setAttribute("src", animal.image);
                    img.setAttribute("alt", animal.name);

                    const name = document.createElement("h3");
                    name.textContent = animal.name;

                    const button = document.createElement("button");
                    button.textContent = "Placiau";

                    const moreInfo = document.createElement("div");
                    moreInfo.classList.add("more-info");

                    const type = document.createElement("p");
                    type.innerHTML = `<strong>Tipas:</strong> ${animal.animal}`;

                    const breed = document.createElement("p");
                    breed.innerHTML = `<strong>Veisle:</strong> ${animal.breed}`;

                    const age = document.createElement("p");
                    age.innerHTML = `<strong>Amžius:</strong> ${animal.age}`;

                    const info = document.createElement("p");
                    info.innerHTML = `<strong>Info:</strong> ${animal.info}`;

                    moreInfo.appendChild(type);
                    moreInfo.appendChild(breed);
                    moreInfo.appendChild(age);
                    moreInfo.appendChild(info);

                    button.addEventListener("click", function () {
                        moreInfo.classList.toggle("open");

                        if (moreInfo.classList.contains("open")) {
                            button.textContent = "Slepti";
                        } else {
                            button.textContent = "Placiau";
                        }
                    });

                    // Append all elements to the card
                    card.appendChild(img);
                    card.appendChild(name);
                    card.appendChild(button);
                    card.appendChild(moreInfo);

                    // Append the card to the cards container
                    cardsContainer.appendChild(card);
                });
            })
            .catch(error => console.error("Error:", error));
    }

    loadAnimals(); // Load existing animals on page load
});
