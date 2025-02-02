import { Link, Outlet } from 'react-router-dom';

const FormOne = () => {
  return (
    <div>
      {/* bread crumb that tells where i currently am and also i can naviagte to any portion of the form by clicking it */}
      <Outlet /> {/* Renders the child routes (General, Address, Billing) */}
    </div>
  );
};

export default FormOne;
