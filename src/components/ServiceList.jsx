import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "../components/FilterList";
import React, { useState ,useEffect} from "react";
import ServiceIconLink from "../components/ServiceIconLink";
import useServices from "../hooks/useServices";
import CheckBox from "./CheckBox";

const ServiceList = () => {
  const { hasError, serviceItems = [], isLoading } = useServices();
  const [isChecked, setChecked] = useState(0);
  const [test ,setTest]=useState([]);

  let invalidEntries = 0
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
  }
  
  function filterByID(item) {
    if (item.rank === 1) {
      return true
    } 
    invalidEntries++
    return false;
  }

const onHandleChange=(event)=>{

setChecked(isChecked ? 0 : 1)
console.log(isChecked);
let arrByID = serviceItems.filter(filterByID);
console.log(arrByID);
setTest(arrByID)

console.log('Number of Invalid Entries = ', test)
};
  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of Baltimore County services. Please try
          again in a couple of minutes.
        </p>
      </Alert>
    );
  }

  return (
    <React.Fragment>
     
      {isLoading ? (
        <p>Loading Baltimore County services...</p>
      ) : (
        <div> 
        <CheckBox onChange={onHandleChange} />   
        {/* <CheckBox onChange={() => setChecked(isChecked ? 0 : 1)} />       */}
          <div className="row">
            <FilterList
              items={serviceItems}
              renderItem={props => (
                <div
                  key={props.name.replace(/\s/, "-")}
                  className="d-flex col-lg-3 col-md-6 col-sm-6"
                >
                  <ServiceIconLink {...props} />
                </div>
              )}
            />
          </div>
        </div> 
      )}
    </React.Fragment>
  );
};

export default ServiceList;
