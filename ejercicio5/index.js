/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
*/
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

const bodyElement=document.querySelector("body");
albumsList=document.createElement("ul");
albumsList.innerHTML="Albums";
for(const album of albums){
    albumListElement=document.createElement("li");
    albumListElement.innerHTML=album;
    albumsList.appendChild(albumListElement);
}
bodyElement.appendChild(albumsList);