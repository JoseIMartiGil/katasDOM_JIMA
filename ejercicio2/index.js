//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div_element = document.createElement("div");
const body_element=document.querySelector("body");
body_element.appendChild(div_element);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div_element_second = document.createElement("div");
const p_element = document.createElement("p");
p_element.innerHTML="Hi world";
div_element_second.appendChild(p_element);
body_element.appendChild(div_element_second);
//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div_element_loop = document.createElement("div");
for(i=0;i<6;i++){
    const p_element_loop = document.createElement("p");
    p_element_loop.innerHTML="ploop" + i;
    div_element_loop.appendChild(p_element_loop);
}
body_element.appendChild(div_element_loop);

//1.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.
p_element_dinamic=document.createElement("p");
p_element_dinamic.innerHTML="Soy dinámico!";
body_element.appendChild(p_element_dinamic);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const elements = document.querySelectorAll(".fn-insert-here");
for(const element of elements){
    if(element.nodeName==='H2'){
        element.innerHTML="Wubba Lubba dub dub";
    }
}

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
ul_dynamic=document.createElement("ul");
ul_dynamic.innerHTML="Prepare for this awesome list";
for(const app of apps){
    li_dynamic=document.createElement("li");
    li_dynamic.innerHTML=app;
    ul_dynamic.appendChild(li_dynamic);
}
body_element.appendChild(ul_dynamic);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elements_to_remove = document.querySelectorAll(".fn-remove-me")
for(element of elements_to_remove){
    body_element.removeChild(element);
}

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const empty_divs = document.querySelectorAll("div:empty")
for(const emptyDiv of empty_divs){
    const p_element_loop = document.createElement("p");
    p_element_loop.innerHTML='Voy en medio!';
    emptyDiv.appendChild(p_element_loop);
}

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const elementsClassInsertHere = document.querySelectorAll(".fn-insert-here")
for(const divClassInsertHere of elementsClassInsertHere){
    const p_element_loop = document.createElement("p");
    p_element_loop.innerHTML='Voy dentro!';
    divClassInsertHere.appendChild(p_element_loop);
}