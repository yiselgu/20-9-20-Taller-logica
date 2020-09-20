const btnList = document.getElementById("btnList");
const btnTask = document.getElementById("btnTask");
//const inputList = document.getElementById("inputList");
const userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem("userName");

btnTask.addEventListener("click", enterTask);

function enterTask() {
  var getTask = prompt("Ingresa tu Tarea");
  const taskList = document.getElementById("taskList");
  const task = document.createElement("li");
  if(getTask != ""){
  task.textContent = getTask;
  taskList.appendChild(task);
  swal("", "Lista registrada satisfactoriamente!", "success");
}else{
    swal("", "Debe ingresar una Lista!", "info");
}
  task.addEventListener("dblclick", () => {
    task.remove();
  });
}

btnList.onclick = function () {
    enterList();
  };

function enterList() {
  const inputList = document.getElementById("inputList").innerText;
  console.log(inputList);
  const list = document.getElementById("list");
  const itemList = document.createElement("li");
  if (inputList != "") {
    itemList.textContent = inputList;
    list.appendChild(itemList);
    swal("", "Tarea registrada satisfactoriamente!", "success");
    document.getElementById("inputList").innerHTML = "";
  } else {
    swal("", "Debe ingresar una tarea!", "info");
  }
  itemList.addEventListener("click", () => {
    itemList.classList.toggle("tachado");
  });
  itemList.addEventListener("dblclick", () => {
    itemList.remove();
  });
}

