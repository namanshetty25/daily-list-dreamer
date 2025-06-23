
import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily Tasks</h1>
            <p className="text-lg text-gray-600">Stay organized and productive</p>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Index;
