# Email and Pass word Authentication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## steps to Create Email and Password Authentication

1. install firebase in react app
2. Add Project in Firebase Console.....
2. Register App
3. Copy firebase config and Paste in firebase.init.js
4. export app 
5. Go to Firebase authentication > email and password 
6. Enable Email Password and Save
7. Create auth variable in App.js e.g(const auth = getAuth(app))
8. Go to Docs > build > authentication > Password Authentication
9. Create Form and input fields to Receive email and password
10. or get a form From React Bootstrap with Imports, onBlur of email and password fields seState of email and password
11. Then onSubmit prevent default behavior o form and createUserWithEmailAndPassword() send auth, email state and password state as parameters
12. .then console result.user
13. or .catch error and console.error error



## Steps to toggle between Login and Register in the Same Form

1. at first we can show the error when existing user clicks on to register again,
2. Add a Check box to the form to confirm already registered or not
3. add an onChange event to handle register change with handler function, in function take event as parameter and check changes in Console using event.target.checked
4. Now declare a State for Registered and SetRegister, and onChange of checkbox setRegister with the return of true or false value of event.target.checked 
5. Next Use Register State to conditionally Render Form Hading Between (Please Register) and (Please Login) , and Same with the button Text..
6. Go to Docs in Firebase > build > web > password Authentication 
7. Notice we are using createUserWithEmailAndPassword, in password Authentication Notice another function to signInWithEmailAndPassword to Login
8. Use Register state with Condition to use Functions Automatically according to state
9. In that way we can dodge the Firebase error of User already in Use...

