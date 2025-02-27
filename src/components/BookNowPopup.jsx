import React, { useState } from 'react';

const BookNowPopup = ({ onClose, onSubmit }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, contact, message });
};

return (
    <div className="popup-overlay">
<div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
<div>
            <label>Name:</label>
            <input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
            />
</div>
<div>
            <label>Email:</label>
            <input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
            />
</div>
<div>
            <label>Contact:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookNowPopup;