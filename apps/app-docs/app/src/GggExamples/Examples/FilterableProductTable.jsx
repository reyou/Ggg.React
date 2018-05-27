// https://facebook.github.io/react/docs/thinking-in-react.html
//=============================================================================
// Remember: React is all about one-way data flow down the component hierarchy.
//=============================================================================
// Let's go through each one and figure out which one is state.
// Simply ask three questions about each piece of data:
// 1- Is it passed in from a parent via props? If so, it probably isn't state.
// 2- Does it remain unchanged over time? If so, it probably isn't state.
// 3- Can you compute it based on any other state or props in your component?
// If so, it isn't state.
//=============================================================================
import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
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
