import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText.toUpperCase();
        const inStockOnly = this.props.inStockOnly;

        const row = [];
        let lastCategory = null;

        this.props.products.forEach((products) => {
            if(products.name.toUpperCase().indexOf(filterText) === -1){
               return ;
            }
            if(inStockOnly && !products.stocked){
                return;
            }
            if(products.category!==lastCategory){
                row.push(
                    <ProductCategoryRow category={products.category} key={products.category}/>
                )
            }
            row.push(
                <ProductRow products={products} key={products.name} />
            )

            lastCategory = products.category;
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;