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
}

const CardItem: React.FC<BookItemProps> = ({book}) => {

    const dispatch = useAppDispatch()

    const deleteBook = (): void => {
        dispatch(removeBook(book.name))
    }

    const updateBook = () => {

    }

    return (
        <Card sx={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'space-between',
            padding: '10px',
            border: '3px solid #1976d2',
            borderRadius: '10px'
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        <strong onClick={updateBook}>Name: </strong>{book.name}
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
                <Button variant="contained" onClick={deleteBook}>Delete</Button>
            </Box>
        </Card>
    );
}

export default CardItem;