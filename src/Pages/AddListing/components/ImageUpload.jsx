import {XCircleIcon} from "@heroicons/react/20/solid";
import {storage} from "../../../../configs/Firebase/firebase.config";
import {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import PropTypes from 'prop-types';

const ImageUpload = ({triggerUploadImages}) => {
  const [selectedFileList, setSelectedFileList] = useState([]);

useEffect(()=> {
if(triggerUploadImages){
    UploadImageToServer();
}
}, [ triggerUploadImages])


/**
 * This function is triggered when a user selects files (like images or documents) to upload.
 * @param {Event} e - The event that occurs when files are selected.
 */
const onFileSelected = (e) => {
  const files = e.target.files;   // e.target.files is a list of all the files the user has selected.
  for (let i = 0; i < files?.length; i++) {   // Loop through each file in the list
    const file = files[i];     // Get the current file in the list
    setSelectedFileList((prev) => [...prev, file]);  // Add this file to the list of selected files, keeping any files that were already selected
  }
};



  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };


  const UploadImageToServer = () => {
    selectedFileList.forEach((file) => {
      {
        const fileName = Date.now() + ".jpeg";
        const storageRef = ref(storage, "carmart/" + fileName);
        const metaData = {
          ContentType: "image/jpeg",
        };
        uploadBytes(storageRef, file, metaData).then((snapshot) => console.log("Uploaded File Successfully")).then(resp => {
            getDownloadURL(storageRef).then(async(downloadUrl) => {
                console.log(downloadUrl);
                
            })
        });
      }
    })
  };
  return (
    <div>
      <h2 className="font-semibold text-xl font-poppins mb-5">Upload Images</h2>
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((image, index) => (
          <div key={index}>
            <XCircleIcon
              className="text-red-500 bg-white rounded-full size-4 cursor-pointer absolute m-2"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              alt="Car Image"
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-logoBlue p-10 bg-blue-100 cursor-pointer hover:shadow-md">
            <h2 className="text-2xl text-center">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          className="opacity-0"
          onChange={onFileSelected}
        />
      </div>

    </div>
  );
};

ImageUpload.propTypes = {
  triggerUploadImages: PropTypes.bool.isRequired,
}
export default ImageUpload;
