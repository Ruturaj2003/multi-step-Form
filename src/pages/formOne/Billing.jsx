import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Billing = () => {
  // Create refs for each input field
  const fieldRefs = [
    useRef(null), // Aadhaar Number
    useRef(null), // Pan Number
    useRef(null), // Bank 1 Name
    useRef(null), // A/c Number (Bank 1)
    useRef(null), // IFSC Code (Bank 1)
    useRef(null), // Bank 2 Name
    useRef(null), // A/c Number (Bank 2)
    useRef(null), // IFSC Code (Bank 2)
  ];

  // Handler to move focus to the next field on Enter key press
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index + 1 < fieldRefs.length && fieldRefs[index + 1].current) {
        fieldRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <div className="p-4 max-w-[550px] mx-auto" style={{ maxHeight: '550px' }}>
      <h1 className="text-xl font-bold text-center text-text mb-4">
        Billing Details
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Aadhaar Number */}
        <div className="flex flex-col">
          <label htmlFor="aadhaar" className="text-sm text-text">
            Aadhaar Number
          </label>
          <input
            id="aadhaar"
            type="text"
            placeholder="Enter Aadhaar Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[0]}
            onKeyDown={(e) => handleKeyDown(e, 0)}
          />
        </div>

        {/* Pan Number */}
        <div className="flex flex-col">
          <label htmlFor="pan" className="text-sm text-text">
            Pan Number
          </label>
          <input
            id="pan"
            type="text"
            placeholder="Enter Pan Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[1]}
            onKeyDown={(e) => handleKeyDown(e, 1)}
          />
        </div>

        {/* Bank 1 Name */}
        <div className="flex flex-col">
          <label htmlFor="bank1Name" className="text-sm text-text">
            Bank 1 Name
          </label>
          <input
            id="bank1Name"
            type="text"
            placeholder="Enter Bank 1 Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[2]}
            onKeyDown={(e) => handleKeyDown(e, 2)}
          />
        </div>

        {/* A/c Number (Bank 1) */}
        <div className="flex flex-col">
          <label htmlFor="account1" className="text-sm text-text">
            A/c Number (Bank 1)
          </label>
          <input
            id="account1"
            type="text"
            placeholder="Enter Account Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[3]}
            onKeyDown={(e) => handleKeyDown(e, 3)}
          />
        </div>

        {/* IFSC Code (Bank 1) */}
        <div className="flex flex-col">
          <label htmlFor="ifsc1" className="text-sm text-text">
            IFSC Code (Bank 1)
          </label>
          <input
            id="ifsc1"
            type="text"
            placeholder="Enter IFSC Code"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[4]}
            onKeyDown={(e) => handleKeyDown(e, 4)}
          />
        </div>

        {/* Bank 2 Name */}
        <div className="flex flex-col">
          <label htmlFor="bank2Name" className="text-sm text-text">
            Bank 2 Name
          </label>
          <input
            id="bank2Name"
            type="text"
            placeholder="Enter Bank 2 Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[5]}
            onKeyDown={(e) => handleKeyDown(e, 5)}
          />
        </div>

        {/* A/c Number (Bank 2) */}
        <div className="flex flex-col">
          <label htmlFor="account2" className="text-sm text-text">
            A/c Number (Bank 2)
          </label>
          <input
            id="account2"
            type="text"
            placeholder="Enter Account Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[6]}
            onKeyDown={(e) => handleKeyDown(e, 6)}
          />
        </div>

        {/* IFSC Code (Bank 2) */}
        <div className="flex flex-col">
          <label htmlFor="ifsc2" className="text-sm text-text">
            IFSC Code (Bank 2)
          </label>
          <input
            id="ifsc2"
            type="text"
            placeholder="Enter IFSC Code"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[7]}
            onKeyDown={(e) => handleKeyDown(e, 7)}
          />
        </div>
      </form>
      {/* Navigation Link */}
      <div className="mt-4 flex justify-end items-center">
        <Link
          to="/form-one/address"
          className="block text-center w-[180px] py-2 bg-primary text-white rounded-md text-sm font-semibold"
        >
          Save
        </Link>
      </div>
    </div>
  );
};

export default Billing;
