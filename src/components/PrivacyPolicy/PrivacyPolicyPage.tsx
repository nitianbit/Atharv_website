import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PrivacyPolicy from './PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
