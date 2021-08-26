import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskDescription: "",
      taskDate: "",
      taskType: "",
    };
  }
  handleTaskNameChange(e) {
    this.setState({ taskName: e.target.value });
  }
  handleTaskDescriptionChange(e) {
    this.setState({ taskDescription: e.target.value });
  }
  handleTaskDateChange(e) {
    this.setState({ taskDate: e.target.value });
  }
  handleTaskTypeChange(e) {
    this.setState({ taskType: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(
      this.state.taskName,
      this.state.taskDescription,
      this.state.taskDate,
      this.state.taskType,
      Math.random()
    );
  }
  render() {
    return (
      <form
        className="d-flex border border-dark rounded p-4 bg-light justify-content-center"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="col-8 justify-content-center">
          <input
            className="col-5 m-2 p-2"
            placeholder="Task Name"
            onChange={this.handleTaskNameChange.bind(this)}
          ></input>
          <div className="">
            <label htmlFor="task-type" className="row m-2 h5">
              Task Status:
            </label>
            <select
              onChange={this.handleTaskTypeChange.bind(this)}
              className="col-5 p-2 row m-2"
              name="Task Type"
              id="task-type"
            >
              <option value="To do">To Do</option>
              <option value="Doing">Doing</option>
              <option value="None">None</option>
            </select>
          </div>
          <input
            className="row m-2 p-2"
            type="date"
            onChange={this.handleTaskDateChange.bind(this)}
          ></input>
          <textarea
            className="row m-2 p-2"
            type="text"
            rows="3"
            cols="50"
            placeholder="Task Description"
            onChange={this.handleTaskDescriptionChange.bind(this)}
          ></textarea>
          <button className=" row btn btn-primary mx-2">Add Task</button>
        </div>
      </form>
    );
  }
}

export default Form;
