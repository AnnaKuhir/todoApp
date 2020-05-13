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
		return fillItemTemplate(item, id)
	}).join('')}
	`
}

const fillItemTemplate = (item, id) => {
	// debugger;
	const status = StatusEnam[item.status];
	const template = `
	<div class="js-item">
	<h1 class="titleOfTheItem">${item.title}</h1>
	<p class="descriptionOfTheItem">${item.description}</p>
	<div class="button-container">
		<button class="js-edit-button item-functional-button">Edit</button>
		<button class="js-delete-button item-functional-button" id="delete-${id}">Delete</button>
		<button class="js-hold-button item-functional-button">Hold</button>
		<button class="js-done-button item-functional-button">Done</button>
	</div>
	<span>${status}</span>
</div>
	`
	return template;
}

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
}

const onDeleteButtonClick = (event) => {
	debugger;
	const item = event.target.id;
	const index = item.split('-').pop();
	itemList.splice(index, 1)
	renderItemList(itemList);
	initializeEventListeners();
}

const onDoneButtonClick = (event) => {
	const item = event.target.id;
	const index = item.split('-').pop(); 

}

const onSearchByTitle = (event) => {
	if (event) {
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
	}
}

const StatusEnam = {
	'pending' : 'pending' ,
	'hold' : 'hold',
	'done' : 'done'
}
Object.freeze(StatusEnam);


// const status = new Enum(
// 	'pending',
// 	'hold',
// 	'done'
// )

