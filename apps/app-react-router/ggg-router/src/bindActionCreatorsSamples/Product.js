// https://stackoverflow.com/questions/41754489/when-would-bindactioncreators-be-used-in-react-redux
import React from "react";
import * as ProductActions from "./ProductActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      saving: false,
      isEditing: false
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.props.addProduct}>Add a product</button>
      </div>
    );
  }
}

// container part
function mapStateToProps(state, ownProps) {
  console.log("Product.mapStateToProps");
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Product.mapDispatchToProps");
  return bindActionCreators(
    {
      ...ProductActions
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
