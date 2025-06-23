
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 h-12 text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      />
      <Button
        type="submit"
        className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
        disabled={!inputValue.trim()}
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Task
      </Button>
    </form>
  );
};

export default AddTodoForm;
