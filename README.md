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
9. In that way we can dodge the Firebase error of User already in Use....




## steps to create Email Verification....

1. Go to authentication from home page > templates > Email Address Verification, Notice this template..
2. Now  Go to Docs > build > authentication > web > manege users > send a user verification email... link (https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#send_a_user_a_verification_email)
3. Now When do we do this? we send a verification email when the User Registers for the first time, So we will use this verification function inside Register function....
4. Now use a genuine Email to register, Notice in console for user that emailVerified is false at this Point....
5. Now verify the email using template link in your email account, Check spam if not found,
6. now check as already Register, Login With same Email Again and Notice emailVerified = true;  

## steps to Create Reset Password function.....

1. Go to authentication from home page > templates >Password Reset , Notice this template..
2. Now  Go to Docs > build > authentication > web > manege users > send a Password Reset email... link (https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#send_a_password_reset_email)
3. create a link button, onClick handle Reset Password Function , Inside Handler Function 
use sendPasswordResetEmail with auth and email parameters as shown in link....




## Steps to ADD other fields while registration other than email and password

1. Set in put field to obtain the information, in this case we have copied the Form Group of email, then edited the title and placeholder, type changed to text from email...
2. Show this field only when to create user/Register using Conditional Rendering....
3. onBlur event added and a handler function given to set the name state on Blur...
4. Now  Go to Docs > build > authentication > web > manege users > update users Profile... link (https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#update_a_users_profile) 
5. create a function to updateProfile inside it,
6. Send auth.currentUser as first parameter and an Object as Second Parameter....
7. Inside second parameter Object Set the properties obtained using handlers.....
e.g( {displayName: name} ).... name is that state....
8. Call this updateProfile wrapping function inside Crete user function like verifyEmail one....

