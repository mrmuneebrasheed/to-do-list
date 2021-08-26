import React from "react";
class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editTask: "",
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
  handleTaskTypeChange(e) {
    this.setState({ taskType: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.editTask(
      this.state.taskName,
      this.state.taskDescription,
      this.state.taskType,
      this.props.task.id
    );
    this.setState({ editTask: "" });
  }
  startEditTask() {
    this.setState({ editTask: this.props.id });
  }
  render() {
    return (
      <div className="border my-3 p-4 bg-white" key={this.props.task.id}>
        <div className="row">
          {this.state.editTask === "" ? (
            <span className="col-10 h2">Task: {this.props.task.taskName}</span>
          ) : (
            <input
              className="col-5 m-2 p-2"
              placeholder="Task Name"
              onChange={this.handleTaskNameChange.bind(this)}
            ></input>
          )}
          {this.state.editTask === "" ? (
            <span className="col h5">Status: {this.props.task.taskType}</span>
          ) : (
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
          )}
        </div>

        <div className="d-flex my-2">
          {this.state.editTask === "" ? (
            <span className="col-10 text-dark">
              <span className="h5 text-secondary">Description: </span>
              {this.props.task.taskDescription}
            </span>
          ) : (
            <textarea
              className="row m-2 p-2"
              type="text"
              rows="3"
              cols="50"
              placeholder="Task Description"
              onChange={this.handleTaskDescriptionChange.bind(this)}
            ></textarea>
          )}
          <span className="col h5 text-danger">
            Date: {this.props.task.taskDate}
          </span>
        </div>
        <button
          id={this.props.task.id}
          onClick={
            this.state.editTask === ""
              ? this.props.onClick
              : this.handleSubmit.bind(this)
          }
          className="btn btn-primary"
        >
          {this.state.editTask === "" ? "Delete Task" : "Validate"}
        </button>
        <button
          id={this.props.task.id}
          onClick={this.startEditTask.bind(this)}
          className="btn btn-primary mx-2"
        >
          Edit Task
        </button>
      </div>
    );
  }
}

export default ListItem;
