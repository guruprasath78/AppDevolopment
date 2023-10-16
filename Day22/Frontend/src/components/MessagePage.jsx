import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import Header from './Navbar';
import Footer from './Footer';

function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch messages from your backend when the component mounts
    axios
      .get('http://localhost:8082/api/support/all') // Replace with your actual API endpoint
      .then((response) => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
        setLoading(false);
      });
  }, []);

  const contentStyle = {
    backgroundColor: 'white', // Change to the desired background color
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const messageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Align content at the start
  };

  const messageStyle = {
    width: '48%',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
    marginRight: '2%',
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="container my-5" style={contentStyle}>
        <h1 className="display-4 text-center mb-3">Messages</h1>
        {loading ? (
          <p>Loading messages...</p>
        ) : (
          <div style={messageContainerStyle}>
            {messages.length > 0 ? (
              messages.map((message) => (
                <div key={message.id} style={messageStyle}>
                  <p>
                    <strong>Name:</strong> {message.name}
                    <br />
                    <strong>Email:</strong> {message.email}
                    <br />
                    <strong>Message:</strong> {message.message}
                  </p>
                  <FontAwesomeIcon icon={faEnvelope} color="blue" />{' '}
                  <FontAwesomeIcon icon={faComment} color="green" />
                </div>
              ))
            ) : (
              <p>No messages to display.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MessagesPage;
