import React from "react";

const ListCounter = ({ count, total }) => (
  <div>
    <p className="dg_service_counter">{`Showing ${count} of ${total} services`}</p>
  </div>
);

export default ListCounter;
