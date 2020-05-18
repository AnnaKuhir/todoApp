const todoList = [];

const createTodo = (title, description, id) => {
  return {
    id,
    title: title,
    description: description,
    status: TODO_STATUS.pending,
    isDeleted: false,
    isEdited: false,
  }
}

const TODO_STATUS = {
  hold: 'hold',
  pending: 'pending',
  done: 'done'
};

const getTodos = () => {
  return todoList.filter(x => !x.isDeleted);
};

const getAllTodos = () => {
  return todoList;
}

const returnTodos = () => {
  todoList.forEach(todo => {
    todo.isDeleted = false;
  });
  return todoList;
}

const getTodoById = (id) => {
  const todo = todoList.find(x => x.id === id);
  return todo;
};

const initTodos = () => {
  const firstTodo = createTodo(
    'Утренняя зарядка',
    'Подъем в 8 утра, разминка, силовые упражнения, растяжка',
    0);
  const secondTodo = createTodo(
    'Курсовой проект',
    'Провести расчеты, построить часовые характеристики импульсной системы автоматического управления',
    1);
    secondTodo.status = TODO_STATUS.hold;
  const thirdTodo = createTodo(
    'Ужин',
    'Приготовить праздничный ужин для гостей',
    2);
    thirdTodo.status = TODO_STATUS.done;
  todoList.push(firstTodo, secondTodo, thirdTodo);
};

const addTodo = (todo) => {
  if (!todo || !todo.title || !todo.description || !todo.id) {
    return false;
  }
  todoList.push(todo)
  return true;
};

const deteleTodo = (id) => {
  const index = todoList.findIndex(x => x.id === id);
  if (index !== -1) {
    todoList[index].isDeleted = true;
    return true;
  }
  return false;
};

const editTodo = (editedTodo) => {
  const index = todoList.findIndex(x => x.id === editedTodo.id);
  if (index !== -1) {
    todoList[index] = editedTodo;
    return true;
  }
  return false;
};

const setStatus = (id, status) => {
  const todo = todoList.find(x => x.id === id);
  if (todo) {
    todo.status = status;
  }
};

const setStatusToAll = (status, options) => {
  if (status) {
    todoList.forEach(todo => {
      if (!options || !options.ignoreStatus.includes(todo.status)) {
        todo.status = status
      }
    });
  }
};

const deteleAll = () => {
  const elements = todoList.length;
  if (elements > 0) {
    todoList.forEach(todo => {
      todo.isDeleted = true
    });
  }
}

const clearContainer = (container) => {
	if (container) {
		container.innerHTML = '';
	}
}


export {
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
}
