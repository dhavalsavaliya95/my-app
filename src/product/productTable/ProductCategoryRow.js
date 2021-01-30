import React from 'react';

class ProductRow extends React.Component {
    render() {
        const category = this.props.category;
        return(
            <tr>
                <th>{category}</th>
            </tr>
        );
    }
}

export default ProductRow;