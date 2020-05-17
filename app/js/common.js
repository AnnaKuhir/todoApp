import {
	initTodos,
	createTodo,
	TODO_STATUS,
	getTodos,
	getAllTodos,
	getTodoById,
	addTodo,
	deteleTodo,
	editTodo,
	setStatus,
	setStatusToAll,
	deteleAll,
	returnTodos
} from './entity.js';


import {
	renderCreateForm,
	renderSearchForm,
	renderTodoList,
	renderDropboxContent,
	clearContainer
} from './templates.js';

import {
	search,
	sortByTitle,
	sortByStatus
} from './actions.js'

import {
	initInitialButtonsListeners,
	initFormButtonListeners,
	initDropboxListeners,
	initControlTodoListeners,
	initReturnAllControl
} from './listeners.js'

const formContainer = document.querySelector('.js-formContainer');
const itemContainer = document.querySelector('.js-itemContainer');
const dropboxContainer = document.querySelector('.dropbox-container');


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
	event.preventDefault();
	const form = event.target.parentNode;
	const title = form[0].value;
	const description = form[1].value;
	const todo = createTodo(title, description, getAllTodos().length);
	addTodo(todo);
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
	form.reset();
}

const onSearchTodoClick = (event) => {
	// debugger;
	event.preventDefault();
	const form = event.target.parentNode;
	const input = form[0].value;
	const filteredList = search(getTodos(), input);
	renderTodoList(itemContainer, filteredList);
	initControlTodoListeners();
	initReturnAllAfterSearchControl();
	if (filteredList.length === 0) {
		clearContainer(dropboxContainer);
	}
	form.reset();
}

const onSortByTitleClick = () => {
	const sortedList = sortByTitle(getTodos());
	renderTodoList(itemContainer, sortedList)
	initControlTodoListeners();
}

const onSortByStatusClick = () => {
	const sortedList = sortByStatus(getTodos());
	renderTodoList(itemContainer, sortedList);
	initControlTodoListeners();
}

const onRemoveAllClick = () => {
	deteleAll();
	renderTodoList(itemContainer, getTodos());
	clearContainer(dropboxContainer);
}

const onHoldToAllStatusClick = (event) => {
	const button = event.target;
	if (button.classList.contains('hold-btn')) {
		setStatusToAll(TODO_STATUS.hold, {
			ignoreStatus: [TODO_STATUS.done]
		});
		switchElement(button, 'Unhold', 'hold-btn', 'unhold-btn');
	} else {
		setStatusToAll(TODO_STATUS.pending, {
			ignoreStatus: [TODO_STATUS.done]
		});
		switchElement(button, 'Hold', 'unhold-btn', 'hold-btn');
	}
	renderTodoList(itemContainer, getAllTodos());
	initControlTodoListeners();
}

const switchElement = (element, innerText, oldClass, newClass) => {
	if (element) {
		element.innerText = innerText;
		element.classList.remove(oldClass);
		element.classList.add(newClass)
	}
}

const onDoneToAllStatusClick = () => {
	setStatusToAll(TODO_STATUS.done)
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
}

const onDeleteButtonClick = (event) => {
	const id = +event.target.parentNode.id;
	deteleTodo(id);
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
	if (getTodos().length === 0) {
		clearContainer(dropboxContainer);
	}
}

const onDoneTodoClick = (event) => {
	const id = +event.target.parentNode.id;
	setStatus(id, TODO_STATUS.done);
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
}

const onHoldTodoClick = (event) => {
	const button = event.target;
	const id = +button.parentNode.id;
	const todo = getTodoById(id);
	if(todo.status == TODO_STATUS.hold) {
		setStatus(id, TODO_STATUS.pending);
	} else {
		setStatus(id, TODO_STATUS.hold);
	}
	debugger
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
}

const onReturnAllTodosClick = () => {
	const list = returnTodos();
	renderTodoList(itemContainer, list);
	initControlTodoListeners();
	renderDropboxContent(dropboxContainer);
	initDropboxListeners();
}

const onCloseFormClick = () =>{
	clearContainer(formContainer)
}

const onEditTodoClick = (event) => {
	debugger;
	const id = +event.target.parentNode.id;
	const todo = getTodoById(id);
	todo.isEdited = true;
	renderTodoList(itemContainer, getTodos());
	initControlTodoListeners();
}



const init = () => {
	initInitialButtonsListeners();
	initReturnAllControl();
	initTodos();
	const todoList = getTodos();
	if (todoList && itemContainer) {
		renderTodoList(itemContainer, todoList);
		initControlTodoListeners();
	}
	if (todoList && todoList.length > 0) {
		renderDropboxContent(dropboxContainer)
		initDropboxListeners();
	}
}
init();


export {
	onAddNewTodoClick,
	onSearchByTodoClick,
	onCreateTodoClick,
	onSearchTodoClick,
	onSortByTitleClick,
	onSortByStatusClick,
	onRemoveAllClick,
	onHoldToAllStatusClick,
	onDoneToAllStatusClick,
	onDeleteButtonClick,
	onDoneTodoClick,
	onHoldTodoClick,
	onReturnAllTodosClick,
	onCloseFormClick,
	onEditTodoClick

}