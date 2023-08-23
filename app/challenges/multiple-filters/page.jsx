import React from "react";
import Description from "../Description";
import { description } from "./data/descriptionData";
import MultipleFilters from "./MultipleFilters";

function MultipleFiltersPage() {
  return (
    <div  className="layout-container">
      <Description data={description} />
      <MultipleFilters/>
    </div>
  );
}

export default MultipleFiltersPage;
