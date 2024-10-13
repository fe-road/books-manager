import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { RootState } from '../store/store';
import { useEffect } from 'react';
import { LOGGED_OUT_PAGE } from '../constants/navigation-constants';

const AppRoute = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (!authToken) {
            navigate(LOGGED_OUT_PAGE);
        }
    }, [navigate, authToken]);

    return authToken ? <Outlet /> : null;
};

export default AppRoute;
