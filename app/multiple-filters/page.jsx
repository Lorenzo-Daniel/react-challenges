import React from "react";
import Description from "../Description";
import { description } from "./data/descriptionData";
import MultipleFilters from "./MultipleFilters";

function MultipleFiltersPage() {
  return (
    <div className="flex">
      <div className="w-lg">
        <Description data={description} />
      </div>
      <div className="flex justify-center items-center w-dvw main-height">
        <MultipleFilters />
      </div>
    </div>
  );
}

export default MultipleFiltersPage;
