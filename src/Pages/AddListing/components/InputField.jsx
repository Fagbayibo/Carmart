import {Input} from "@/components/ui/input";
import PropTypes from "prop-types";

const InputField = ({item, handleInputChange}) => {
  return (
    <div>
      <Input
        name={item?.name}
        required={item?.required}
        type={item?.fieldType}
        onChange={(e) => handleInputChange(item.name , e.target.value)}
      />
    </div>
  );
};

InputField.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    fieldType: PropTypes.string
  }).isRequired,

  handleInputChange: PropTypes.func.isRequired,
};

export default InputField;
