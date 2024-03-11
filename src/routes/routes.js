import { Admin } from '../pages/Admin';
import { AdminModules } from '../pages/AdminModules';
import { EditModule } from '../pages/EditModule';
import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { Module } from '../pages/Module';
import { NotFoundedPage } from '../pages/NotFoundedPage';
import { Profile } from '../pages/Profile';
import { AdminUsers, Users } from '../pages/AdminUsers';
import { ViewModule } from '../pages/ViewModule';
import { ViewUser } from '../pages/ViewUser';
import { EditUser } from '../pages/EditUser';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundedPage />,
    children: [
      {
        path: '/module/:id',
        element: <Module />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/admin/modules',
        element: <AdminModules />,
      },
      {
        path: '/viewModule/:id',
        element: <ViewModule />,
      },
      {
        path: '/editModule/:id',
        element: <EditModule />,
      },
      {
        path: '/admin/users',
        element: <AdminUsers />,
      },
      {
        path: '/admin/user/:id',
        element: <ViewUser />,
      },
      {
        path: '/admin/editUser/:id',
        element: <EditUser />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
];

export default routes;
