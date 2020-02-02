import React from 'react';

const ItemCard = (test) => {
    return(

    Object.keys(test).map(function(key,index){
        return <td key = {index} className = "tableTd" >{test[key]}</td>
    })
    )
    /*
        <tr className = "tableTr">
            <td className = "tableTd" >{Name}</td>
            <td className = "tableTd" >{Email}</td>
            <td className = "tableTd" >{Phone}</td>
            <td className = "tableTd" >{Company}</td>
        </tr>
        */
}

export default ItemCard
