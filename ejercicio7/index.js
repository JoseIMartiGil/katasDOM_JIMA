//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const printHere = document.querySelector("[data-function='printHere']");

placesList=document.createElement("ul");
placesList.innerHTML="Places";
for(const place of places){
    placeListElement=document.createElement("li");
    placeListElement.innerHTML=place;
    placesList.appendChild(placeListElement);
}
printHere.appendChild(placesList);