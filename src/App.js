import "./App.css";
import Demo from "./components/Demo";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
    <h1>hello</h1>
      <Demo place="Delhi" />
      <ErrorBoundary>
        <Demo />
      </ErrorBoundary>
    </>
  );
}

export default App;
