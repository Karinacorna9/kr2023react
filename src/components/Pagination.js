import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => (
    <div>
        {page > 1 && <button onClick={() => onPageChange(page - 1)}>Previous</button>}
        {new Array(totalPages).fill(null).map((_, i) => (
            <button key={i + 1} onClick={() => onPageChange(i + 1)}>{i + 1}</button>
        ))}
        {page < totalPages && <button onClick={() => onPageChange(page + 1)}>Next</button>}
    </div>
);

export default Pagination;