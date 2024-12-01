import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register", {
        email,
        password,
      });
      alert(response.data.message);
      setIsRegistered(true);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post("http://localhost:4000/verify", {
        email,
        verify_code_by_client: verifyCode,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error during verification:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      {isRegistered && (
        <>
          <h2>Verify your email</h2>
          <input
            type="text"
            placeholder="Enter verification code"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
          <button onClick={handleVerify}>Verify</button>
        </>
      )}
    </div>
  );
}

export default Register;
