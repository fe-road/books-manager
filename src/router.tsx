import { createBrowserRouter } from 'react-router-dom';

import BaseRoute from './routes/BaseRoute';
import AppRoute from './routes/AppRoute';
import LoginRoute from './routes/LoginRoute';
import BookSearchRoute from './routes/BookSearchRoute';
import BookshelfRoute from './routes/BookshelfRoute';

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
                    {
                        path: 'bookshelves',
                        element: <BookshelfRoute />,
                    },
                ],
            },
        ],
    },
]);

export default router;
