const addNewItem = document.querySelector('.js-addNew-button');
const searchItem = document.querySelector('.js-search-button');
const formContainer = document.querySelector('.js-formContainer');
const itemsContainer = document.querySelector('.js-itemContainer');
var removeItemButton;


const itemList = [];

const renderFormCreated = () => {
	const template = `
	<form action="#" class="js-addListItem functional-form">
				<input type="text" class="js-addListItem_title addListItem_element " placeholder="Enter title" required="true">
				<input type="text" class="js-addListItem_description addListItem_element" placeholder="Enter description" required="true">
				<button type="submit" class="js-addListItem_button addListItem_element">Add</button>
			</form> 
	`
	formContainer.innerHTML = template;
};

const renderSearchForm = () => {
	const template = `
	<form action="#" class="js-searchItem functional-form">
	<input type="text" class="js-searchItem_searchByTitle searchItem_element" placeholder="Search by title" required="true">
	<button type="submit" class="js-searchItem_button searchItem_element">Search</button>
</form>
	`
	formContainer.innerHTML = template;
}

const renderItemList = (list) => {
	itemsContainer.innerHTML = '';
	itemsContainer.innerHTML = `
	${list.map((item, id) => {
		if (item.isEditing){
			return createEditTemplate(item, id);
		}
		return createBaseItemTemplate(item, id);
	}).join('')}
	`
}

const createBaseItemTemplate = (item, id) => {
	// debugger;
	const itemContainer = document.createElement('div');
	const itemTitle = document.createElement('h1');
	const itemDescriotion = document.createElement('p');
	const buttonContainer = document.createElement('div');
	const editButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	const holdButton = document.createElement('button');
	const doneButton = document.createElement('button');
	const statusElement = document.createElement('span');

	itemContainer.className = 'js-item';
	itemContainer.appendChild(itemTitle);
	itemContainer.appendChild(itemDescriotion);
	itemContainer.appendChild(buttonContainer);
	itemContainer.appendChild(statusElement);

	itemTitle.className = 'titleOfTheItem';
	itemTitle.innerText = item.title;

	itemDescriotion.className = 'descriptionOfTheItem';
	itemDescriotion.innerText = item.description;

	buttonContainer.className = 'button-container';
	buttonContainer.appendChild(editButton);
	buttonContainer.appendChild(deleteButton);
	buttonContainer.appendChild(holdButton);
	buttonContainer.appendChild(doneButton);

	editButton.classList.add('js-edit-button', 'item-functional-button');
	editButton.innerText = 'Edit';
	editButton.id = `edit-${id}`;

	deleteButton.classList.add('js-delete-button', 'item-functional-button');
	deleteButton.innerText = 'Delete';
	deleteButton.id = `delete-${id}`;


	holdButton.classList.add('js-hold-button', 'item-functional-button');
	holdButton.innerText = 'Hold';
	holdButton.id = `hold-${id}`;


	doneButton.classList.add('js-done-button', 'item-functional-button');
	doneButton.innerText = 'Done';
	doneButton.id = `done-${id}`;

	statusElement.className = 'status-element';
	statusElement.innerText = StatusEnam[item.status];


	if (item.status === StatusEnam.done) {
		editButton.classList.add('disabled-button');
		editButton.disabled = 'true';

		holdButton.classList.add('disabled-button');
		holdButton.disabled = 'true';

		doneButton.classList.add('disabled-button');
		doneButton.disabled = 'true';
	}

	if (item.status === StatusEnam.hold) {
		editButton.classList.add('disabled-button');
		editButton.disabled = 'true';

		deleteButton.classList.add('disabled-button');
		deleteButton.disabled = 'true';


		doneButton.classList.add('disabled-button');
		doneButton.disabled = 'true';

		holdButton.innerText = 'Unhold';

	}
	return itemContainer.outerHTML;

}

const createEditTemplate = (item, id) => {
	debugger;
	const itemContainer = document.createElement('div');
	const itemTitle = document.createElement('input');
	const itemDescriotion = document.createElement('input');
	const buttonContainer = document.createElement('div');
	const cancelButton = document.createElement('button');
	const saveButton = document.createElement('button');
	const statusElement = document.createElement('span');

	itemContainer.className = 'js-item';
	itemContainer.appendChild(itemTitle);
	itemContainer.appendChild(itemDescriotion);
	itemContainer.appendChild(buttonContainer);
	itemContainer.appendChild(statusElement);

	itemTitle.className = 'titleOfTheItem';
	itemTitle.setAttribute('value', item.title)
	itemTitle.type = 'text';
	itemTitle.required = 'true';

	itemDescriotion.className = 'descriptionOfTheItem';
	itemDescriotion.setAttribute('value', item.description)
	itemDescriotion.type = 'text';
	itemDescriotion.required = 'true';

	buttonContainer.className = 'button-container';
	buttonContainer.appendChild(cancelButton);
	buttonContainer.appendChild(saveButton);

	cancelButton.classList.add('js-cancel-button', 'item-functional-edit-button');
	cancelButton.innerText = 'Cancel';
	cancelButton.id = `cancel-${id}`;

	saveButton.classList.add('js-save-button', 'item-functional-edit-button');
	saveButton.innerText = 'Save';
	saveButton.id = `save-${id}`;

	statusElement.className = 'status-element';
	statusElement.innerText = StatusEnam[item.status];

	return itemContainer.outerHTML;

}


