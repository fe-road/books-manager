import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, IconButton, InputAdornment, TextField } from '@mui/material';
import { AppDispatch } from '../../store/store';

import { setText } from '../../store/reducers/search/searchSlice';
import { doSearch } from '../../store/reducers/search/search.thunk';

import './search-input.scss';

const SearchInput = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchText, setSearchText] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === 'enter') {
            search();
        }
    };

    const search = async () => {
        dispatch(setText(searchText));
        dispatch(doSearch());
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
                            <IconButton onClick={search} color='inherit'>
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
