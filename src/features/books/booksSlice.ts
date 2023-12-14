import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface IBook {
    id: string,
    name: string;
    price: number;
    category: string;
    description: string;
}

export interface IBooksState {
    books: IBook[];
}

const initialState: IBooksState = {
    books: [
        {id: uuid(), name: 'Alice1', price: 200, category: 'Fantasy', description: 'very nice book'},
    ],
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state: IBooksState, action: PayloadAction<IBook>): IBooksState => {
            state.books = [...state.books, action.payload];
            return state;
        },
        updateBook: (state: IBooksState, action: PayloadAction<IBook>): IBooksState => {
            const updatedIndex = state.books.findIndex((book) => book.id === action.payload.id);
            if (updatedIndex !== -1) {
                return {
                    ...state,
                    books: state.books.map((book, index) =>
                        index === updatedIndex ? action.payload : book
                    ),
                };
            }
            return state;
        },
        removeBook: (state: IBooksState, action: PayloadAction<IBook>): IBooksState => {
            state.books = state.books.filter((book) => book.id !== action.payload.id);
            return state;
        },
    },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
