import React from 'react';
import Box from "@mui/material/Box";
import CardItem from "../CardItem/CardItem";
import {IBook} from "../../features/books/booksSlice";
import {useAppSelector} from "../../hooks/hooks";
import BasicModal from "../Modal/Modal";


const Card: React.FC = () => {
    const books: IBook[] = useAppSelector((state) => state.books.books)


    return (
        <Box sx={{
            maxHeight: '600px',
            overflowY: 'auto',
            padding: '10px',
        }}>
            <BasicModal/>
            {books?.map((book) => (
                <CardItem key={book.name} book={book}/>
            ))}
        </Box>
    );
};

export default Card;