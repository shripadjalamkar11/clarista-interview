import React, { Component } from "react";

const AddData = (props) => {
  let tempUserData = {
    gender: "",
    first_name: "",
    last_name: "",
    email: "",
    id: null,
  };
  return (
    <div>
      <div className="add-new-candidate">Add New Candidate</div>
      <div className="radio-buttons">
        <input
          className="search-component"
          type="text"
          placeholder="First Name"
          //   onClick={(e) => (tempUserData.first_name = e.target.value)}
          onChange={(e) => (tempUserData.first_name = e.target.value)}
        />

        <input
          placeholder="Last Name"
          className="search-component"
          type="text"
          onChange={(e) => (tempUserData.last_name = e.target.value)}
        />
      </div>
      <div className="table-component-input-row">
        <input
          placeholder="Email"
          className="search-component"
          type="email"
          onChange={(e) => (tempUserData.email = e.target.value)}
        />
      </div>
      <div className="table-component-radio-row">
        <div>
          <input
            type="radio"
            id="genderMale"
            name="genderMale"
            value="Male"
            onClick={(e) => (tempUserData.gender = "Male")}
          />
          <label for="genderMale">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="genderMale"
            name="genderMale"
            value="Female"
            onClick={(e) => (tempUserData.gender = "Female")}
          />
          <label for="genderMale">Female</label>
        </div>
        <button
          class="button button2"
          onClick={(e) => props.insertUserData(tempUserData)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default AddData;
