import { Link, NavLink } from 'react-router';
import user from '../../assets/user.png';

const Navbar = () => {
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Career', path: '/career' },
  ];

  return (
    <nav className="max-w-11/12 mx-auto flex justify-between items-center py-3">
      <div className=""></div>
      <ul className="lg:flex justify-center gap-8 hidden">
        {navItems.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold'
                  : 'text-accent font-normal hover:text-primary transition-all duration-300'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <img src={user} />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
