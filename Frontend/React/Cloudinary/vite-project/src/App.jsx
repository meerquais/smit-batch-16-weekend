import React, { useState } from 'react'

function App() {

  const [image, setImage] = useState("");

  const [uploading , setUploading] = useState(false);

  const uploadImage = async (file)=>{

    if(!file) return;


    const data = new FormData();
    data.append("file" , file);
    data.append("upload_preset" , "react_upload");

    setUploading(true);


    try{
      const res = await fetch("https://api.cloudinary.com/v1_1/dkkspfcko/image/upload" , {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      setImage(result.secure_url);
    }catch(error){
      console.error(error)
    }finally{
      setUploading(false)
    };
  }

  const styles = {
    container:{
      textAlign: "center",
      marginTop: "50px"
    },
    imageBox: {
      marginTop : "20px",
    },
    image: {
      width: "300px",
      borderRadius: "10px"
    }
  }





  return (
    <>
      <div style={styles.container}>
        <h2>Upload Image</h2>

        <input type="file" onChange={(e)=>{
          uploadImage(e.target.files[0])
        }} />

        {uploading && <p>Uploading....</p>}


        {image && (
          <div style={styles.imageBox}>
            <img src={image} alt="uploaded" style={styles.image} />
          </div>
        )}




      </div>
    
    
    
    </>
  )
}

export default App