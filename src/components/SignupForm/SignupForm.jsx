import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../shared/hero/style.css";  // You can add this for additional custom styles
import { images } from "../../assets/imgs/index";

export default function SignupForm() {
  const navigate = useNavigate();
  const [signUpValues, setSignUpValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    Password: "",
  });

  const [signUpErrors, setSignUpErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isSignUp) {
      setSignUpValues({
        ...signUpValues,
        [name]: type === "checkbox" ? checked : value,
      });
    } else {
      setLoginValues({
        ...loginValues,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = isSignUp ? validate(signUpValues) : validate(loginValues);

    // Set errors for sign-up or login
    if (isSignUp) {
      setSignUpErrors(errors);
    } else {
      setLoginErrors(errors);
    }

    // Only set isSubmit to true if there are no errors
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true); // Proceed to submit if there are no errors
    }
  };
  useEffect(() => {
    if (isSubmit) {
      const errors = isSignUp ? signUpErrors : loginErrors;
      if (Object.keys(errors).length === 0) {
        console.log("Form submitted successfully", isSignUp ? signUpValues : loginValues);
        navigate("/home"); // Go back to the previous page after successful submission
      }
    }
  }, [signUpErrors, loginErrors, isSubmit, signUpValues, loginValues, isSignUp, navigate]);


  const validate = (values) => {
    const errors = {};

    // Validate names only if it's the signup form
    if (isSignUp) {
      // First Name Validation
      if (!values.firstName.trim()) {
        errors.firstName = "First name is required";
      } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) { // Allow letters and spaces
        errors.firstName = "First name must only contain letters and spaces";
      }

      // Last Name Validation
      if (!values.lastName.trim()) {
        errors.lastName = "Last name is required";
      } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) { // Allow letters and spaces
        errors.lastName = "Last name must only contain letters and spaces";
      }
    }

    // Email Validation (for both sign-up and login)
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Password Validation (for both sign-up and login)
    if (!values.Password.trim()) {
      errors.Password = "Password is required";
    } else if (values.Password.length < 6) {
      errors.Password = "Password must be at least 6 characters long";
    }

    return errors;
  };


  const toggleTab = (tab) => {
    setIsSignUp(tab === "SignUp");
    setSignUpErrors({});
    setLoginErrors({});
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
      <div className="form-container">
        {/* Form Header */}
        <div className="form-header">
          <h2>{isSignUp ? "Create Your Account" : "Log In to Your Account"} <span>👋</span></h2>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <div
              className={`tab-link ${isSignUp ? "active" : ""}`}
              onClick={() => toggleTab("SignUp")}
          >
            Sign Up
          </div>
          <div
              className={`tab-link ${!isSignUp ? "active" : ""}`}
              onClick={() => toggleTab("LogIn")}
          >
            Log In
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit}>
          {isSignUp ? (
              <>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                      type="text"
                      name="firstName"
                      value={signUpValues.firstName}
                      onChange={handleChange}
                      className={signUpErrors.firstName ? "input-error" : ""}
                      placeholder="Enter your first name"
                  />
                  {signUpErrors.firstName && <p className="error-msg">{signUpErrors.firstName}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                      type="text"
                      name="lastName"
                      value={signUpValues.lastName}
                      onChange={handleChange}
                      className={signUpErrors.lastName ? "input-error" : ""}
                      placeholder="Enter your last name"
                  />
                  {signUpErrors.lastName && <p className="error-msg">{signUpErrors.lastName}</p>}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="text"
                      name="email"
                      value={signUpValues.email}
                      onChange={handleChange}
                      className={signUpErrors.email ? "input-error" : ""}
                      placeholder="Email"
                  />
                  {signUpErrors.email && <p className="error-msg">{signUpErrors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-container" style={{ position: "relative" }}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="Password"
                        value={signUpValues.Password}
                        onChange={handleChange}
                        className={signUpErrors.Password ? "input-error" : ""}
                        placeholder="Password"
                        style={{ paddingRight: "30px" }}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="togglePassword"
                        onClick={togglePasswordVisibility}
                    >
                      <i
                          id="password-icon"
                          className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                      ></i>
                    </button>
                  </div>
                  {signUpErrors.Password && <p className="error-msg">{signUpErrors.Password}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </>

          )
              ///////Login Form
              : (
              <>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                      type="text"
                      name="email"
                      value={loginValues.email}
                      onChange={handleChange}
                      className={loginErrors.email ? "input-error" : ""}
                      placeholder="Enter your email"
                  />
                  {loginErrors.email && <p className="error-msg">{loginErrors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-container" style={{ position: "relative" }}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="Password"
                        value={loginValues.Password}
                        onChange={handleChange}
                        className={loginErrors.Password ? "input-error" : ""}
                        placeholder="Password"
                        style={{ paddingRight: "30px" }}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="togglePassword"
                        onClick={togglePasswordVisibility}
                    >
                      <i
                          id="password-icon"
                          className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                      ></i>
                    </button>
                  </div>
                  {loginErrors.Password && <p className="error-msg">{loginErrors.Password}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Log In</button>
              </>
          )}

          <div className="text-center my-3">OR</div>
          <div className="d-flex w-full justify-content-center gap-2">
            <button className="btn btn-light btn-social">
              <img src={images.google} alt="Google" /> Google
            </button>
            <button className="btn btn-light btn-social">
              <img src={images.apple} alt="Apple" /> Apple
            </button>
            <button className="btn btn-light btn-social">
              <img src={images.facebook} alt="Facebook" />
              Facebook
            </button>
          </div>
          <div className="form-footer">
            {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <span
                      className="text-primary"
                      role="button"
                      onClick={() => toggleTab("LogIn")}
                  >
                Log In here
              </span>
                </>
            ) : (
                <>
                  Don't have an account?{" "}
                  <span
                      className="text-primary"
                      role="button"
                      onClick={() => toggleTab("SignUp")}
                  >
                Sign Up here
              </span>
                </>
            )}
          </div>
        </form>
      </div>
  );
}
