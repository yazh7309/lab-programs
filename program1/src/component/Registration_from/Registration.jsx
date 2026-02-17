import { useState } from 'react';
import './Registration.css';

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleForm(e) {
    e.preventDefault();

    if (!name.trim()) {
      console.log("fill the name");
      return;
    }
    if (!email.trim()) {
      console.log("fill the email");
      return;
    }
    if (!password.trim()) {
      console.log("fill the password");
      return;
    }

    setSubmittedData({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>REGISTRATION FORM</h1>

      <form onSubmit={handleForm}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="text-left border border-green-600 rounded-xl my-4 p-4">
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
