import React from 'react';

class ProductRow extends React.Component {
    render() {
        const products = this.props.products;
        const name = products.stocked ? products.name : <span style={{color: 'red'}}>
            {products.name}
        </span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{products.price}</td>
            </tr>
        );
    }
}

export default ProductRow;