import React from "react";

const ListCounter = props => {
  const { count, total } = props;

  return (
    <div className="dg_service_counter">
      <p>{`Showing ${count} of ${total} services`}</p>
    </div>
  );
};

export default ListCounter;
