import { Outlet } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
// Import the new BreadCrumb component

const FormOne = () => {
  return (
    <div className="form-container">
      {/* Form Container */}
      <div className="form-card">
        <p className="text-text text-3xl mb-4">Lorem Ipsum orem Ipsum</p>
        <BreadCrumb></BreadCrumb>
        <Outlet />
      </div>
      {/* Outlet to render nested routes */}
    </div>
  );
};

export default FormOne;
