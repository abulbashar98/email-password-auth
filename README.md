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

## 
