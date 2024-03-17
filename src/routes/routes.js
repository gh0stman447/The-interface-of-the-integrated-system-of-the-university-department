import { Admin } from '../pages/Admin';
import { AdminModules } from '../pages/AdminModules';
import { EditModule } from '../pages/EditModule';
import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { SubModule } from '../pages/SubModule';
import { NotFoundedPage } from '../pages/NotFoundedPage';
import { Profile } from '../pages/Profile';
import { AdminUsers } from '../pages/AdminUsers';
import { ViewModule } from '../pages/ViewModule';
import { ViewUser } from '../pages/ViewUser';
import { EditUser } from '../pages/EditUser';
import { AdminSubmodules } from '../pages/AdminSubmodules';
import { ViewSubmodule } from '../pages/ViewSubmodule';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundedPage />,
    children: [
      {
        path: '/submodule/:id',
        element: <SubModule />,
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
        path: '/admin/submodules/:id',
        element: <AdminSubmodules />,
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
        path: '/admin/viewSubmodule/:id',
        element: <ViewSubmodule />,
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
