import React from 'react';

const ItemCard = ({ setFilter, filterBy }) => {
    const title = ['Name', 'Email', 'Phone', 'Company']
    
    return title.map((item,index) => {
            return (
                <th  className = "tableTh" key = {index} onClick = {setFilter.bind(this, `${item}`)}>{item}
                </th>
            )
        }) 
    
}


export default ItemCard