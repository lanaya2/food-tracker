// Function to handle user registration
function registerUser() {
  // Get form data
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform client-side validation (you should add more checks)
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate user registration (you'll replace this with your actual registration process)
  const user = {
    username,
    email,
  };

  // Store user data (e.g., in local storage or send it to your server)
  localStorage.setItem("registeredUser", JSON.stringify(user));

  // Redirect to a new page or display a success message
  alert("Registration successful!");
}

// Event listener for the registration form
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  registerUser();
});

// Function to handle meal planning
function addMeal() {
  const foodItem = document.getElementById("food-item").value;
  const calories = parseInt(document.getElementById("calories").value);

  if (!foodItem || isNaN(calories)) {
    alert("Please enter a valid food item and calories.");
    return;
  }

  const mealPlan = document.getElementById("meal-plan");
  const totalCalories = document.getElementById("total-calories");

  const mealItem = document.createElement("div");
  mealItem.textContent = `${foodItem} - ${calories} calories`;
  mealPlan.appendChild(mealItem);

  const currentTotal = parseInt(totalCalories.textContent);
  totalCalories.textContent = currentTotal + calories;

  // Clear the input fields
  document.getElementById("food-item").value = "";
  document.getElementById("calories").value = "";
}

// Event listener for adding a meal to the planner
const addMealButton = document.getElementById("add-meal");
addMealButton.addEventListener("click", function () {
  addMeal();
});
