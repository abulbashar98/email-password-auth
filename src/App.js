import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() {



  const handleEmailOnChange = (event) => {
    console.log(event.target.value)
  }

  const handlePasswordOnBlur = (event) => {
    console.log(event.target.value)
  }

  const handleFormSubmit = (event) => {
    console.log('form Submitted')
    event.preventDefault()
  }


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        {/* <input onChange={handleEmailOnChange} type="text" /> */}
        <input onBlur={handleEmailOnChange} type="text" />
        <br />
        {/* <input onChange={handlePasswordOnChange} type="password" name="" id="" /> */}
        <input onBlur={handlePasswordOnBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div >
  );
}

export default App;
