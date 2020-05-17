import { TODO_STATUS } from "./entity.js";

const renderCreateForm = (container) => {

	const template = `
	<button type="button" class="btn close-form-btn"> X </button>
 	<form class="js-addListItem functional-form">
				<input type="text" 
							 class="js-addListItem_title addListItem_element "
							 placeholder="Enter title" required="true">
				<input type="text" 
							 class="js-addListItem_description addListItem_element" placeholder="Enter description" required="true">
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
	<form class="js-searchItem functional-form">
		<input type="text" 
					 class="js-searchItem_searchByTitle searchItem_element"
					 placeholder="Search by title" 
					 required="true">
		<button type="submit" 
						class="js-searchItem_button searchItem_element">
						Search
		</button>
	</form>
	`
	container.innerHTML = template;
}

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
}

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

// const renderEditTodoItem = (todo, options) => {
// 	const template = `
// 	<div class="js-item">
// 	<h1 class="js-item-title titleOfTheItem">${todo.title}</h1>
// 	<p class="js-item-description descriptionOfTheItem">${todo.description}</p>
// 	${renderTodoBtnContainer(todo, options)}
// 	<span class="status-element">${todo.status}</span>
// </div>
// 	`
// 	return template;
// }

// const renderEditTodoItem = (todo) => {
// 	const template = `
// 	<div class="js-item">
// 	<input type="text" class="js-item-title input-title">
//   <input type="text" class="js-item-description input-description">
// 	${renderTodoBtnContainer(todo, options)}
// 	<span class="status-element">${todo.status}</span>
// </div>
// 	`
// 	return template;
// }

// const renderTodoBtnContainer = (todo, options) => {
// 	if (options) {
// 		debugger;
// 		const template = `
// 		<div class="button-container" id="${todo.id}">
// 			<button class="js-edit-button item-functional-button 
// 						${options.editBtn.classes.map(x => x)}" 
// 					>
// 						Edit
// 			</button>
// 			<button class="js-delete-button item-functional-button 
// 						${options.deleteBtn.classes.map(x => x)}" 
// 						>
// 						Delete
// 			</button>
// 			<button class="js-hold-button item-functional-button 
// 						${options.holdBtn.classes.map(x => x)}" 
// 						>
// 						${options.holdBtn.innerText}
// 			</button>
// 			<button class="js-done-button item-functional-button 
// 						${options.doneBtn.classes.map(x => x)}" 
// 						>
// 						Done
// 			</button>
// 		</div>
// 		`
// 		return template;
// 	}
// }

// const renderTodoBtnContainer = (todo, options) => {
// 	if (options) {
// 		// debugger;
// 		const buttonContainer = document.createElement('div');
// 		const editButton = document.createElement('button');
// 		const deleteButton = document.createElement('button');
// 		const holdButton = document.createElement('button');
// 		const doneButton = document.createElement('button');

// 		buttonContainer.appendChild(editButton);
// 		buttonContainer.appendChild(deleteButton);
// 		buttonContainer.appendChild(holdButton);
// 		buttonContainer.appendChild(doneButton);
// 		buttonContainer.classList.add('button-container');
// 		buttonContainer.id = todo.id;

// 		editButton.classList.add(options.editBtn.classes.map( x => x));
// 		editButton.innerText = 'Edit';
// 		editButton.disabled = options.editBtn.disabled;

// 		deleteButton.classList.add(options.deleteBtn.classes.map( x => x));
// 		deleteButton.innerText = 'Delete';
// 		deleteButton.disabled = options.deleteBtn.disabled;

// 		holdButton.classList.add(options.holdBtn.classes.map( x => x));
// 		holdButton.innerText = options.holdBtn.innerText;
// 		holdButton.disabled = options.holdBtn.disabled;

// 		doneButton.classList.add(options.doneBtn.classes.map( x => x));
// 		doneButton.innerText = 'Done';
// 		doneButton.disabled = options.doneBtn.disabled;

// 		return buttonContainer.outerHTML;
// 	}
// }

const renderTodoList = (container, list) => {
	// debugger
	container.innerHTML = '';
	container.innerHTML = `
	${list.map((item) => {
		// const options = setButtonsOptions(item);
		if (item.isEdited){
		return	renderEditTodoItem(item);
		}
		return renderTodoItem(item);
	}).join('')}
	`
}

const setButtonsOptions = (todo) => {
	const options = {
		editBtn: {
			classes: [],
			disabled: false,
		},
		deleteBtn: {
			classes: [],
			disabled: false,
		},
		holdBtn: {
			classes: [],
			disabled: false,
			innerText: 'Hold'
		},
		doneBtn: {
			classes: [],
			disabled: false,
		}
	}
	if (todo.status == TODO_STATUS.hold) {
		options.holdBtn.innerText = 'Unhold';

		options.deleteBtn.disabled = true;
		options.editBtn.disabled = true;
		options.doneBtn.disabled = true;
	}
	// if (todo.status == TODO_STATUS.done) {
	// 	options.holdBtn.classes = ['js-unhold-button'];
	// 	options.holdBtn.innerHTML = 'Unhold';

	// 	options.deleteBtn.disabled = true;
	// 	options.editBtn.disabled = true;
	// 	options.doneBtn.disabled = true;
	// }
	return options;
}


const renderTodoItem = (todo) => {
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
	}

	if (todo.status === TODO_STATUS.hold) {
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

const renderEditTodoItem = (todo) => {
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







const clearContainer = (container) => {
	if (container) {
		container.innerHTML = '';
	}
}

export {
	renderCreateForm,
	renderSearchForm,
	renderTodoList,
	renderDropboxContent,
	clearContainer,
}