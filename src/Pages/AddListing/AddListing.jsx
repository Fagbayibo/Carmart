import Header from "@/components/Home/Header";
import carDetails from "../../data/carDetails.json";
import InputField from "./components/InputField";
import {Separator} from "@/components/ui/separator";
import features from "../../data/features.json";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import Dropdown from "./components/Dropdown";
import TextareaField from "./components/TextareaField";
import {CarListing} from "./../../../configs/schema";
import {db} from "./../../../configs";
import IconField from "./components/IconField";
import ImageUpload from "./components/ImageUpload";

const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState(false);

  /**
   * Used to capture user input from Form
   * @param {*} name
   * @param {*} value
   */
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  /**
   * Used tto save  selected features list
   * @param {*} name
   * @param {*} value
   */

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({...prevData, [name]: value}));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Adding data to the database
    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
      }).returning({id:CarListing.id});
      if (result) {
        console.log("Data added successfully");
        setTriggerUploadImages(result[0]?.id)
      } else {
        console.log("Failed to add data");
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl font-poppins tracking-tight">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-8">
          {/* Car Details */}
          <div className="mb-5">
            <h2 className="font-semibold text-xl font-poppins mb-5">Car details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className=" text-[15px] flex gap-2 mb-2">
                    <IconField icon={item?.icon} />
                    {item?.label} {item?.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <Dropdown
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextareaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Feattures List */}
          <div className="mt-5">
            <h2 className="font-semibold text-xl font-poppins mb-5">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {features?.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center"
                >
                  <Checkbox
                    onCheckedChange={(value) => handleFeatureChange(feature.name, value)}
                    className="data-[state=checked]:bg-logoBlue"
                    id="terms"
                  />{" "}
                  <h2>{feature.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Car Images */}
          <Separator className="my-6" />
          <ImageUpload triggerUploadImages={triggerUploadImages}/>
          <Separator className="my-6" />
          <div className="flex justify-end">
            <Button
              onClick={(e) => onSubmit(e)}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddListing;
