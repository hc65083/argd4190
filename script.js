const MBTIBuilds = [
    {
        name: "mae",
        mbti:""
    },

    {
        
    }
];

const zodiacBuilds = [
    {
        name: "wiley",
        zodiac:""
    },

    {
        
    }
];

function hi(params) {
    //hi
}

for (let i = 0; i < MBTIBuilds.length; i++) {
    //hi
}

//document.getElementById("slideshow").innerHTML

fetch("collection.json")
  .then(response => response.json())
  .then(collection => {
    const gallery = document.getElementById("gallery");

    collection.forEach(item => {
      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.year} · ${item.artist}</p>
      `;

      gallery.appendChild(card);
    });
  });