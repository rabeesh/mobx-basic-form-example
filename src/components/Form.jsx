import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";


@observer
class Form extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          Name:
          <input
            type="text"
            value={store.name}
            onChange={ (e) => store.handleChange('name', e.target.value) }
          />
          { store.errors.name }
          <br />

          Email:
          <input
            type="text"
            value={store.email}
            onChange={ (e) => store.handleChange('email', e.target.value) }
          />
          { store.errors.email }
          <br />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

  @action
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.store.handleFormSubmit();
  };

}

export default Form;
