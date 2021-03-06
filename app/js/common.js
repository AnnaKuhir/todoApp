import {
  initTodos,
  createTodo,
  TODO_STATUS,
  getTodos,
  getAllTodos,
  getTodoById,
  returnTodos,
  addTodo,
  deteleTodo,
  editTodo,
  setStatus,
  setStatusToAll,
  deteleAll,
  clearContainer
} from './entity.js';

import {
	renderCreateForm,
	renderSearchForm,
	renderTodoList,
	renderDropboxContent,
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
	renderWithTimeout(itemContainer, getTodos())
	form.reset();
}

const onSearchTodoClick = (event) => {
	event.preventDefault();
	const form = event.target.parentNode;
	const input = form[0].value;
	const filteredList = search(getTodos(), input);
	renderWithTimeout(itemContainer, filteredList);
	if (filteredList.length === 0) {
		clearContainer(dropboxContainer);
	}
	form.reset();
}

const onSortByTitleClick = () => {
	const sortedList = sortByTitle(getTodos());
	renderWithTimeout(itemContainer, sortedList);
}

const onSortByStatusClick = () => {
	const sortedList = sortByStatus(getTodos());
	renderWithTimeout(itemContainer, sortedList);
}

const onRemoveAllClick = () => {
	deteleAll();
	renderWithTimeout(itemContainer, getTodos());
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
	renderWithTimeout(itemContainer, getTodos());
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
	renderWithTimeout(itemContainer, getTodos());

}

const onDeleteButtonClick = (event) => {
	const id = +event.target.parentNode.id;
	deteleTodo(id);
	renderWithTimeout(itemContainer, getTodos());
	if (getTodos().length === 0) {
		clearContainer(dropboxContainer);
	}
}

const onDoneTodoClick = (event) => {
	const id = +event.target.parentNode.id;
	setStatus(id, TODO_STATUS.done);
	renderWithTimeout(itemContainer, getTodos());

}

const onHoldTodoClick = (event) => {
	const button = event.target;
	const id = +button.parentNode.id;
	const todo = getTodoById(id);
	if (todo.status == TODO_STATUS.hold) {
		setStatus(id, TODO_STATUS.pending);
	} else {
		setStatus(id, TODO_STATUS.hold);
	}
	renderWithTimeout(itemContainer, getTodos());
}

const onReturnAllTodosClick = () => {
	const list = returnTodos();
	renderWithTimeout(itemContainer, list);
	renderDropboxContent(dropboxContainer);
	initDropboxListeners();
}

const onCloseFormClick = () => {
	clearContainer(formContainer)
}

const onEditTodoClick = (event) => {
	const id = +event.target.parentNode.id;
	const todo = getTodoById(id);
	todo.isEdited = true;
	renderWithTimeout(itemContainer, getTodos());
}

const onCancelButtonClick = (event) => {
	const id = +event.target.parentNode.id;
	const todo = getTodoById(id);
	todo.isEdited = false;
	renderWithTimeout(itemContainer, getTodos());

}

const onSaveButtonClick = (event) => {
	const id = +event.target.parentNode.id;
	const title = event.target.parentNode.parentNode.childNodes[0].value;
	const description = event.target.parentNode.parentNode.childNodes[1].value;
	const editedTodo = createTodo(title, description, id)
	editTodo(editedTodo);
	renderWithTimeout(itemContainer, getTodos());

}

const renderWithTimeout = (container, list) => {
	container.innerHTML = '<div class="lds-ripple"><div></div><div></div></div>'
	setTimeout(() => {
		renderTodoList(itemContainer, list);
		initControlTodoListeners();
	}, 500);
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
	onEditTodoClick,
	onCancelButtonClick,
	onSaveButtonClick
}