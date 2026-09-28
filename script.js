//document.getElementById("slideshow").innerHTML

fetch("collection.json")
  .then(response => response.json())
  .then(collection => {
    const gallery = document.getElementById("gallery");

    collection.forEach(item => {
      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <img src="${item.Picture}">
        <h2>${item.Name}</h2>
        <p>${item.Gender} · ${item.Class}· ${item.Characteristics}</p>
      `;

      gallery.appendChild(card);
    });
  });

  fetch("collectionTwo.json")
  .then(response => response.json())
  .then(collectionTwo => {
    const galleryTwo = document.getElementById("galleryTwo");

    collectionTwo.forEach(item => {
      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <img src="${item.Picture}">
        <h2>${item.Name}</h2>
        <p>${item.Gender} | ${item.Class} | ${item.Characteristics}</p>
      `;

      galleryTwo.appendChild(card);
    });
  });