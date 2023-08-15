import { Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MoreInfo from './pages/MoreInfo';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoreInfo />} />
        <Route path="/tell" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
