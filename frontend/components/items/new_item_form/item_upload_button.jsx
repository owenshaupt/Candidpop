import React, { useState, useEffect } from "react";

export default function NewItemButton(props) {
  const [imgFile, setImgFile] = useState();
  const [imgFileUrl, setImgFileUrl] = useState(window.uploadItemIconURL);

  function handleFile(e) {
    setImgFile(e.currentTarget.files);
    setImgFileUrl(URL.createObjectURL(e.target.files[0])); // from Egor Egorov @650egor on Medium
    props.returnFileToParent(imgFile, props.id);
  }

  return (
    <div className='item-photo-upload-button'>
      <div className='item-photo-holder'>
        <img src={imgFileUrl} alt='item-image-thumbnail' />
        <input type='file' onChange={handleFile} />
      </div>
    </div>
  );
}
