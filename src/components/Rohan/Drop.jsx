import React from "react";
const Dropdownlist = () => {
  return (
    <React.Fragment>
      <div className="containers">
        <form>
          <select className="options" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">
        
              Billing Software
            </option>
          </select>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Dropdownlist;
