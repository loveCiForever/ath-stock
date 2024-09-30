
// import './App.css';
import Form from "./components/Form.js"

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-yellow-400">
        <Form/> 
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-blue-300">
          <div className="text-5xl">test</div>
      </div>
    </div>
  );
}

export default App;
