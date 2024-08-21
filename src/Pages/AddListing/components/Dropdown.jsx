import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PropTypes from "prop-types";

const Dropdown = ({ item, handleInputChange }) => {
  return (
    <div>
      <Select onValueChange={(value) => handleInputChange(item.name, value)} required={item.required}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
          {item?.options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

Dropdown.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,       
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool 
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Dropdown;
