const addNewItem = document.getElementById('js-addNew-button');
const searchItem = document.getElementById('js-search-button');
const formContainer = document.getElementById('formContainer');
const itemsContainer = document.getElementById('itemContainer')


const itemList = [];

const renderFormCreated = () => {
	const template = `
	<form action="#" class="js-addListItem" id="create-item-form">
				<input type="text" class="js-addListItem_title addListItem_element " placeholder="Enter title" required="true">
				<input type="text" class="js-addListItem_description addListItem_element" placeholder="Enter description" required="true">
				<button type="submit" class="js-addListItem_button addListItem_element">Add</button>
			</form> 
	`
	formContainer.innerHTML = template;
};

const renderSearchForm = () => {
	const template = `
	<form action="#" class="js-searchItem">
	<input type="text" class="js-searchItem_searchByTitle searchItem_element" placeholder="Search by title">
	<button type="submit" class="js-searchItem_button searchItem_element">Search</button>
</form>
	`
	formContainer.innerHTML = template;
}

const renderItemList = (list) => {
	itemsContainer.innerHTML = '';
	itemsContainer.innerHTML = `
	${list.map(item=>{
		return fillItemTemplate(item.title, item.description)
	}).join('')}
	`
}

const fillItemTemplate = (title, description) =>{
	const template = `
	<div class="js-item" id="js-item">
	<h1 class="titleOfTheItem" id="js-item-title">${title}</h1>
	<p class="descriptionOfTheItem" id="js-item-description">${description}</p>
	<div class="button-container">
		<button class="item-functional-button" id="js-edit-button ">Edit</button>
		<button class="item-functional-button" id="js-delete-button">Delete</button>
		<button class="item-functional-button" id="js-hold-button">Hold</button>
		<button class="item-functional-button" id="js-done-button">Done</button>
	</div>
	<span>pending</span>
</div>
	`
	return template;
}

const onAddNewItemClick = () => {
	renderFormCreated();
	const createItemForm = document.getElementById('create-item-form');
	createItemForm.addEventListener('submit', onCreateItemSubmit);
}

const onSearchByItemClick = () => {
	renderSearchForm()
}

const onCreateItemSubmit = (event) => {
if (event){
	const title = event.target[0].value;
	const description = event.target[1].value;
	itemList.push(new Item (title, description))
	console.log(itemList);
	renderItemList(itemList);
}
}




addNewItem.addEventListener('click', onAddNewItemClick);
searchItem.addEventListener('click', onSearchByItemClick);





class Item {
	constructor(title, description){
		this.title = title;
		this.description = description;
	}
}




