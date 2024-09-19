import React from 'react';

const Mosaico = ({ images, setCurrentURL, setShowModal }) => {
  return (
    <div className="absolute p-2 flex justify-center right-0 left-0 bottom-8 bg-black bg-opacity-80 z-40 max-w-xl m-auto ">
      <div className=" h-28  flex justify-between gap-2 ">
        {images.map((item, i) => {
          return (
            <div
              key={i}
              className="hover:border hover:border-2 hover:border-blue-500 rounded "
            >
              <img
                src={item}
                className="w-full h-full object-cover"
                alt=""
                onClick={() => {
                  setCurrentURL(item)
                  setShowModal(true)
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mosaico;
