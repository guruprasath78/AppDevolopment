import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/FeedBack.css';
function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h2 className='feedback-title mt-3'>Provide Feedback</h2>
        {submitted ? (
          <div className='feedback-submitted'>
            <p>Thank you for your feedback!</p>
            <p>We appreciate your input.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmitFeedback}>
            <div className='form-group'>
              <label htmlFor='feedbackTextarea'>Tell us your feedback:</label>
              <textarea
                id='feedbackTextarea'
                className='form-control'
                rows='5'
                value={feedback}
                onChange={handleFeedbackChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit Feedback
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
