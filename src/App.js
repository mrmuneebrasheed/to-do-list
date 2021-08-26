import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }
  addTask(taskName, taskDescription, taskDate, taskType, id) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: id,
          taskName: taskName,
          taskDescription: taskDescription,
          taskDate: taskDate,
          taskType: taskType,
        },
      ],
    });
  }
  deleteTask(e) {
    // const toDelete = this.state.tasks.find((task) => +task.id === +e.target.id);
    // const index = this.state.tasks.indexOf(toDelete);
    const filteredTasks = this.state.tasks.filter(
      (task) => +task.id !== +e.target.id
    );
    this.setState({ tasks: filteredTasks });
  }
  editTask(taskName, taskDescription, taskType, id) {
    // console.log(this.state.tasks);
    const toEdit = this.state.tasks.find((task) => +task.id === +id);
    const index = this.state.tasks.indexOf(toEdit);
    console.log(index);
    toEdit.taskName = taskName;
    toEdit.taskDescription = taskDescription;
    toEdit.taskType = taskType;
    this.state.tasks.splice(index, 1, toEdit);
    this.setState({ tasks: this.state.tasks });
  }
  render() {
    // console.log(this.state.tasks);
    return (
      <div className="container p-4">
        <div className="h1 p-3 text-center text-dark bg-info border border-dark rounded">
          To do list
        </div>
        <Form
          addTask={this.addTask.bind(this)}
          onClick={this.deleteTask.bind(this)}
        ></Form>
        <List
          editTask={this.editTask.bind(this)}
          modifyTask={this.editTask.bind(this)}
          onClick={this.deleteTask.bind(this)}
          tasks={this.state.tasks}
        ></List>
      </div>
    );
  }
}

export default App;
