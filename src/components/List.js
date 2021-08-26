import React from "react";
import ListItem from "./ListItem";
class List extends React.Component {
  render() {
    return (
      <ul className="border border-dark rounded my-4 p-5 bg-light">
        {!this.props.tasks[0] && <div className="h2">No task do to</div>}
        {this.props.tasks.map((task) => (
          <ListItem
            onClick={this.props.onClick}
            task={task}
            editTask={this.props.editTask}
          ></ListItem>
        ))}
      </ul>
    );
  }
}
export default List;
