
import {
  onAddNewTodoClick,
  onSearchByTodoClick,
  onCreateTodoClick,
  onSearchTodoClick,
  onSortByTitleClick,
  onSortByStatusClick,
  onRemoveAllClick,
  onHoldToAllStatusClick,
  onDoneToAllStatusClick
} from './common.js'

import {
  toggleDropbox
} from './dropbox.js'
 
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

const initDropboxListeners = () => {
  const bulkActionsButton = document.querySelector('.bulk-action-btn');
  const sortButton = document.querySelector('.sort-btn');
  const sortByTitleButton = document.querySelector('.sort-by-title-btn');
  const sortByStatusButton = document.querySelector('.sort-by-status-btn');
  const removeAllButton = document.querySelector('.remove-btn');
  const holdStatusToAllButton = document.querySelector('.hold-btn')
  const doneStatusToAll = document.querySelector('.done-btn')

  if(bulkActionsButton){
    bulkActionsButton.addEventListener('click', toggleDropbox)
  }
  if(sortButton){
    sortButton.addEventListener('click', toggleDropbox)
  }
  if(sortByTitleButton){
    sortByTitleButton.addEventListener('click', onSortByTitleClick)
  }
  if(sortByStatusButton){
    sortByStatusButton.addEventListener('click', onSortByStatusClick)
  }
  if(removeAllButton){
    removeAllButton.addEventListener('click', onRemoveAllClick)
  }
  if(holdStatusToAllButton){
    holdStatusToAllButton.addEventListener('click', onHoldToAllStatusClick)
  }
  if(doneStatusToAll){
    doneStatusToAll.addEventListener('click', onDoneToAllStatusClick)
  }

}

export{
  initInitialButtonsListeners,
  initFormButtonListeners,
  initDropboxListeners,
  
} 