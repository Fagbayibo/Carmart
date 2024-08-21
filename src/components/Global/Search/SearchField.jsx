import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import PropTypes from 'prop-types';
import { AiFillDollarCircle } from "react-icons/ai";

const SearchField = ({triggerClass, placeholder, options, iconClass}) => {
  return (
    <div>
      <Select>
        <SelectTrigger className={triggerClass}>
        <AiFillDollarCircle className={iconClass} />
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
         {options ? options.map((option) => (
             <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
         )) : null}
        </SelectContent>
      </Select>
    </div>
  );
};

SearchField.propTypes = {
    placeholder: PropTypes.string.isRequired,  
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,   
        label: PropTypes.string.isRequired,  
      })
    ).isRequired,  
    triggerClass: PropTypes.string,  
    iconClass: PropTypes.string,
  };
  
SearchField.defaultProps = {
    triggerClass: 'w-[180px]',  
  };

export default SearchField;
