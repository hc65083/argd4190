function loadGallery(galleryId, collectionFile, separator) {
  const gallery = document.getElementById(galleryId);

  // This script is shared by pages that do not have a gallery.
  if (!gallery) return;

  fetch(collectionFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not load ${collectionFile}: ${response.status}`);
      }
      return response.json();
    })
    .then(collection => {
      collection.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const name = document.createElement("h2");
        name.textContent = item.Class;

        if (item.Picture) {
          const revealButton = document.createElement("button");
          revealButton.type = "button";
          revealButton.className = "card-image";
          revealButton.setAttribute("aria-label", `Reveal ${item.Class} character`);

          const image = document.createElement("img");
          image.src = item.Picture;
          image.alt = `${item.Class} character`;
          revealButton.appendChild(image);

          // Native buttons also respond to Enter and Space.
          revealButton.addEventListener("click", () => {
            name.textContent = item.Name;
            image.alt = item.Name;
            revealButton.classList.add("is-revealed");
            revealButton.setAttribute("aria-label", `${item.Name}'s image revealed`);
            revealButton.setAttribute("aria-disabled", "true");
          }, { once: true });

          card.appendChild(revealButton);
        }

        card.appendChild(name);

        const details = document.createElement("p");
        details.textContent = [item.Gender, item.Class, item.Characteristics].join(separator);
        card.appendChild(details);

        gallery.appendChild(card);
      });
    })
    .catch(error => {
      console.error(error);
      gallery.textContent = "The characters could not be loaded. Please try refreshing the page.";
    });
}

loadGallery("gallery", "collection.json", " · ");
loadGallery("galleryTwo", "collectionTwo.json", " | ");
