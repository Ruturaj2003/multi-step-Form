import { Link, Outlet } from 'react-router-dom';

const FormOne = () => {
  return (
    <div>
      {/* */}
      <Outlet /> {/* Renders the child routes (General, Address, Billing) */}
    </div>
  );
};

export default FormOne;
