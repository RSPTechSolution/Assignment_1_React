import FunctionalCounter from "./Components/FunctionalCounter";
import ClassCounter from "./Components/ClassCounter";
function App() {

  return (
    <>
    <main>
      <div className="main-heading"><h1>Assignment 1 | Counter Application</h1></div>
        <div className="main-container">
          <div className="app-container">
            < FunctionalCounter />
            < ClassCounter />
          </div>
        </div>
    </main>
    </>
  )
}

export default App
