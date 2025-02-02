import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Link to="/form-one" className="px-4 py-2 bg-blue-500 text-white rounded">
        Go to Form 1
      </Link>
      <Link
        to="/form-two"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Go to Form 2
      </Link>
    </div>
  );
};
export default Home;
