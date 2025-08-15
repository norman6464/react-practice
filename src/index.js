import React from 'react';
import ReactDOM from 'react-dom/client';
import ForFilter from './chap3/ForFilter';
import books from './chap3/books';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ForFilter books={books} />);
