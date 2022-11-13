import SignUp from './SignUp'
import Results from './Results';
import { useState } from "react";

export var results_obj = undefined

function App() {
  const [myBool, setmyBool] = useState(true);
  function toggleBool(results_o) {
    results_obj = results_o
    setmyBool(!myBool)
  }
  return (
    myBool ? SignUp(toggleBool) : Results(toggleBool)
  );
}

export default App;
