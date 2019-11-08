import React, { useState } from "react";

export default function NewItemButton(props) {
  const [imgFileUrl, setImgFileUrl] = useState(window.uploadItemIconURL);

  function handleFile(e) {
    setImgFileUrl(URL.createObjectURL(e.target.files[0])); // from Egor Egorov @650egor on Medium
    props.returnFileToParent(e.target.files, props.id);
  }

  return (
    <div className='item-photo-upload-button'>
      <div className='item-photo-holder'>
        <img
          className='upload-photo'
          src={imgFileUrl}
          alt='item-image-thumbnail'
        />
        <input type='file' onChange={handleFile} />
      </div>
    </div>
  );
}
