const renderCreateForm = (container) => {

	const template = `
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
		<button type="button" class="btn hold-btn">Hold</button>
		<button type="button" class="btn done-btn">Mark as done</button>
		<button type="button" class="btn remove-btn">Remove all</button>
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
		<button type="button" class="btn sort-by-status-btn">By status</button>
		<button type="button" class="btn sort-by-title-btn">By title</button>
	</div>
</div>
	`
	return template;
}

const renderDropboxContent = (container, options) => {
	if(options && options.clearContainer) {
		container.innerHTML = ''
		return;
	}
	container.innerHTML = `
	${renderDropboxStatusContainer()} 
	${renderDropboxSortContainer()} 
	`
}

const renderTodoItem = (todo) => {
	const template = `
	<div class="js-item" id="${todo.id}">
	<h1 class="js-item-title titleOfTheItem">${todo.title}</h1>
	<p class="js-item-description descriptionOfTheItem">${todo.description}</p>
	<div class="button-container">
		<button class="js-edit-button  item-functional-button">Edit</button>
		<button class="js-delete-button item-functional-button">Delete</button>
		<button class="js-hold-button item-functional-button">Hold</button>
		<button class="js-done-button item-functional-button">Done</button>
	</div>
	<span class="status-element">${todo.status}</span>
</div>
	`
	return template;
}

const renderTodoList = (container, list) => {
	container.innerHTML = '';
	container.innerHTML= `
	${list.map((item) => {
		return renderTodoItem(item);
	}).join('')}
	`
}

const clearContainer = (container) => {
	if(container) {
		container.innerHTML = '';
	}
}

export {
	renderCreateForm,
	renderSearchForm,
	renderTodoList,
	renderDropboxContent,
	clearContainer
}