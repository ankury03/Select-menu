const Field = document.querySelector("#selectField");
const Text = document.querySelector("#selectText");
const Options = document.querySelectorAll(".options");
const list = document.querySelector("#list");
const arrow = document.querySelector("#arrow");

Field.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}

for(option of Options){
    option.onclick = function(){
        Text.innerHTML = this.textContent;   
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");

    }
}