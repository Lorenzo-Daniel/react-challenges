import React, { useRef, useEffect } from 'react';
import Mosaico from './Mosaico';
import { images } from './data';

function Modal({ img, setShowModal, setCurrentURL }) {
  const ref = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, []);

  return (
    <div className="w-full h-full absolute bg-black bg-opacity-75 top-0 flex justify-center items-center">
      <div
        ref={ref}
        className="max-w-[300px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      
      >
        <img src={img} alt=""    onClick={()=>setShowModal(false)}/>
        <Mosaico images={images} setCurrentURL={setCurrentURL} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Modal;
