'use client'
import React, { useState } from 'react';
import Description from '../Description';
import Container from './components/ContainerList';
import Controls from './components/Controls';
import { list } from './components/data';
import {description} from './components/descriptionData';

const TransferList = () => {
  const [containerRight, setContainerRight] = useState([]);
  const [containerLeft, setContainerLeft] = useState(list);

 
  return (
    <div className="flex">
      <div className="w-lg">
        <Description data={description} />
      </div>
      <div className="flex justify-center items-center w-dvw main-height">
      <Container
          currentList={containerLeft}
          setCuerrentList={setContainerLeft}
        />
        <Controls
          containerRight={containerRight}
          containerLeft={containerLeft}
          setContainerRight={setContainerRight}
          setContainerLeft={setContainerLeft}
        />
        <Container
          currentList={containerRight}
          setCuerrentList={setContainerRight}
        />
      </div>

    </div>

      
  );
};

export default TransferList;