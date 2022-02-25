import "./App.css";
import Demo from "./components/Demo";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Demo place="Gandhinagar" />
      <ErrorBoundary>
        <Demo />
      </ErrorBoundary>
    </>
  );
}

export default App;
