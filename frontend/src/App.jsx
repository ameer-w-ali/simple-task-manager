import Manager from "./components/Manager";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Simple Task Manager
        </h1>
        <Manager />

      </div>
    </>
  );
}

export default App;
