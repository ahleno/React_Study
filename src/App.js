import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'


function formatName(user) {
  return user.firstName + user.lastName
}

function App() {
  const name = {
    firstName: "Haneol",
    lastName: "Kim"
  }

  const isMember = true;

  return(
    <Fragment>
      <h1>Hello, {formatName(name)}</h1>
      <h1>Hello, {formatName(name)}</h1>
    </Fragment>
  )
}

export default App;
