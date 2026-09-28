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
        <img src="${item.Picture}">
        <h2>${item.Name}</h2>
        <p>${item.Gender} · ${item.Class}· ${item.Characteristics}</p>
      `;

      gallery.appendChild(card);
    });
  });