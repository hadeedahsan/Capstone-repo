import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = password.length >= 6;
  const isNameValid = mode === "signin" || name.trim().length > 0;
  const doPasswordsMatch = mode === "signin" || password === confirmPassword;

  const isFormValid = isEmailValid && isPasswordValid && isNameValid && doPasswordsMatch;

  const switchMode = (newMode) => {
    setMode(newMode);
    setSubmitted(false);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
  };

  return (
    <>
    <Helmet>
      <title>Sign In | The Grill</title>
      </Helmet>
    <section className="login-page" aria-labelledby="login-heading">
      <div className="login-card">
        <div className="login-tabs" role="tablist" aria-label="Login or sign up">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "signin"}
            className={`login-tab ${mode === "signin" ? "active" : ""}`}
            onClick={() => switchMode("signin")}
          >
            Sign In
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "signup"}
            className={`login-tab ${mode === "signup" ? "active" : ""}`}
            onClick={() => switchMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <h1 id="login-heading">{mode === "signin" ? "Welcome Back" : "Create Your Account"}</h1>

        {submitted && (
          <div className="login-success" role="alert">
            {mode === "signin"
              ? "Signed in successfully. This is a demo — no real authentication is performed."
              : "Account created successfully. This is a demo — no real account was saved."}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            aria-invalid={email !== "" && !isEmailValid}
            aria-describedby={email !== "" && !isEmailValid ? "email-error" : undefined}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email !== "" && !isEmailValid && (
            <span className="field-error" id="email-error">Enter a valid email address.</span>
          )}

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              aria-invalid={password !== "" && !isPasswordValid}
              aria-describedby={password !== "" && !isPasswordValid ? "password-error" : undefined}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {password !== "" && !isPasswordValid && (
            <span className="field-error" id="password-error">Password must be at least 6 characters.</span>
          )}

          {mode === "signup" && (
            <>
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                required
                value={confirmPassword}
                aria-invalid={confirmPassword !== "" && !doPasswordsMatch}
                aria-describedby={confirmPassword !== "" && !doPasswordsMatch ? "confirm-error" : undefined}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPassword !== "" && !doPasswordsMatch && (
                <span className="field-error" id="confirm-error">Passwords do not match.</span>
              )}
            </>
          )}

          <button type="submit" className="login-submit" disabled={!isFormValid}>
            {mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="login-switch">
          {mode === "signin" ? (
            <>Don't have an account? <button type="button" onClick={() => switchMode("signup")}>Sign up</button></>
          ) : (
            <>Already have an account? <button type="button" onClick={() => switchMode("signin")}>Sign in</button></>
          )}
        </p>
      </div>
    </section>
    </>
  );
}

export default LoginPage;