import { Link } from 'react-router-dom';

const General = () => {
  return (
    <div className="p-4" style={{ maxHeight: '550px' }}>
      <h1 className="text-xl font-bold text-center text-text mb-4">
        General Details
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Left Column: Photo Upload */}
        <div className="flex flex-col items-center justify-start space-y-2">
          <label className="text-sm text-text">Upload Photo</label>
          <div className="w-20 h-20 md:w-32 md:h-32 border-2 border-dashed border-primary rounded-full md:rounded-lg flex items-center justify-center bg-accent relative">
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <span className="text-xl text-text">+</span>
          </div>
        </div>

        {/* Right Column: Form Fields */}
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-text">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                />
              </div>
              <div>
                <label className="text-sm text-text">Middle Name</label>
                <input
                  type="text"
                  placeholder="M."
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-text">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
              />
            </div>
            <div>
              <label className="text-sm text-text">Phone Number</label>
              <input
                type="tel"
                placeholder="123-456-7890"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm text-text"
              />
            </div>
          </div>

          {/* Link to Next Part of the Form */}
          <div className="mt-4">
            <Link
              to="/form-one/address"
              className="block text-center py-2 bg-primary text-white rounded-md text-sm font-semibold"
            >
              Save
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default General;
