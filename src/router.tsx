import { createBrowserRouter } from 'react-router-dom';

import BaseRoute from './routes/BaseRoute';
import AppRoute from './routes/AppRoute';
import LoginRoute from './routes/LoginRoute';
import BookSearchRoute from './routes/BookSearchRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseRoute />,
        children: [
            {
                path: 'login',
                element: <LoginRoute />,
            },
            {
                path: 'app',
                element: <AppRoute />,
                children: [
                    {
                        path: 'search',
                        element: <BookSearchRoute />,
                    },
                ],
            },
        ],
    },
]);

export default router;
