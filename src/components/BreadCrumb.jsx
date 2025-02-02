import { ChevronRightSharp } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();

  // Helper function to determine if the link is active
  const getLinkClass = (path) =>
    `text-white ${
      location.pathname === path
        ? 'font-bold underline underline-offset-4'
        : 'font-bold '
    }`;

  return (
    <div className="h-12 flex justify-start mb-5 items-center">
      <div className="bg-primary rounded-l-xl rounded-r-3xl text-white max-w-[350px] flex-1 px-4 py-2">
        {/* Breadcrumbs */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/form-one" className={getLinkClass('/form-one')}>
                General
              </Link>
            </li>
            <li>
              <ChevronRightSharp />
            </li>
            <li>
              <Link
                to="/form-one/address"
                className={getLinkClass('/form-one/address')}
              >
                Address
              </Link>
            </li>
            <li>
              <ChevronRightSharp />
            </li>
            <li>
              <Link
                to="/form-one/billing"
                className={getLinkClass('/form-one/billing')}
              >
                Billing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumb;
