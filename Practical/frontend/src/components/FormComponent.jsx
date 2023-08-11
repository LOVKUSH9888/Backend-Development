import React, { useState } from 'react';
import './FormComponent.css'

function FormComponent({ onSubmit }) {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e, form)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleForm}
          value={form.username || ''}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleForm}
          value={form.password || ''}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
