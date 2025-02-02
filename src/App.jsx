import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import General from './pages/formOne/General';
import Address from './pages/formOne/Address';
import Billing from './pages/formOne/Billing';
import DummyOne from './pages/formTwo/DummyOne';
import DummyTwo from './pages/formTwo/DummyTwo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-one" element={<FormOne />}>
          <Route index element={<General />} />
          <Route path="address" element={<Address />} />
          <Route path="billing" element={<Billing />} />
        </Route>
        <Route path="/form-two" element={<FormTwo />}>
          <Route path="dummy-one" element={<DummyOne />} />
          <Route path="dummy-two" element={<DummyTwo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
