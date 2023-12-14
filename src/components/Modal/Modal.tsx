import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import {addBook, IBook, updateBook} from "../../features/books/booksSlice";
import {useAppDispatch} from "../../hooks/hooks";
import { v4 as uuid } from "uuid";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    width: 600,
    gap: 5,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModal {
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    book?: IBook
}

const BasicModal: React.FC<IModal> = ({open, handleOpen, handleClose, book}) => {
    const [newBook, setNewBook] = useState<IBook>({
        id: '',
        name: '',
        price: 0,
        category: '',
        description: ''
    });


    React.useEffect(() => {
        if (book) {
            setNewBook(book);
        }
    }, [book]);

    const dispatch = useAppDispatch()

    const addOrUpdateBook = (): void => {
        if (newBook.name.length > 0 && newBook.price > 0 && newBook.category.length > 0) {
            const bookToAddOrUpdate: IBook = {
                ...newBook,
                id: uuid()
            };

            if (book) {
                dispatch(updateBook(newBook));
            } else {
                dispatch(addBook(bookToAddOrUpdate));
            }

            setNewBook({
                id: '',
                name: '',
                price: 0,
                category: '',
                description: ''
            });
            handleClose();
        } else {
            alert('All fields must be filled');
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Add Book</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {book ? 'Edit Book' : 'Add Book'}
                    </Typography>
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        required
                        value={newBook.name}
                    />
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, price: parseFloat(e.target.value) })}
                        id="outlined-basic"
                        type="number"
                        label="Price"
                        variant="outlined"
                        required
                        value={newBook.price}
                    />
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        required
                        value={newBook.category}
                    />
                    <TextareaAutosize
                        onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                        minRows="10"
                        id="outlined-basic"
                        value={newBook.description}
                    />
                    <Button variant="contained" onClick={addOrUpdateBook}> {book ? 'Save Changes' : 'Add Book'}</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;
