/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const bodyElement=document.querySelector("body");
countriesList=document.createElement("ul");
countriesList.innerHTML="Countries";
for(const country of countries){
    countryListElement=document.createElement("li");
    countryListElement.innerHTML=country;
    countriesList.appendChild(countryListElement);
}
bodyElement.appendChild(countriesList);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementsToRemove = document.querySelectorAll(".fn-remove-me")
for(element of elementsToRemove){
    bodyElement.removeChild(element);
}

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereNodes =document.querySelector("[data-function='printHere']");

carsList=document.createElement("ul");
carsList.innerHTML="Cars";
for(const car of cars){
    carListElement=document.createElement("li");
    carListElement.innerHTML=car;
    carsList.appendChild(carListElement);
}
printHereNodes.appendChild(carsList);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/
const countriesObjects = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]
for(const countryObject of countriesObjects){
    divCountryObject=document.createElement("div");
    divCountryObject.classList.add("divCountryObject");
    h4CountryObject=document.createElement("h4");
    imgCountryObject=document.createElement("img");
    h4CountryObject.innerHTML=countryObject.title;
    imgCountryObject.src=countryObject.imgUrl;
    imgCountryObject.alt=countryObject.title;
    divCountryObject.appendChild(h4CountryObject)
    divCountryObject.appendChild(imgCountryObject)
    bodyElement.appendChild(divCountryObject)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/
const button = document.createElement("button");
button.innerText = "Delete last";
bodyElement.appendChild(button)
button.addEventListener("click",() => {
    let getDivCountryObject = document.querySelectorAll(".divCountryObject")
    if(getDivCountryObject.length >0){
        document.body.removeChild(getDivCountryObject[getDivCountryObject.length - 1]); // 
    }
})


/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/
for (const countryObjectAltern of countriesObjects) {
    const divCountryObjectAltern = document.createElement("div");
    divCountryObjectAltern.classList.add("divCountryObjectAltern");
    const h4CountryObjectAltern = document.createElement("h4");
    const imgCountryObjectAltern = document.createElement("img");
    h4CountryObjectAltern.innerHTML = countryObjectAltern.title;
    imgCountryObjectAltern.src = countryObjectAltern.imgUrl;
    imgCountryObjectAltern.alt = countryObjectAltern.title;
    divCountryObjectAltern.appendChild(h4CountryObjectAltern);
    divCountryObjectAltern.appendChild(imgCountryObjectAltern);
    bodyElement.appendChild(divCountryObjectAltern);

    // Crear un botón para eliminar este div específico
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    divCountryObjectAltern.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        document.body.removeChild(divCountryObjectAltern);
    });
}