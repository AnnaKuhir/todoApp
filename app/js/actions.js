import {TODO_STATUS} from './entity.js'

const search = (todoList, input) => {
  const result = todoList.filter(item => item.title.toLowerCase().includes(input));
  return result;
};

const sortByTitle = (todoList) => {
  if (todoList || todoList.length > 0){
   return todoList.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    })
  }
};

const sortByStatus = (todoList) => {
  const pendingList = [];
  const holdList = [];
  const doneList = [];

  todoList.forEach(item => {
    if (item.status == TODO_STATUS.pending) pendingList.push(item);
    if(item.status == TODO_STATUS.hold) holdList.push(item);
    if(item.status == TODO_STATUS.done) doneList.push(item);
  });

  const sortedPendingByTitle = sortByTitle(pendingList);
  const sortedHoldByTitle = sortByTitle(holdList);
  const sortedDoneByTitle = sortByTitle(doneList);

  return [...sortedPendingByTitle, ...sortedHoldByTitle, ...sortedDoneByTitle];

}

export {
  search,
  sortByTitle,
  sortByStatus
}