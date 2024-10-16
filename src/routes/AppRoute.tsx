import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { RootState } from '../store/store';
import { LOGGED_OUT_PAGE } from '../constants/navigation-constants';

import ApplicationBar from '../components/app-bar/ApplicationBar';

const AppRoute = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (!authToken) {
            navigate(LOGGED_OUT_PAGE);
        }
    }, [navigate, authToken]);

    return authToken ? (
        <>
            <ApplicationBar />
            <section className='page-content'>
                <Outlet />
            </section>
        </>
    ) : null;
};

export default AppRoute;
