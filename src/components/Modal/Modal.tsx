import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import {addBook, IBook} from "../../features/books/booksSlice";
import {useAppDispatch} from "../../hooks/hooks";

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

const BasicModal: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [newBook, setNewBook] = useState<IBook>({
        name: '',
        price: 0,
        category: '',
        description: ''
    });


    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);
    const dispatch = useAppDispatch()

    const addNewBook = (): void => {
        if (newBook.name.length > 0 && newBook.price > 0 && newBook.category.length > 0) {
            dispatch(addBook(newBook))
            setNewBook({
                name: '',
                price: 0,
                category: '',
                description: ''
            })
            handleClose();
        } else  alert('The field must be filled')
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
                        Add Book Details
                    </Typography>
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        required
                    />
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, price: parseFloat(e.target.value) })}
                        id="outlined-basic"
                        type="number"
                        label="Price"
                        variant="outlined"
                        required
                    />
                    <TextField
                        onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        required
                    />
                    <TextareaAutosize
                        onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                        minRows="10"
                        id="outlined-basic"
                    />
                    <Button variant="contained" onClick={addNewBook}>Add Book</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;
