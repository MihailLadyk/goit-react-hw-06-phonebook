import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import * as filterActions from "../../redux/filter/filterActions";

class Filter extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Filter"
          type="input"
          onChange={(e) => this.props.onFilterChange(e.target.value)}
          className={styles.form__field}
        />
      </div>
    );
  }
  static propTypes = {
    Filter: PropTypes.func,
  };
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  onFilterChange: filterActions.changeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
