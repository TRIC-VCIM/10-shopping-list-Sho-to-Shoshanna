const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const items =itemList.querySelectorAll('li');
const itemFilter = document.getElementById('filter');

// I kept getting a bunch of errors here only to learn I was miss typing words
function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    if (newItem.value === '') {
        alert('Please add an item');
        return;
    }

    const li = document.createElement('li');
    //I had to relook up what appendShild was but I understand it is the DOM 
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';
}

function createButton(classes) {
    const button =document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon =document.createElement('i');
    icon.className = classes;
    return icon;
}

// I had to look up how many .elemnts you can use in a row and got that a "row" is more based on combatability rather then langth

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
}
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function checkUI() {
    if(items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }
}


itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();
//Okay I am now lost Nothing is disappeaing and I am not understanding what he is doing to get it to disapear let alone how to do it myself.
//Okay after reloading the page it works but because I dont know why it works I have to stop here. I really thought I could get more then this done.