import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListWithSubList = ({ title, items, limit, renderItem }) => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><h5>{title}</h5></li>
            <ul className="list-group list-group-flush">
                {items && items.slice(0, limit).map((item, index) => (
                    <li key={index} className="list-group-item">{renderItem(item)}</li>
                ))}
            </ul>
        </ul>
    );
};

export default ListWithSubList;
