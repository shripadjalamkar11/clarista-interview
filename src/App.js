import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./components/table-component";
import AddData from "./components/add-data";
import React, { useState } from "react";
import { render } from "@testing-library/react";
import { renderIntoDocument } from "react-dom/test-utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: [
        {
          id: 1,
          first_name: "Jeanette",
          last_name: "Penddreth",
          email: "jpenddreth0@census.gov",
          gender: "Female",
        },
        {
          id: 2,
          first_name: "Giavani",
          last_name: "Frediani",
          email: "gfrediani1@senate.gov",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Noell",
          last_name: "Bea",
          email: "nbea2@imageshack.us",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Willard",
          last_name: "Valek",
          email: "wvalek3@vk.com",
          gender: "Male",
        },
      ],
      original: [
        {
          id: 1,
          first_name: "Jeanette",
          last_name: "Penddreth",
          email: "jpenddreth0@census.gov",
          gender: "Female",
        },
        {
          id: 2,
          first_name: "Giavani",
          last_name: "Frediani",
          email: "gfrediani1@senate.gov",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Noell",
          last_name: "Bea",
          email: "nbea2@imageshack.us",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Willard",
          last_name: "Valek",
          email: "wvalek3@vk.com",
          gender: "Male",
        },
      ],
    };
  }
  checkBoxClicked = (type, value) => {
    let that = this;
    if (value.target.checked === false) {
      this.setState({ jsonData: that.state.original });
      return;
    }
    let tempArray = [];
    if (type === "Male") {
      this.state.original.map((element) => {
        if (element.gender === "Male") {
          tempArray.push(element);
        }
      });
    } else if (type === "Female") {
      this.state.original.map((element) => {
        if (element.gender === "Female") {
          tempArray.push(element);
        }
      });
    }
    this.setState({ jsonData: tempArray });
  };
  search = (parameter) => {
    let tempArray = [];
    this.state.original.map((element) => {
      if (element.id.toString().includes(parameter.target.value)) {
        tempArray.push(element);
      } else if (element.first_name.includes(parameter.target.value)) {
        tempArray.push(element);
      } else if (element.last_name.includes(parameter.target.value)) {
        tempArray.push(element);
      } else if (element.email.includes(parameter.target.value)) {
        tempArray.push(element);
      } else if (element.gender.includes(parameter.target.value)) {
        tempArray.push(element);
      }
    });

    this.setState({ jsonData: tempArray });
  };
  insertUserData = (e) => {
    e.id = this.state.original.length + 1;
    let originalArray = this.state.original;
    originalArray.push(e);
    this.setState({ original: originalArray });
    this.setState({ jsonData: originalArray });
  };
  render() {
    return (
      <div className="App">
        <TableComponent
          data={this.state.jsonData}
          checkBoxClicked={this.checkBoxClicked}
          search={this.search}
        />
        <AddData insertUserData={this.insertUserData} />
      </div>
    );
  }
}

export default App;
