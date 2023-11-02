// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new user account with Firebase Authentication
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // User registration successful
      const user = userCredential.user;
      console.log("User registered:", user);

      // Redirect to the sign-in page upon successful registration
      window.location.href = "signin.html";
    })
    .catch(function (error) {
      // Handle registration errors (e.g., display an error message)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});
