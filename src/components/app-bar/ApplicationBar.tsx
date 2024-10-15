import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Icon, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { logout } from '../../store/reducers/auth/authSlice';
import SearchInput from '../search/SearchInput';

const ApplicationBar = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const performLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
                    Books Manager
                </Typography>
                <SearchInput />

                <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'
                >
                    <Icon>account_circle</Icon>
                </IconButton>
                <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={performLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default ApplicationBar;
