import { Card, CardContent, Chip, Typography } from '@mui/material';
import { BookshelfModel } from '../../models/BookshelfModel';

import './search-bookshelf-list-item.scss';

interface Props {
    item: BookshelfModel;
}

const BookshelfListItem = ({ item }: Props) => {
    return (
        <Card>
            <CardContent className='bookshelf-list-item'>
                <Typography variant='h6' component='h2'>
                    {item.title}
                </Typography>
                <Chip label={item.volumeCount} />
            </CardContent>
        </Card>
    );
};

export default BookshelfListItem;
