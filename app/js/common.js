import {
	todoList,
	createTodo,
	TODO_STATUS,
	getTodos,
	addTodo,
	deteleTodo,
	editTodo,
	setStatus,
	setStatusToAll,
	deteleAll
} from './entity.js';


import {
	renderCreateForm,
	renderSearchForm,
	renderTodoList
} from './templates.js';

import {
	search,
	sortByTitle,
	sortByStatus
} from './actions.js'

import {
	initInitialButtonsListeners,
	initFormButtonListeners
} from './listeners.js'

const itemContainer = document.querySelector('.js-itemContainer');


const onAddNewTodoClick = () => {
	const formContainer = document.querySelector('.js-formContainer');
	if (formContainer) {
		renderCreateForm(formContainer);
		initFormButtonListeners();

	}
}

const onSearchByTodoClick = () => {
	const formContainer = document.querySelector('.js-formContainer');
	if (formContainer) {
		renderSearchForm(formContainer)
		initFormButtonListeners();
	}
}

const onCreateTodoClick = (event) => {
	// debugger;
	event.preventDefault();
	const form = event.target.parentNode;
	const title = form[0].value;
	const description = form[1].value;
	const todo = createTodo(title, description, todoList.length);
	addTodo(todo);
	renderTodoList(itemContainer, todoList);
	form.reset();
}

const onSearchTodoClick = (event) => {
// debugger;	
	event.preventDefault();
	const form = event.target.parentNode;
	const input = form[0].value;
	const filteredList = search(todoList, input);
	renderTodoList(itemContainer, filteredList);
	form.reset();
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

// const initializeEventListeners = () => {
// 	const deleteButtonItems = document.querySelectorAll('.js-delete-button');
// 	if (deleteButtonItems) {
// 		deleteButtonItems.forEach(item => {
// 			item.addEventListener('click', onDeleteButtonClick)
// 		})
// 	}

// 	const doneButtonItems = document.querySelectorAll('.js-done-button');
// 	if (doneButtonItems) {
// 		doneButtonItems.forEach(item => {
// 			item.addEventListener('click', onDoneButtonClick)
// 		})
// 	}

// 	const holdButtonItems = document.querySelectorAll('.js-hold-button');
// 	if (holdButtonItems) {
// 		holdButtonItems.forEach(item => {
// 			item.addEventListener('click', onHoldButtonClick)
// 		})
// 	}

// 	const editButtonItems = document.querySelectorAll('.js-edit-button');
// 	if (editButtonItems) {
// 		editButtonItems.forEach(item => {
// 			item.addEventListener('click', onEditButtonClick)
// 		});
// 	}

// 	const cancelButtonItems = document.querySelectorAll('.js-cancel-button');
// 	if (cancelButtonItems) {
// 		cancelButtonItems.forEach(item => {
// 			item.addEventListener('click', onCalcelButtonClick)
// 		});
// 	}

// 	const saveButtonItems = document.querySelectorAll('.js-save-button');
// 	if (saveButtonItems) {
// 		saveButtonItems.forEach(item => {
// 			item.addEventListener('click', onSaveButtonClick)
// 		});
// 	}
// }

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

const onCalcelButtonClick = (event) => {
	// debugger;
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

const init = () => {
	initInitialButtonsListeners();
	// debugger
	const list = getTodos();
	if (list && itemContainer) {
		renderTodoList(itemContainer, list);
	}
}
init();


export {
	onAddNewTodoClick,
	onSearchByTodoClick,
	onCreateTodoClick,
	onSearchTodoClick
}