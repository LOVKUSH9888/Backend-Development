import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add code to send the login data to the server
    // For now, we'll just log a message
    console.log('Entered Username:', name);
    console.log('Entered Password:', password);
    console.log("Login successful");
  };

  return (
    <div style={{color: "red", textAlign : "center"}}>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default LoginForm;
