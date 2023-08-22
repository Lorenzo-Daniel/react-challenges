import React from 'react'
import Description from "../Description";
import { description } from "./data/descriptionData";
import UseOutsideClick from './UseOutsideClick';
function useOutsideClickPage() {
  
  return (
    <div  className="layout-container">
      <Description data={description} />
      <UseOutsideClick/>
    </div>
  );
}

export default useOutsideClickPage
