import React, {useState} from 'react';
import Box from "@mui/material/Box";
import CardItem from "../CardItem/CardItem";
import {IBook} from "../../features/books/booksSlice";
import {useAppSelector} from "../../hooks/hooks";
import BasicModal from "../Modal/Modal";
import EmptyBox from "../EmptyBox/EmptyBox";


const Card: React.FC = () => {
    const books: IBook[] = useAppSelector((state) => state.books.books)
    const [editBook, setEditBook] = useState<IBook | undefined>(undefined);

    //Modal
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setEditBook(undefined)
        setOpen(true);
    }
    const handleClose = (): void => {
        setOpen(false);
    }

    const handleEditBook = (book: IBook): void => {
        setEditBook(book);
        setOpen(true)
    };

    return (
        <Box sx={{
            maxHeight: '600px',
            overflowY: 'auto',
            padding: '10px',
        }}>
            <BasicModal
                open={Boolean(open)}
                handleOpen={handleOpen}
                handleClose={handleClose}
                book={editBook}
            />
            {books && books.length > 0 ? (
                books.map((book) => (
                    <CardItem key={book.id} book={book} onEdit={handleEditBook}/>
                ))
            ) : (
               <EmptyBox title='No Books' />
            )}
        </Box>
    );
};

export default Card;