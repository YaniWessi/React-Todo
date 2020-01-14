import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChange = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addThing(this.state.todoText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="thing"
          value={this.state.todoText}
          onChange={this.handleChange}
        />
        <button>add</button>
      </form>
    );
  }
}

export default TodoForm;
