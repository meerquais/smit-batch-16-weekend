const cloudName = "diim0ngjy";
const uploadPreset = "uploadImg";



const uploadBtn = document.getElementById("uploadBtn");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");



uploadBtn.addEventListener("click" , async ()=>{


  const file = imageInput.files[0];

  if(!file){
    Swal.fire("No File", "Select an image first" , "warning");
    return
  }


    const formData = new FormData();

    formData.append("file" , file);

    formData.append("upload_preset" , uploadPreset);

    try {

      Swal.fire({
        title:"Uploading....",
        allowOutsideClick: false,
        didOpen: ()=> Swal.showLoading()
      });


      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload` , {
        method: "POST",
        body: formData
      });

      const data = await res.json()

      console.log(data);
      

      preview.src = data.secure_url;

      Swal.fire("Uploaded" , "Image Uploaded Successfully", "Success");

      console.log("Image URL: ", data.secure_url);
    } catch (error) {
      Swal.fire("Error" , "Upload failed!" , "error")
      
    }




})