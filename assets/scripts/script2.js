var buttons = document.querySelectorAll(".saveBtn");
var textarea = document.querySelectorAll("textarea");

//console.log(buttons);
//console.log(textarea);

function ButtonSave(event){
    event.preventDefault();
    console.log(this.previousElementSibling.id);
    console.log(this.previousElementSibling.value);
   
    var newTask = this.previousElementSibling.value;
    var newTaskHour = this.previousElementSibling.id;
    localStorage.setItem(newTaskHour, newTask);
}

function inputSave(event){
    event.preventDefault();
    console.log(this.value);
    console.log(this.id);
}

for(var i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", ButtonSave)
}

// for(var i = 0; i< textarea.length; i++){
//     textarea[i].addEventListener("keypress", inputSave)
// }