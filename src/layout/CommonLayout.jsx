import { Outlet, NavLink } from 'react-router-dom';
import styles from './CommonLayout.module.css';

export const CommonLayout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.menu}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
