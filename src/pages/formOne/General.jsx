import { Link } from 'react-router-dom';
import { useRef } from 'react';

const General = () => {
  // Create refs for each input field (excluding file input)
  const fieldRefs = [
    useRef(null), // First Name
    useRef(null), // Middle Name
    useRef(null), // Last Name
    useRef(null), // Phone Number
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
        General Details
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Left Column: Form Fields */}
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="text-sm text-text">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                  ref={fieldRefs[0]}
                  onKeyDown={(e) => handleKeyDown(e, 0)}
                />
              </div>
              <div>
                <label htmlFor="middleName" className="text-sm text-text">
                  Middle Name
                </label>
                <input
                  id="middleName"
                  type="text"
                  placeholder="M."
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                  ref={fieldRefs[1]}
                  onKeyDown={(e) => handleKeyDown(e, 1)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm text-text">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                ref={fieldRefs[2]}
                onKeyDown={(e) => handleKeyDown(e, 2)}
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-text">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                ref={fieldRefs[3]}
                onKeyDown={(e) => handleKeyDown(e, 3)}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Photo Upload */}
        <div className="flex flex-col items-center justify-start space-y-2">
          <label htmlFor="photo" className="text-sm text-text">
            Upload Photo
          </label>
          <div className="w-20 h-20 md:w-32 md:h-32 border-2 border-dashed border-primary rounded-full md:rounded-lg flex items-center justify-center bg-accent relative">
            <input
              id="photo"
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <span className="text-xl text-text">+</span>
          </div>
        </div>
      </form>
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

export default General;
