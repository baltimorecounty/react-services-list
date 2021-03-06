import React from "react";

const Styles = {
  marginTop: "30px",
};

const NoResultsMessage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const filter = urlParams.get("filter");

  console.log(urlParams);

  return (
    <div class="dg_alert status warning" style={Styles}>
      <span class="dg_alert__status">Services Help</span>
      <p>
        It looks like the Service you're looking for isn't currently listed. Try
        one of the following options:
      </p>
      <ul>
        <li>
          Search for a{" "}
          <a
            href={`https://www.baltimorecountymd.gov/search/results.html?q=${filter}`}
          >
            related page
          </a>
        </li>
        <li>
          Report a problem or request a service by dialing 311 or use the{" "}
          <a href="https://www.baltimorecountymd.gov/report-problem#/">
            online reporter tool
          </a>
        </li>
        <li>
          Contact a Baltimore County{" "}
          <a href=" https://www.baltimorecountymd.gov/contact/department">
            Department
          </a>
        </li>
      </ul>
    </div>
  );
};

export { NoResultsMessage };
