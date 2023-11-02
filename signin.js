// Firebase initialization (similar to what was shown earlier)
// ...

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Use Firebase Authentication to sign in
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        // Redirect to the main website page upon successful sign-in
        window.location.href = "index.html";
      })
      .catch(function (error) {
        // Handle sign-in errors (e.g., display an error message)
        console.error(error.message);
      });
  });
