import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, IconButton, InputAdornment, TextField } from '@mui/material';
import { searchBooks } from '../../services/api-service';
import { RootState } from '../../store/store';

import './search-input.scss';

const SearchInput = () => {
    // const dispatch = useDispatch();
    const authToken = useSelector((state: RootState) => state.auth.token);
    const [searchText, setSearchText] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === 'enter') {
            doSearch();
        }
    };

    const doSearch = async () => {
        if (authToken && searchText) {
            const response = await searchBooks(authToken, searchText);
            console.log(response);
        }
    };

    return (
        <TextField
            label='Search'
            value={searchText}
            variant='filled'
            size='small'
            color='secondary'
            className='search-input'
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            slotProps={{
                input: {
                    endAdornment: searchText ? (
                        <InputAdornment position='end'>
                            <IconButton onClick={doSearch} color='inherit'>
                                <Icon>search</Icon>
                            </IconButton>
                        </InputAdornment>
                    ) : null,
                },
            }}
        />
    );
};

export default SearchInput;
