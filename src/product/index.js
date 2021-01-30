import React from 'react';
import ProductTable from "./productTable/ProductTable";
import SearchBar from "./productTable/SearchBar";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText : '',
            inStockOnly : false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText){
        this.setState({
            filterText : filterText
        });
    }
    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly : inStockOnly
        })
    }
    render() {
        return(
            <div>
                <h1>Products Table</h1>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                    inStockOnly={this.state.inStockOnly}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;