import React from "react";

const CheckBox = props => {
  const { onChange } = props;

  return (
  
    <div>
   <input
        name="popularity"
        type="checkbox"
        onChange={onChange}
      /><label>POPULARITY </label>
     
  
  </div>

 
   
 
  );
};

export default CheckBox;
