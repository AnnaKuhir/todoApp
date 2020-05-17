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

const renderTodoItem = (todo, options) => {
	const template = `
	<div class="js-item">
	<h1 class="js-item-title titleOfTheItem">${todo.title}</h1>
	<p class="js-item-description descriptionOfTheItem">${todo.description}</p>
	${renderTodoBtnContainer(todo, options)}
	<span class="status-element">${todo.status}</span>
</div>
	`
	return template;
}

const renderEditTodoItem = (todo) => {
	const template = `
	<div class="js-item">
	<input type="text" class="js-item-title input-title">
  <input type="text" class="js-item-description input-description">
	${renderTodoBtnContainer(todo, options)}
	<span class="status-element">${todo.status}</span>
</div>
	`
	return template;
}

const renderTodoBtnContainer = (todo, options) => {
	if (options) {
		const template = `
		<div class="button-container" id="${todo.id}">
			<button class="js-edit-button item-functional-button 
						${options.editBtn.classes.map(x => x)}" 
					>
						Edit
			</button>
			<button class="js-delete-button item-functional-button 
						${options.deleteBtn.classes.map(x => x)}" 
						>
						Delete
			</button>
			<button class="js-hold-button item-functional-button 
						${options.holdBtn.classes.map(x => x)}" 
						>
						${options.holdBtn.innerText}
			</button>
			<button class="js-done-button item-functional-button 
						${options.doneBtn.classes.map(x => x)}" 
						>
						Done
			</button>
		</div>
		`
		return template;
	}
}

const renderTodoList = (container, list) => {
	// debugger
	container.innerHTML = '';
	container.innerHTML = `
	${list.map((item) => {
		const options = setButtonsOptions(item);
		return renderTodoItem(item, options);
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