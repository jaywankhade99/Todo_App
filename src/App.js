import "./App.css";
import Todo from "./components/Todo";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Todo place="mumbai" />
      <ErrorBoundary>
        <Todo />
      </ErrorBoundary>
    </>
  );
}

export default App;
