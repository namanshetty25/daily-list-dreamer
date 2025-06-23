
import TodoList from "@/components/TodoList";
import ApiForm from "@/components/ApiForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Daily Tasks & API Interface</h1>
            <p className="text-lg text-gray-600">Stay organized and interact with backend services</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todo List</h2>
              <TodoList />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Interface</h2>
              <ApiForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
