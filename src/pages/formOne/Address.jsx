import { Link } from 'react-router-dom';

const Address = () => {
  return (
    <div className="p-4" style={{ maxHeight: '550px' }}>
      <h1 className="text-xl font-bold text-center text-text mb-4">
        Address Details
      </h1>
      <form className="grid grid-cols-1 gap-4 h-full">
        {/* Drop Down Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-sm text-text">Village</label>
            <select className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text">
              <option value="">Select Village</option>
              <option value="village1">Village 1</option>
              <option value="village2">Village 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="text-sm text-text">Circle</label>
            <select className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text">
              <option value="">Select Circle</option>
              <option value="circle1">Circle 1</option>
              <option value="circle2">Circle 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="text-sm text-text">Zone</label>
            <select className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text">
              <option value="">Select Zone</option>
              <option value="zone1">Zone 1</option>
              <option value="zone2">Zone 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Address Lines */}
        <div className="flex flex-col">
          <label className="text-sm text-text">Address Line 1</label>
          <input
            type="text"
            placeholder="Address Line 1"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-text">Address Line 2</label>
          <input
            type="text"
            placeholder="Address Line 2"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-text">Address Line 3</label>
          <input
            type="text"
            placeholder="Address Line 3"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
          />
        </div>

        {/* Navigation Link to Billing */}
        <div className="mt-auto">
          <Link
            to="/form-one/billing"
            className="block text-center py-2 bg-primary text-white rounded-md text-sm font-semibold"
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Address;
