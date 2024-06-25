//Elimina el elemento que tenga la clase .fn-remove-me.
const body_element=document.querySelector("body");
const elements_to_remove = document.querySelectorAll(".fn-remove-me")
for(element of elements_to_remove){
    body_element.removeChild(element);
}