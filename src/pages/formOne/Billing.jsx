import { Link } from 'react-router-dom';

const Billing = () => {
  return (
    <div className="p-4" style={{ maxHeight: '550px' }}>
      <h1 className="text-xl font-bold text-center text-text mb-4">
        Billing Details
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Aadhaar Number */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Aadhaar Number</label>
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* Pan Number */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Pan Number</label>
          <input
            type="text"
            placeholder="Enter Pan Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* Bank1 Name */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Bank1 Name</label>
          <input
            type="text"
            placeholder="Enter Bank1 Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* A/c Number (Bank1) */}
        <div className="flex flex-col">
          <label className="text-sm text-text">A/c Number (Bank1)</label>
          <input
            type="text"
            placeholder="Enter Account Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* IFSC Code (Bank1) */}
        <div className="flex flex-col">
          <label className="text-sm text-text">IFSC Code (Bank1)</label>
          <input
            type="text"
            placeholder="Enter IFSC Code"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* Bank2 Name */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Bank2 Name</label>
          <input
            type="text"
            placeholder="Enter Bank2 Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* A/c Number (Bank2) */}
        <div className="flex flex-col">
          <label className="text-sm text-text">A/c Number (Bank2)</label>
          <input
            type="text"
            placeholder="Enter Account Number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* IFSC Code (Bank2) */}
        <div className="flex flex-col">
          <label className="text-sm text-text">IFSC Code (Bank2)</label>
          <input
            type="text"
            placeholder="Enter IFSC Code"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* Navigation Link to Home */}
        <div className="mt-auto col-span-2">
          <Link
            to="/"
            className="block text-center py-2 bg-primary text-white rounded-md text-sm font-semibold"
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Billing;
