let i = 1;

document.querySelector("#sub").addEventListener("click", (event) => {
    event.preventDefault();
})

function addTodo() {
    let todo = document.querySelector(".input_todo #text").value.trim();

    if(todo === ""){
        alert("Please write todo in input field")
        return;
    }
    //created main todo div
    const newTodo = document.createElement("div");
    newTodo.setAttribute("id", `todo-${i++}`);
    newTodo.setAttribute("class", "todo");
    newTodo.setAttribute("onmouseenter", "todoEffectEnter(event)");
    newTodo.setAttribute("onmouseleave", "todoEffectLeave(event)");
    document.querySelector(".todos").appendChild(newTodo);
    const check_todo = document.createElement("div");
    check_todo.style.display = "flex";
    check_todo.style.alignItems = "center";
    check_todo.style.justifyContent = "center";
    check_todo.style.gap = "10px";
    newTodo.appendChild(check_todo);

    //created checkbox
    // const checkbox = document.createElement("span");
    const checkboxIcon = document.createElement("i");
    checkboxIcon.setAttribute("class", "ri-checkbox-blank-circle-line");
    // checkbox.innerHTML = `<i class="ri-checkbox-blank-circle-line"></i>`
    // checkboxIcon.setAttribute("class", "checked");
    checkboxIcon.setAttribute("onclick", "checkboxEffect(event)");
    check_todo.appendChild(checkboxIcon);
    // check_todo.appendChild(checkbox);

    //setting todo
    const todo_text = document.createElement("p");
    todo_text.textContent = `${todo}`;
    check_todo.appendChild(todo_text);

    //setting option buttons
    const options = document.createElement("div");
    options.setAttribute("class", "todo_option");
    //Edit button
    const editBtn = document.createElement("i");
    // editBtn.innerHTML = `<i class="ri-pencil-line"></i>`;
    editBtn.setAttribute("onmouseenter", "optionEffectEnter(event)")
    editBtn.setAttribute("onmouseleave", "optionEffectLeave(event)")
    editBtn.setAttribute("class", "option_effect")
    editBtn.setAttribute("class", "ri-pencil-line")
    options.appendChild(editBtn);
    //Delete button
    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("onclick",`deleteTodo(event)`);
    deleteBtn.setAttribute("onmouseenter", "optionEffectEnter(event)")
    deleteBtn.setAttribute("onmouseleave", "optionEffectLeave(event)")
    deleteBtn.setAttribute("class", "option_effect")
    deleteBtn.setAttribute("class", "ri-delete-bin-5-line")
    // deleteBtn.innerHTML = `<i class="ri-delete-bin-5-line"></i>`;
    options.appendChild(deleteBtn);
    
    newTodo.appendChild(options);

    document.querySelector(".input_todo #text").value = '';
}

function deleteTodo(event){
    // console.log(event)
    let delTodo = event.originalTarget.parentNode.parentElement
    // console.log(delTodo)
    // console.log(delTodo.parentNode.childNodes)
    delTodo.parentElement.removeChild(delTodo);
}

let todo_option = null;
function todoEffectEnter(event){
    event.target.style.backgroundColor = `rgb(251, 244, 236)`;
    event.target.style.transitionDuration = `0.2s`;
    todo_option = event.explicitOriginalTarget.childNodes[1]
    todo_option.style.display = `flex`;
}

function todoEffectLeave(event){
    event.target.style.backgroundColor = `transparent`;
    event.target.style.transitionDuration = `0.2s`;
    todo_option.style.display = `none`;
}

function optionEffectEnter(event){
    event.target.style.cursor = `pointer`;
    event.target.style.backgroundColor = `#333`;
    event.target.style.color = `#dadada`;
    event.target.style.transitionDuration = `0.2s`;
}

function optionEffectLeave(event){
    event.target.style.cursor = `none`;
    event.target.style.backgroundColor = `transparent`;
    event.target.style.color = `#111`;
    event.target.style.transitionDuration = `0.2s`;
}

let flag = 0;
function checkboxEffect(event){
    if(flag == 0){
        event.originalTarget.attributes.class.nodeValue = "ri-checkbox-circle-fill";
        flag = 1;
    }
    else{
        event.originalTarget.attributes.class.nodeValue = "ri-checkbox-blank-circle-line";
        flag = 0;
    }
}