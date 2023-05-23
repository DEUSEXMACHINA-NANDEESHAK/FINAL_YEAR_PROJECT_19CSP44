const signinForm = document.querySelector("#signin-form");
const signupForm = document.querySelector("#signup-form");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  // Your sign in logic here
  let default_email = "admin@123";
  let default_pass = "12345";

  if (email == default_email || email == localStorage.getItem(`email_up`)) {
    if (
      password == default_pass ||
      password == localStorage.getItem(`pass_up`)
    ) {
      window.href.location = "http://127.0.0.1:5500/STOCK-PEDIA/index.html";
    } else {
      console.log("error! INVALID CREDENTIALS");
      window.sleep(6000);
      window.href.location =
        "http://127.0.0.1:5500/STOCK-PEDIA/Signin/Signin.html";
    }
  } else {
    console.log("error! INVALID CREDENTIALS");
    window.sleep(6000);
    window.href.location =
      "http://127.0.0.1:5500/STOCK-PEDIA/Signin/Signin.html";
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  // Your sign up logic here
  localStorage.setItem("email_up", { email });

  localStorage.setItem("pass_up", { password });
});
