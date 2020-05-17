
import {
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
} from './common.js'

import {
  toggleDropbox
} from './dropbox.js'

// import { todoList } from './entity.js';
 
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
  const closeFormButton = document.querySelector('.close-form-btn')

  if(addTodoButton){
    addTodoButton.addEventListener('click', onCreateTodoClick)
  }

  if(searchTodoButton){
    searchTodoButton.addEventListener('click', onSearchTodoClick)
  }

  if(closeFormButton){
    closeFormButton.addEventListener('click', onCloseFormClick)
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
    bulkActionsButton.addEventListener('mouseover', toggleDropbox)
  }
  if(sortButton){
    sortButton.addEventListener('mouseover', toggleDropbox)
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

const initControlTodoListeners = () => {
  const deleteTodoButtons = document.querySelectorAll('.js-delete-button');
  const doneTodoButtons = document.querySelectorAll('.js-done-button');
  const holdTodoButtons = document.querySelectorAll('.js-hold-button');
  const editTodoButtons = document.querySelectorAll('.js-edit-button');
  const cancelTodoButtons = document.querySelectorAll('.js-cancel-button');
  const saveTodoButtons = document.querySelectorAll('.js-save-button');



  if(deleteTodoButtons){
    deleteTodoButtons.forEach(deleteTodoButton => {
      deleteTodoButton.addEventListener('click', onDeleteButtonClick)
    })
  }
  if(doneTodoButtons){
    doneTodoButtons.forEach(doneTodoButton => {
      doneTodoButton.addEventListener('click', onDoneTodoClick)
    })
  }
  if(holdTodoButtons){
    holdTodoButtons.forEach(holdTodoButton => {
      holdTodoButton.addEventListener('click', onHoldTodoClick)
    })
  }
  if(editTodoButtons){
    editTodoButtons.forEach(editTodoButtons => {
      editTodoButtons.addEventListener('click', onEditTodoClick)
    })
  }
  if(cancelTodoButtons){
    cancelTodoButtons.forEach(cancelTodoButtons => {
      cancelTodoButtons.addEventListener('click', onCancelButtonClick)
    })
  }
  if(saveTodoButtons){
    saveTodoButtons.forEach(saveTodoButtons => {
      saveTodoButtons.addEventListener('click', onSaveButtonClick)
    })
  }
}

const initReturnAllControl = () => {
  const returnAll = document.querySelector('.btn-return-all');
  if(returnAll){
    returnAll.addEventListener('click', onReturnAllTodosClick )
  }
}





export{
  initInitialButtonsListeners,
  initFormButtonListeners,
  initDropboxListeners,
  initControlTodoListeners,
  initReturnAllControl,
  
} 