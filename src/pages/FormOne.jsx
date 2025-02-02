import { ChevronRightSharp } from '@mui/icons-material';
import { Outlet, Link, useLocation } from 'react-router-dom';
useLocation;
const FormOne = () => {
  return (
    <div className="container">
      {/* Bread Crumbs */}
      <div className="h-12 flex justify-center items-center">
        <div className="bg-primary rounded-l-xl rounded-r-3xl  text-white  max-w-[350px] flex-1 px-4 py-2">
          {/* Breadcrumbs */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/form-one" className="text-white">
                  General
                </Link>
              </li>
              <li>
                <ChevronRightSharp></ChevronRightSharp>
              </li>
              <li>
                <Link to="/form-one/address" className="text-white">
                  Address
                </Link>
              </li>
              <li>
                <ChevronRightSharp></ChevronRightSharp>
              </li>
              <li>
                <Link to="/form-one/billing" className="text-white">
                  Billing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
};

export default FormOne;
