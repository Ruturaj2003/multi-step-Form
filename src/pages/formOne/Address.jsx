import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Address = () => {
  // Create refs for each input/select field to control focus
  const fieldRefs = [
    useRef(null), // Address Line 1
    useRef(null), // Address Line 2
    useRef(null), // Address Line 3
    useRef(null), // Village
    useRef(null), // State
    useRef(null), // Pin Code
    useRef(null), // Taluq
    useRef(null), // District
  ];

  // When Enter is pressed, prevent form submission and move to the next field
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index + 1 < fieldRefs.length && fieldRefs[index + 1].current) {
        fieldRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <div
      className="p-4 relative max-w-[550px] mx-auto"
      style={{ maxHeight: '550px' }}
    >
      <h1 className="text-xl font-bold text-center text-text mb-4">
        Address Details
      </h1>
      <form className="grid grid-cols-1 gap-4">
        {/* Address Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="address1" className="text-sm text-text">
              Address Line 1
            </label>
            <input
              id="address1"
              type="text"
              placeholder="Address Line 1"
              style={{ width: '90%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[0]}
              onKeyDown={(e) => handleKeyDown(e, 0)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address2" className="text-sm text-text">
              Address Line 2
            </label>
            <input
              id="address2"
              type="text"
              placeholder="Address Line 2"
              style={{ width: '90%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[1]}
              onKeyDown={(e) => handleKeyDown(e, 1)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address3" className="text-sm text-text">
              Address Line 3
            </label>
            <input
              id="address3"
              type="text"
              placeholder="Address Line 3"
              style={{ width: '90%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[2]}
              onKeyDown={(e) => handleKeyDown(e, 2)}
            />
          </div>
        </div>

        {/* Village Field */}
        <div className="flex flex-col">
          <label htmlFor="village" className="text-sm text-text">
            Village
          </label>
          <select
            id="village"
            className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            ref={fieldRefs[3]}
            onKeyDown={(e) => handleKeyDown(e, 3)}
          >
            <option value="">Select Village</option>
            <option value="village1">Village 1</option>
            <option value="village2">Village 2</option>
          </select>
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="state" className="text-sm text-text">
              State
            </label>
            <select
              id="state"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[4]}
              onKeyDown={(e) => handleKeyDown(e, 4)}
            >
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="pincode" className="text-sm text-text">
              Pin Code
            </label>
            <input
              id="pincode"
              type="text"
              placeholder="Pin Code"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[5]}
              onKeyDown={(e) => handleKeyDown(e, 5)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="taluq" className="text-sm text-text">
              Taluq
            </label>
            <input
              id="taluq"
              type="text"
              placeholder="Taluq"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[6]}
              onKeyDown={(e) => handleKeyDown(e, 6)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="district" className="text-sm text-text">
              District
            </label>
            <input
              id="district"
              type="text"
              placeholder="District"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
              ref={fieldRefs[7]}
              onKeyDown={(e) => handleKeyDown(e, 7)}
            />
          </div>
        </div>
      </form>

      {/* Save Button */}
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

export default Address;
