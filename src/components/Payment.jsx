import React, { useState } from 'react';
import { CreditCard, Lock, Check, CreditCardIcon, DollarSign, Truck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

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
      <div className="min-h-screen bg-pink-50 flex items-center justify-center mt-28">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl text-center mx-4">
          <Check className="mx-auto text-green-500 w-16 h-16 md:w-24 md:h-24" />
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mt-4">Payment Successful!</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Processing your order...</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 mt-28">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cart</span>
        </button>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <CreditCard className="text-pink-600 w-8 h-8 md:w-12 md:h-12 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-pink-600">Payment</h1>
          </div>

          {/* Payment Method Selection */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                paymentMethod === 'card' 
                ? 'bg-pink-600 text-white shadow-lg' 
                : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}
            >
              <CreditCardIcon className="mr-2 w-4 h-4" /> 
              <span className="text-sm md:text-base">Card Payment</span>
            </button>
            <button
              onClick={() => setPaymentMethod('cod')}
              className={`px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                paymentMethod === 'cod' 
                ? 'bg-pink-600 text-white shadow-lg' 
                : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}
            >
              <Truck className="mr-2 w-4 h-4" /> 
              <span className="text-sm md:text-base">Cash on Delivery</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {paymentMethod === 'card' ? (
              <>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                      required
                    />
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                    Name on Card
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      id="expiry"
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      maxLength="5"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="password"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength="3"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="codName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="codName"
                    type="text"
                    value={cashDetails.name}
                    onChange={(e) => setCashDetails({...cashDetails, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="codPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="codPhone"
                    type="tel"
                    value={cashDetails.phone}
                    onChange={(e) => setCashDetails({...cashDetails, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 md:py-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 font-medium text-lg transform hover:scale-105"
            >
              {paymentMethod === 'card' ? 'Pay Now' : 'Confirm Cash on Delivery'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;