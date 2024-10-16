import { Card, CardContent, Chip, Typography } from '@mui/material';
import { BookModel } from '../../models/BookModel';

import './search-book-list-item.scss';

interface Props {
    item: BookModel;
}

const SearchBookListItem = ({ item }: Props) => {
    return (
        <Card>
            <CardContent className='book-list-item'>
                <div>
                    {item.volumeInfo?.imageLinks?.smallThumbnail && (
                        <img src={item.volumeInfo?.imageLinks?.smallThumbnail} alt={item.volumeInfo.title} className='book-image' />
                    )}
                </div>
                <div>
                    {item.volumeInfo?.title && <Typography variant='h6'>{item.volumeInfo.title.substring(0, 100)}</Typography>}
                    {!!item.volumeInfo?.authors?.length && (
                        <Typography variant='subtitle1'>{item.volumeInfo.authors.join(', ')}</Typography>
                    )}
                    <div>
                        {item.volumeInfo?.publishedDate && (
                            <Typography variant='caption' className='published-date'>
                                Year: {new Date(item.volumeInfo.publishedDate).getFullYear()}
                            </Typography>
                        )}
                        {!!item.volumeInfo?.pageCount && <Typography variant='caption'>Pages: {item.volumeInfo.pageCount}</Typography>}
                    </div>
                    {!!item.volumeInfo?.categories?.length &&
                        item.volumeInfo.categories.map((category) => <Chip key={category} label={category} size='small' />)}
                </div>
            </CardContent>
        </Card>
    );
};

export default SearchBookListItem;
