import React from "react";

const ListCounter = props => {
  const { currentcount, totalcount } = props;

  return (
    <div className="dg_service_counter">
      <p>{`Showing ${currentcount} of ${totalcount} services`}</p>
    </div>
  );
};

export default ListCounter;
