'use client'
import React, { Fragment, useState } from 'react';
import Icon from './Icon';

const Folder = ({ folder, setFileName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const handleFileName = (name) => {
    setFileName(name);
  };

  const verifyExtension = (fileName) => {
    if (fileName.endsWith('.json')) {
      return 'json';
    } else if (fileName.endsWith('.js')) {
      return 'js';
    } else if (fileName.endsWith('.css')) {
      return 'css';
    } else if (fileName.endsWith('.html')) {
      return 'html';
    } else {
      if (isOpen) {
        return 'caretDown';
      } else {
        return 'caretRight';
      }
    }
  };
  return (
    <div className="ms-3 ">
      {folder.isFolder ? (
        <div
          className="flex hover:bg-[#181514] p-1 rounded cursor-pointer"
          onClick={() => toggleFolder(!isOpen)}
        >
          {!isOpen ? (
            <div className="flex ">
              <Icon name="caretRight" width="15" className="mr-1" />
              <Icon name="closedFolder" width="15" />
            </div>
          ) : (
            <div className="flex  ">
              <Icon name="caretDown" width="15" className="mr-1" />
              <Icon name="openFolder" width="15" className="" />
            </div>
          )}
          <span className="ms-1">{folder.name} </span>
        </div>
      ) : (
        <div
          className="flex hover:bg-[#181514] px-2  rounded cursor-pointer ms-4"
          onClick={() => handleFileName(folder.name)}
        >
          <Icon name={verifyExtension(folder.name)} width="15" className="" />
          <span className="ml-1">{folder.name} </span>
        </div>
      )}

      {folder.isFolder &&
        isOpen &&
        folder.children.map((child, i) => {
          return (
            <Fragment key={i}>
              <Folder folder={child} setFileName={setFileName} />
            </Fragment>
          );
        })}
    </div>
  );
};

const FolderStructure = ({ files, setFileName }) => {
  return (
    <div className="bg-[#211f23] p-2 text-white text-sm w-64 min-w-60 h-[500px] font-thin  flex ">
      <Folder folder={files} setFileName={setFileName} />
    </div>
  );
};

export default FolderStructure;