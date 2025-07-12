// src/components/UserAccount.jsx
import React, { useState } from "react";

const UserAccount = () => {
  const [user, setUser] = useState({
    name: "Ashish Ahuja",
    email: "ashish@example.com",
    phone: "9876543210",
    bio: "BCA Student learning React, Python, and Data Science.",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User details saved successfully!");
    console.log("Saved Data:", user);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Account</h2>
      <div style={styles.profile}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={styles.image}
        />
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
          style={styles.input}
        />
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Bio"
          rows="3"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Save Changes</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  image: {
    borderRadius: "50%",
    border: "2px solid #aaa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default UserAccount;
