
import { useState } from "react";
import { Card } from "@/components/ui/card";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <Card className="p-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <AddTodoForm onAddTodo={addTodo} />
      
      {totalCount > 0 && (
        <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">
            {completedCount} of {totalCount} tasks completed
          </span>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className={`w-2 h-2 rounded-full ${totalCount === completedCount ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tasks yet</h3>
            <p className="text-gray-500">Add your first task above to get started!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      {completedCount === totalCount && totalCount > 0 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <div className="text-2xl mb-2">🎉</div>
          <p className="text-green-800 font-semibold">All tasks completed!</p>
          <p className="text-green-600 text-sm">Great job staying productive!</p>
        </div>
      )}
    </Card>
  );
};

export default TodoList;
