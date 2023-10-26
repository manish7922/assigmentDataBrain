import React, { useState, useEffect } from 'react';

import "./form.css"

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    personalDetails: {
      name: '',
      email: '',
    },
    address: {
      street: '',
      city: '',
      zip: '',
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const errors = {};
    switch (step) {
      case 1:
        if (!formData.personalDetails.name || !formData.personalDetails.email) {
          errors.personalDetails = 'Name and email are required.';
        }
        break;
      case 2:
        if (!formData.address.street || !formData.address.city || !formData.address.zip) {
          errors.address = 'All address fields are required.';
        }
        break;
      case 3:
        if (!formData.paymentDetails.cardNumber || !formData.paymentDetails.expiryDate || !formData.paymentDetails.cvv) {
          errors.paymentDetails = 'All payment details are required.';
        }
        break;
      default:
        break;
    }
    setFormErrors(errors);
  }, [formData, step]);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step === 1 ? 'personalDetails' : step === 2 ? 'address' : 'paymentDetails']: {
        ...prevData[step === 1 ? 'personalDetails' : step === 2 ? 'address' : 'paymentDetails'],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (Object.keys(formErrors).length === 0) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      personalDetails: {
        name: '',
        email: '',
      },
      address: {
        street: '',
        city: '',
        zip: '',
      },
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      },
    });
    setStep(1);
  };
  

  return (
    <div className='container'>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Details</h2>
          <label>Name:</label>
          <input
            type="text"
            value={formData.personalDetails.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            value={formData.personalDetails.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Address</h2>
          <label>Street:</label>
          <input
            type="text"
            value={formData.address.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
          />
          <br />
          <label>City:</label>
          <input
            type="text"
            value={formData.address.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
          <br />
          <label>ZIP:</label>
          <input
            type="text"
            value={formData.address.zip}
            onChange={(e) => handleInputChange('zip', e.target.value)}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Payment Details</h2>
          <label>Card Number:</label>
          <input
            type="text"
            value={formData.paymentDetails.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          />
          <br />
          <label>Expiry Date:</label>
          <input
            type="text"
            value={formData.paymentDetails.expiryDate}
            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
          />
          <br />
          <label>CVV:</label>
          <input
            type="text"
            value={formData.paymentDetails.cvv}
            onChange={(e) => handleInputChange('cvv', e.target.value)}
          />
        </div>
      )}

      <div>
        {Object.keys(formErrors).length > 0 && (
          <div style={{ color: 'red' }}>
            {Object.values(formErrors).map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}

        {step > 1 && <button onClick={handlePrev}>Previous</button>}
        {step < 3 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
