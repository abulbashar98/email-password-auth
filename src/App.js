import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [registered, setRegister] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value)
  }

  const handleNameOnBlur = (event) => {
    setName(event.target.value)
  }


  const handleRegisterChange = event => {
    // console.log(event.target.checked)
    setRegister(event.target.checked)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Please include a special character in password')
      return;
    }

    setValidated(true);
    setError('');;

    console.log('form Submitted')

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error => {
          setError(error.message)
        })
    }

    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user
          console.log(user)
          setError('')
          verifyEmail();
          updateUsersProfile();
        })

        .catch(error => {
          console.error(error)
          setError(error.message)
        })
    }
  }


  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email Sent')
      })
      .catch(error => {
        setError(error.message)
      })
  }




  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Sent')
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const updateUsersProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        console.log('profile updated')
      })
      .catch(error => {
        setError(error.message)
      })
  }


  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-primary">Please {registered ? 'Login' : 'Register'}</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {!registered && <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onBlur={handleNameOnBlur} type="text" placeholder="Your Name" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailOnBlur} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordOnBlur} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group onChange={handleRegisterChange} className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Already Registered" />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button onClick={handleResetPassword} variant="link">Forget Password?</Button>
        <Button variant="primary" type="submit">
          {registered ? 'Login' : "Register"}
        </Button>
      </Form>
    </div >
  );
}

export default App;
