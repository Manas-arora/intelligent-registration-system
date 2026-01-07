const form = document.getElementById("regForm");
const submitBtn = document.getElementById("submitBtn");

const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const strength = document.getElementById("strength");

// Country → State → City Data
const data = {
  India: {
    Telangana: ["Hyderabad", "Warangal"],
    Karnataka: ["Bangalore", "Mysore"]
  }
};

// Populate States
country.addEventListener("change", () => {
  state.innerHTML = "<option value=''>Select State</option>";
  city.innerHTML = "<option value=''>Select City</option>";

  if (country.value) {
    Object.keys(data[country.value]).forEach(s => {
      state.innerHTML += `<option>${s}</option>`;
    });
  }
});

// Populate Cities
state.addEventListener("change", () => {
  city.innerHTML = "<option value=''>Select City</option>";
  if (state.value) {
    data[country.value][state.value].forEach(c => {
      city.innerHTML += `<option>${c}</option>`;
    });
  }
});

// Password Strength
password.addEventListener("input", () => {
  if (password.value.length < 6) {
    strength.textContent = "Weak";
    strength.style.color = "red";
  } else if (password.value.match(/[A-Z]/) && password.value.match(/[0-9]/)) {
    strength.textContent = "Strong";
    strength.style.color = "green";
  } else {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  }
});

// Enable Submit Only When Valid
form.addEventListener("input", () => {
  submitBtn.disabled =
    !form.checkValidity() ||
    password.value !== confirmPassword.value ||
    !document.getElementById("terms").checked;
});

// Submit
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Registration Successful!");
  form.reset();
  submitBtn.disabled = true;
  strength.textContent = "";
});
