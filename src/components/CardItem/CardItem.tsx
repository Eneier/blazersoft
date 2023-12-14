import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, Link} from "@mui/material";
import {IBook, removeBook} from "../../features/books/booksSlice";
import {useAppDispatch} from "../../hooks/hooks";

interface BookItemProps {
    key: string;
    book: IBook;
    onEdit: (book: IBook) => void;
}

const CardItem: React.FC<BookItemProps> = ({book, onEdit}) => {

    const dispatch = useAppDispatch()

    const deleteBook = (): void => {
        dispatch(removeBook(book))
    }

    const updateBook = (): void => {
        onEdit(book);
    };

    return (
        <Card sx={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            padding: '10px',
            border: '3px solid #1976d2',
            borderRadius: '10px'
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5" onClick={updateBook} style={{ cursor: 'pointer' }}>
                        <strong>Name: </strong>{book.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>Price: </strong>{book.price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>Category: </strong>{book.category}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>Description: </strong>{book.description}
                    </Typography>
                </CardContent>
            </Box>
            <Button variant="outlined" color="error" onClick={deleteBook} sx={{width: '100px', height: '30px'}}>Delete</Button>
        </Card>
    );
}

export default CardItem;