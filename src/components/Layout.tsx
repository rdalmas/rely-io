import { Outlet } from 'react-router-dom';
import { Header } from '.';

const Layout = () => {
  return (
    <>
      <Header username="username" />
      <Outlet />
    </>
  );
}

export default Layout;