// const fillItemTemplate = (item, id) => {
// 	// debugger;
// 	const status = StatusEnam[item.status];
// 	const template = `
// 	<div class="js-item">
// 	<h1 class="titleOfTheItem">${item.title}</h1>
// 	<p class="descriptionOfTheItem">${item.description}</p>
// 	<div class="button-container">
// 		<button class="js-edit-button item-functional-button">Edit</button>
// 		<button class="js-delete-button item-functional-button" id="delete-${id}">Delete</button>
// 		<button class="js-hold-button item-functional-button" id="hold-${id}">Hold</button>
// 		<button class="js-done-button item-functional-button" id="done-${id}">Done</button>
// 	</div>
// 	<span>${status}</span>
// </div>
// 	`
// 	return template;
// }

const onAddNewItemClick = () => {
	renderFormCreated();
	const createItemForm = document.querySelector('.js-addListItem');
	createItemForm.addEventListener('submit', onCreateItemSubmit);
}

const onSearchByItemClick = () => {
	renderSearchForm()
	const createSearchForm = document.querySelector('.js-searchItem');
	createSearchForm.addEventListener('submit', onSearchByTitle);
}

const onCreateItemSubmit = (event) => {
	if (event) {
		const title = event.target[0].value;
		const description = event.target[1].value;
		itemList.push(new Item(title, description))
		console.log(itemList);
		renderItemList(itemList);
		event.target.reset();
		initializeEventListeners();
	}
}

const initializeEventListeners = () => {
	const deleteButtonItems = document.querySelectorAll('.js-delete-button');
	if (deleteButtonItems) {
		deleteButtonItems.forEach(item => {
			item.addEventListener('click', onDeleteButtonClick)
		})
	}

	const doneButtonItems = document.querySelectorAll('.js-done-button');
	if (doneButtonItems) {
		doneButtonItems.forEach(item => {
			item.addEventListener('click', onDoneButtonClick)
		})
	}

	const holdButtonItems = document.querySelectorAll('.js-hold-button');
	if (holdButtonItems) {
		holdButtonItems.forEach(item => {
			item.addEventListener('click', onHoldButtonClick)
		})
	}

	const editButtonItems = document.querySelectorAll('.js-edit-button');
	if(editButtonItems){
		editButtonItems.forEach(item => {
			item.addEventListener('click', onEditButtonClick)
		});
	}

	const cancelButtonItems = document.querySelectorAll('.js-cancel-button');
	if(cancelButtonItems){
		cancelButtonItems.forEach(item => {
			item.addEventListener('click', onEditButtonClick)
		});
	}

	const saveButtonItems = document.querySelectorAll('.js-save-button');
	if(saveButtonItems){
		saveButtonItems.forEach(item => {
			item.addEventListener('click', onSaveButtonClick)
		});
	}
}

const onDeleteButtonClick = (event) => {
	// debugger;
	const item = event.target.id;
	const index = item.split('-').pop();
	itemList.splice(index, 1)
	renderItemList(itemList);
	initializeEventListeners();
}

const onDoneButtonClick = (event) => {
	// debugger;
	const item = event.target.id;
	const index = item.split('-').pop();
	itemList[index].status = StatusEnam.done
	renderItemList(itemList)
	initializeEventListeners()
}

const onHoldButtonClick = (event) => {
	const item = event.target.id;
	const index = item.split('-').pop();

	if (itemList[index].status === StatusEnam.hold) {
		itemList[index].status = StatusEnam.pending;
	} else {
		itemList[index].status = StatusEnam.hold;
	}
	renderItemList(itemList)
	initializeEventListeners()
}

const onEditButtonClick = (event) => {
	const item = event.target.id;
	const index = item.split('-').pop();

	itemList[index].isEditing = true;
	renderItemList(itemList)
	initializeEventListeners()

}

const onCalcelButtonClick = (event) =>{
	const item = event.target.id;
	const index = item.split('-').pop();

	itemList[index].isEditing = false;
	renderItemList(itemList)
	initializeEventListeners()
}

const onSaveButtonClick = (event) => {
	// debugger;
	const item = event.target.id;
	const index = item.split('-').pop();

	itemList[index].isEditing = false;
	itemList[index].title = event.target.parentNode.parentNode.childNodes[0].value;
	itemList[index].description = event.target.parentNode.parentNode.childNodes[1].value;

	renderItemList(itemList)
	initializeEventListeners()

}

const onSearchByTitle = (event) => {
	if (event) {
		// debugger;
		const title = event.target[0].value;
		const newItemsList = itemList.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
		renderItemList(newItemsList);
		event.target.reset();
		initializeEventListeners();
	}

}


addNewItem.addEventListener('click', onAddNewItemClick);
searchItem.addEventListener('click', onSearchByItemClick);


class Item {
	constructor(title, description) {
		this.title = title;
		this.description = description;
		this.status = StatusEnam.pending;
		this.isEditing = false;
	}
}

const StatusEnam = {
	'pending': 'pending',
	'hold': 'hold',
	'done': 'done'
}
Object.freeze(StatusEnam);


