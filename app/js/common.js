const addNewItem = document.getElementById('js-addNew-button');
const searchItem = document.getElementById('js-search-button');
const formContainer = document.getElementById('formContainer');

const renderFormCreated = () => {
	const teamplate = `
	<form action="#" class="js-addListItem">
				<input type="text" class="js-addListItem_title addListItem_element " placeholder="Enter title">
				<input type="text" class="js-addListItem_description addListItem_element" placeholder="Enter description">
				<button type="submit" class="js-addListItem_button addListItem_element">Add</button>
			</form> 
	`
	formContainer.innerHTML = teamplate;
};

const renderSearchForm = () => {
	const teamplate = `
	<form action="#" class="js-searchItem">
	<input type="text" class="js-searchItem_searchByTitle searchItem_element" placeholder="Search by title">
	<button type="submit" class="js-searchItem_button searchItem_element">Search</button>
</form>
	`
	formContainer.innerHTML = teamplate;
}

const onAddNewItemClick = () => {
	renderFormCreated()
}

const onSearchByItemClick = () => {
	renderSearchForm()
}

addNewItem.addEventListener('click', onAddNewItemClick);
searchItem.addEventListener('click', onSearchByItemClick);

