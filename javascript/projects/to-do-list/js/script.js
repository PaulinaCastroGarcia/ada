var add = document.getElementById('add');
var input = document.getElementById('text');
var list = document.getElementById('list');

function addToDo(evt) {
  evt.preventDefault();
  if (input.value != '') {
    var newToDo = document.createElement('div');
    var button = document.createElement('button');
    var inputValue = input.value;

    newToDo.innerHTML = inputValue;
    button.innerHTML = 'X';
    button.addEventListener('click', removeToDo)

    newToDo.appendChild(button);
    list.appendChild(newToDo);

    input.value = '';
  }
}

function removeToDo(evt) {
  var divToDelete = evt.target.parentNode;
  list.removeChild(divToDelete);
}

add.addEventListener('click', addToDo);
