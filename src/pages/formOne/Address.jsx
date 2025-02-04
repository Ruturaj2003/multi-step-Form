import { Link } from 'react-router-dom';

const Address = () => {
  return (
    <div className="p-4 relative" style={{ maxHeight: '550px' }}>
      <h1 className="text-xl font-bold text-center text-text mb-4">
        Address Details
      </h1>
      <form className="grid grid-cols-1 gap-4">
        {/* Address Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-text">Address Line 1</label>
            <input
              type="text"
              placeholder="Address Line 1"
              style={{ width: '80%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-text">Address Line 2</label>
            <input
              type="text"
              placeholder="Address Line 2"
              style={{ width: '80%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-text">Address Line 3</label>
            <input
              type="text"
              placeholder="Address Line 3"
              style={{ width: '80%' }}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
        </div>

        {/* Village Field (moved after address lines) */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Village</label>
          <select className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text">
            <option value="">Select Village</option>
            <option value="village1">Village 1</option>
            <option value="village2">Village 2</option>
          </select>
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-text">State</label>
            <select className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text">
              <option value="">Select State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-text">Pin Code</label>
            <input
              type="text"
              placeholder="Pin Code"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-text">Taluq</label>
            <input
              type="text"
              placeholder="Taluq"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-text">District</label>
            <input
              type="text"
              placeholder="District"
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm text-text"
            />
          </div>
        </div>
      </form>

      <div className="mt-4  flex  justify-end items-center flex-1">
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
