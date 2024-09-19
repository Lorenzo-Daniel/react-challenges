"use client";
"use client";
import React, { useEffect, useState } from "react";
import InputButton from "./components/InputButton";
import BounceLoader from "react-spinners/BounceLoader";
import Card from "./components/Card";
import { description } from "./descriptionData";
import Description from "../Description";

import {
  getAllResults,
  updateProd,
  deleteProd,
  addProd,
} from "./crudFunctions";
import { categoriesList } from "./categories";
//-----------------------------------------------

const Crud = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(categoriesList);
  console.log(data);
  useEffect(() => {
    getAllResults("allProducts", setIsLoading, setCategories, setData);
  }, []);

  return (
    <div className="flex main-height">
      <div className="w-lg">
        <Description data={description} />
      </div>
      <div className="flex justify-center w-dvw  ">
        <div className="max-w-7xl flex flex-col mx-auto text-gray-500">
          <div className="flex justify-between pr-5">
            <div className="flex flex-col items-start p-5 divide-y divide-gray-200 pt-10">
              <span className="text-slate-700 mb-1">Categories: </span>
              {categories.map((item, i) => {
                return (
                  <InputButton
                    key={i}
                    value={item.name}
                    handleOnclick={() =>
                      item.handleOnclick(setIsLoading, setCategories, setData)
                    }
                    isSelected={item.isSelected}
                  />
                );
              })}
            </div>

            <div className="flex items-end mb-5 ">
              <InputButton
                value="create"
                handleOnclick={() => addProd(setIsLoading, data, setData)}
                isButton={true}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center my-5">
              <BounceLoader />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-5 mt-5 overflow-y-scroll pb-20">
              {data.map((item, i) => {
                return (
                  <Card
                    key={i}
                    item={item}
                    updateProd={updateProd}
                    deleteProd={deleteProd}
                    setIsLoading={setIsLoading}
                    setData={setData}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Crud;