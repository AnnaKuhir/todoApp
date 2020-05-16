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

export {
	renderCreateForm,
	renderSearchForm,
	renderTodoList
}