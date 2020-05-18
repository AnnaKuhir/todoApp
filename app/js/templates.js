import { TODO_STATUS } from "./entity.js";

const renderCreateForm = (container) => {
	const template = `
	<button type="button" class="btn close-form-btn"> X </button>
	 <form class="js-addListItem functional-form"
					name="myForm"
					>
				<input type="text" 
							 class="js-addListItem_title addListItem_element "
							 placeholder="Enter title"
							 name="Title" 
							 >
				<input type="text" 
							 class="js-addListItem_description addListItem_element" 
							 placeholder="Enter description"
							 name="Description" 
							 >
				<button type="submit" 
								class="js-addListItem_button addListItem_element">
								Add
				</button>
	</form> 
	`
	container.innerHTML = template;
};

const renderSearchForm = (container) => {
	const template = `
	<button type="button" class="btn close-form-btn"> X </button>
	<form class="js-searchItem functional-form"
				name= "form">
		<input type="text" 
					 class="js-searchItem_searchByTitle searchItem_element"
					 placeholder="Search by title"
					 name = "Search" 
					 >
		<button type="submit" 
						class="js-searchItem_button searchItem_element">
						Search
		</button>
	</form>
	`
	container.innerHTML = template;
};

const renderDropboxStatusContainer = () => {
	const template = `
	<div class="dropbox-container_dropdown">
	<button class="dropbtn bulk-action-btn">Bulk actions</button>
	<div class="dropdown-content">
		<span type="button" class="btn hold-btn">Hold</span>
		<span type="button" class="btn done-btn">Mark as done</span>
		<span type="button" class="btn remove-btn">Remove all</span>
	</div>
</div>
	`
	return template;
};

const renderDropboxSortContainer = () => {
	const template = `
	<div class="dropbox-container_dropdown">
	<button class="dropbtn sort-btn">Sort</button>
	<div class="dropdown-content">
		<span type="button" class="btn sort-by-status-btn">By status</span>
		<span type="button" class="btn sort-by-title-btn">By title</span>
	</div>
</div>
	`
	return template;
}

const renderDropboxContent = (container, options) => {
	if (options && options.clearContainer) {
		container.innerHTML = ''
		return;
	}
	container.innerHTML = `
	${renderDropboxStatusContainer()} 
	${renderDropboxSortContainer()} 
	`
}

const renderTodoList = (container, list) => {
	container.innerHTML = '';
	container.innerHTML = `
	${list.map((item) => {
		if (item.isEdited){
		return	renderEditTodoItem(item);
		}
		return renderTodoItem(item);
	}).join('')}
	`
}

const renderTodoItem = (todo) => {
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
	itemTitle.innerText = todo.title;

	itemDescriotion.className = 'descriptionOfTheItem';
	itemDescriotion.innerText = todo.description;

	buttonContainer.className = 'button-container';
	buttonContainer.appendChild(editButton);
	buttonContainer.appendChild(deleteButton);
	buttonContainer.appendChild(holdButton);
	buttonContainer.appendChild(doneButton);
	buttonContainer.id = todo.id;

	editButton.classList.add('js-edit-button', 'item-functional-button');
	editButton.innerText = 'Edit';

	deleteButton.classList.add('js-delete-button', 'item-functional-button');
	deleteButton.innerText = 'Delete';


	holdButton.classList.add('js-hold-button', 'item-functional-button');
	holdButton.innerText = 'Hold';


	doneButton.classList.add('js-done-button', 'item-functional-button');
	doneButton.innerText = 'Done';

	statusElement.className = 'status-element';
	statusElement.innerText = todo.status;


	if (todo.status === TODO_STATUS.done) {
		editButton.classList.add('disabled-button');
		editButton.disabled = 'true';

		holdButton.classList.add('disabled-button');
		holdButton.disabled = 'true';

		doneButton.classList.add('disabled-button');
		doneButton.disabled = 'true';

		statusElement.style.background = 'lightgrey'
	}

	if (todo.status === TODO_STATUS.hold) {
		editButton.classList.add('disabled-button');
		editButton.disabled = 'true';

		deleteButton.classList.add('disabled-button');
		deleteButton.disabled = 'true';

		doneButton.classList.add('disabled-button');
		doneButton.disabled = 'true';

		holdButton.innerText = 'Unhold';

		statusElement.style.background = 'red'
	}
	return itemContainer.outerHTML;
}

const renderEditTodoItem = (todo) => {
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
	itemTitle.setAttribute('value', todo.title)
	itemTitle.type = 'text';
	itemTitle.required = 'true';

	itemDescriotion.className = 'descriptionOfTheItem';
	itemDescriotion.setAttribute('value', todo.description)
	itemDescriotion.type = 'text';
	itemDescriotion.required = 'true';

	buttonContainer.className = 'button-container';
	buttonContainer.appendChild(cancelButton);
	buttonContainer.appendChild(saveButton);
	buttonContainer.id = todo.id;

	cancelButton.classList.add('js-cancel-button', 'item-functional-edit-button');
	cancelButton.innerText = 'Cancel';

	saveButton.classList.add('js-save-button', 'item-functional-edit-button');
	saveButton.innerText = 'Save';

	statusElement.className = 'status-element';
	statusElement.innerText = todo.status;

	return itemContainer.outerHTML;
}

export {
	renderCreateForm,
	renderSearchForm,
	renderTodoList,
	renderDropboxContent,
}