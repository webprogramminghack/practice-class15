type Todo = {
  title: string;
  completed: boolean;
};

type FinalTodo = Readonly<Todo>;

const todo: FinalTodo = {
  title: 'Learn typescript',
  completed: false,
};

// error
todo.title = 'Learn typescript';

const todo2 = {
  title: 'Learn typescript',
  completed: false,
} as const;

// Object.freeze(todo2);
