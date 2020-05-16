
import {
  onAddNewTodoClick,
  onSearchByTodoClick,
  onCreateTodoClick,
  onSearchTodoClick
} from './common.js'

const initInitialButtonsListeners = () =>{
  const addButton = document.querySelector('.js-addNew-button');
  const searchButton = document.querySelector('.js-search-button');

  if(addButton){
    addButton.addEventListener('click', onAddNewTodoClick)
  }
  if(searchButton){
    searchButton.addEventListener('click', onSearchByTodoClick)
  }
}

const initFormButtonListeners = () => {
  const addTodoButton = document.querySelector('.js-addListItem_button');
  const searchTodoButton = document.querySelector('.js-searchItem_button');

  if(addTodoButton){
    addTodoButton.addEventListener('click', onCreateTodoClick)
  }

  if(searchTodoButton){
    searchTodoButton.addEventListener('click', onSearchTodoClick)
  }
}

export{
  initInitialButtonsListeners,
  initFormButtonListeners
} 