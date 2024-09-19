import React from 'react';
import InputButton from './InputButton';

//-------------------------------------

const Card = ({ item, updateProd, deleteProd, setIsLoading, setData }) => {
  return (
    <div className="border rounded shadow-2xl p-3 flex flex-col jusrify-between">
      <div className="flex-1 flex items-center mb-2">
        <img src={item.image} alt="" />
      </div>
      <div className="flex flex-col text-sm mb-2">
        <span className="">{item.category} </span>
        <span className="">$ {item.price} </span>
      </div>
      <div className="flex justify-start gap-2">
        <InputButton value="update" isButton handleOnclick={()=>updateProd(item.id,setIsLoading,setData)} />
        <InputButton value="delete" isButton handleOnclick={()=>deleteProd(item.id,setIsLoading,setData)} />
      </div>
    </div>
  );
};

export default Card;
