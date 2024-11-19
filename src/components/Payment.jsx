import React, { useState } from 'react';
import { CreditCard, Lock, Check, CreditCardIcon, DollarSign, Truck } from 'lucide-react';

const PaymentSystem = ({ onPaymentComplete=100 }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [cashDetails, setCashDetails] = useState({
    name: '',
    phone: ''
  });

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .trim();
  };

  const formatExpiry = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(?=\d)/g, '$1/')
      .trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (paymentMethod === 'card') {
      // Card validation
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid card number');
        return;
      }
      if (expiry.length !== 5) {
        alert('Please enter a valid expiry date');
        return;
      }
      if (cvv.length !== 3) {
        alert('Please enter a valid CVV');
        return;
      }
    } else if (paymentMethod === 'cod') {
      // COD validation
      if (!cashDetails.name || !cashDetails.phone) {
        alert('Please enter name and phone number');
        return;
      }
    }

    // Simulate payment processing
    setPaymentComplete(true);
    
    // Call onPaymentComplete prop after 2 seconds
    setTimeout(() => {
      onPaymentComplete && onPaymentComplete();
    }, 200000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center ">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
          <Check className="mx-auto text-green-500 w-24 h-24" />
          <h2 className="text-3xl font-bold text-pink-600 mt-4">Payment Successful!</h2>
          <p className="text-gray-600 mt-2">Processing your order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 mt-24">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-center mb-6">
          <CreditCard className="text-pink-600 w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold text-pink-600">Payment</h1>
        </div>

        {/* Payment Method Selection */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`mx-2 px-4 py-2 rounded-lg flex items-center ${
              paymentMethod === 'card' 
              ? 'bg-pink-600 text-white' 
              : 'bg-pink-100 text-pink-600'
            }`}
          >
            <CreditCardIcon className="mr-2" /> Card Payment
          </button>
          <button
            onClick={() => setPaymentMethod('cod')}
            className={`mx-2 px-4 py-2 rounded-lg flex items-center ${
              paymentMethod === 'cod' 
              ? 'bg-pink-600 text-white' 
              : 'bg-pink-100 text-pink-600'
            }`}
          >
            <Truck className="mr-2" /> Cash on Delivery
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === 'card' ? (
            <>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength="19"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    required
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400" />
                </div>
              </div>

              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  id="cardName"
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    maxLength="5"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength="3"
                    placeholder="123"
                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="codName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="codName"
                  type="text"
                  value={cashDetails.name}
                  onChange={(e) => setCashDetails({...cashDetails, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="codPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="codPhone"
                  type="tel"
                  value={cashDetails.phone}
                  onChange={(e) => setCashDetails({...cashDetails, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {paymentMethod === 'card' ? 'Pay Now' : 'Confirm Cash on Delivery'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentSystem;