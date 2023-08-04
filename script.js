const input = document.querySelector(".input-text")
const listTaskComplete = document.querySelector(".list-item")

let listItems = []

function addNewTask() {

  const taskInput = input.value.trim();
  if(taskInput !== ""){
    listItems.push({
      task_item: input.value,
      completed: false
    })

    input.value = '' 

    displayTask()
  }else{
    alert("Preencha o campo de texto!")
  }
  
}

function displayTask() {
  let newLi = ''

  listItems.forEach((task, position) => {
    newLi = newLi + `

        <li class="item ${task.completed && "done"}">
          <p>${task.task_item}</p>
          <div class="img-item">
            <img src="img/checked.png" alt="checked" onclick="checkItems(${position})" />
            <img src="img/trash.png" alt="lixeira" onclick="removeItems(${position})" />
          </div>
        </li>
        `
  })

  listTaskComplete.innerHTML = newLi 


  localStorage.setItem('list', JSON.stringify(listItems))
}

function removeItems(position){
  listItems.splice(position, 1)
  displayTask()
}

function checkItems(position){
  listItems[position].completed = !listItems[position].completed

  displayTask()
}

function rechargeTask(){
  const taskLocal = localStorage.getItem('list')

  if(taskLocal){
    listItems = JSON.parse(taskLocal)
  }
  
  displayTask()
}

rechargeTask()