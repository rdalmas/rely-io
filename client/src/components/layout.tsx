import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { useContext } from 'react';
import { UserContext } from '../providers/user.provider';

const Layout = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header username={user.username} />
      <Outlet />
    </>
  );
}

export default Layout;
