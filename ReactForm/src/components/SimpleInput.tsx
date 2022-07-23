import React from "react";

const SimpleInput = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  // const [isFormValid, setIsFormValid] = React.useState(false);

  let isFormValid = false;

  if (name.trim() !== "" && email.trim() !== "" && email.includes("@")) {
    isFormValid = true;
  }
  const handleNameChange = event => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsValid(true);
    }
  };
  const handleEmailBlur = () => {
    if (email.trim() === "" || !email.includes("@")) {
      setIsEmailValid(false);
    }
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
    if (event.target.value.trim() !== "" && event.target.value.includes("@")) {
      setIsEmailValid(true);
    }
  };
  const handleNameBlur = () => {
    if (name.trim() === "") {
      setIsValid(false);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === "") {
      setIsValid(false);
      return;
    }

    console.log(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={name}
          onBlur={handleNameBlur}
        />
        {!isValid && <p className="error-text">Please Enter valid Name</p>}
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={handleEmailChange}
          value={email}
          onBlur={handleEmailBlur}
        />
        {!isEmailValid && (
          <p className="error-text">Please Enter valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
