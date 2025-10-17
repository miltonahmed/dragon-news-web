import { format } from 'date-fns';
import logo from '../../assets/logo.png';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
const Header = () => {
  return (
    <div>
      <section className="flex justify-center items-center gap-3 flex-col px-4">
        <img src={logo} alt="Company logo" className="w-[400px] mx-auto" />
        <p className="font-normal text-lg leading-7 text-accent">
          Journalism Without Fear or Favour
        </p>
        {/* Local Date  */}
        <p className="font-semibold text-accent">
          {format(new Date(), 'EEEE, MMMM dd, yyyy')}
        </p>
      </section>
      <LatestNews />
      <Navbar />
    </div>
  );
};

export default Header;
