import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { RootState } from '../store/store';
import { useEffect } from 'react';

const AppRoute = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (!authToken) {
            navigate('/login');
        }
    }, [navigate, authToken]);

    return authToken ? <Outlet /> : null;
};

export default AppRoute;
