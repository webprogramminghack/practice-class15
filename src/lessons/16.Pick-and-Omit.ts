type Todo = {
  id: string;
  name: string;
  completed: boolean;
  status: 'Complete' | 'Incomplete';
  priority: string;
};

type NewTodo = {
  name: string;
  completed: boolean;
  status: 'Complete' | 'Incomplete';
};

type Todo2 = Omit<Todo, 'id'>;
type NewTodo3 = Pick<Todo, 'name' | 'completed' | 'status'>;

function saveTodo(todo: Todo2): Todo {
  // save to database
  return { ...todo, id: crypto.randomUUID() };
}
