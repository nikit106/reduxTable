import React from 'react';

const ItemCard = ({Name, Email, Phone, Company}) => (
        <tr className = "tableTr">
            <td className = "tableTd" >{Name}</td>
            <td className = "tableTd" >{Email}</td>
            <td className = "tableTd" >{Phone}</td>
            <td className = "tableTd" >{Company}</td>
        </tr>
)

export default ItemCard
