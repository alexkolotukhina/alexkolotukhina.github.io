import React, { useState } from "react";

const NewItem = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input
            className="form-control mb-3"
            type="text"
            onChange={handleChange}
            value={value}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
};

export default React.memo(NewItem);
