import React from "react";

const SimpleInput = () => {
  const [name, setName] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const handleNameChange = event => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsValid(true);
    }
  };
  const handleNameBlur = event => {
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
        {!isValid && <p className="error-text">Please Enter this value</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
