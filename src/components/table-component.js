import React, { Component } from "react";
const TableComponent = (props) => {
  return (
    <div>
      <div className="candidate-css">Candidates</div>
      <div className="table-component-input-row">
        <div>
          <input
            type="checkbox"
            id="genderMale"
            name="genderMale"
            value="Male"
            onClick={(e) => props.checkBoxClicked("Male", e)}
          />
          <label for="genderMale"> Male</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="genderFemale"
            name="genderFemale"
            onClick={(e) => props.checkBoxClicked("Female", e)}
          />
          <label for="genderFemale"> Female </label>
        </div>

        <div>
          <input
            placeholder="Whom are you looking for? "
            className="search-component"
            onChange={(e) => props.search(e)}
          />
        </div>
      </div>
      <div>
        <table id="dataTable">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {props.data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default TableComponent;
