import React from "react";

const ListCounter = ({ count, total }) => (
  <p className="dg_service_counter">{`Showing ${count} of ${total} services`}</p>
);

export default ListCounter;
