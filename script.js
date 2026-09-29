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

        // Picture is the image path from the JSON, e.g. "MBTI/thea.jpg".
        if (item.Picture) {
          const image = document.createElement("img");
          image.src = item.Picture;
          image.alt = item.Name;
          card.appendChild(image);
        }

        const name = document.createElement("h2");
        name.textContent = item.Name;
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
