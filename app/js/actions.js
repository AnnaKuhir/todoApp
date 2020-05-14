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
  const pending = [];
  const hold = [];
  const done = [];

  todoList.forEach(item => {
    if (item.status == "pending") pending.push(item);
    if(item.status == "hold") hold.push(item);
    if(item.status == "done") done.push(item);
  });

  const sortedPendingByTitle = sortByTitle(pending);
  const sortedHoldByTitle = sortByTitle(hold);
  const sortedDoneByTitle = sortByTitle(done);

  return [...sortedPendingByTitle, ...sortedHoldByTitle, ...sortedDoneByTitle];

}