import { Textarea } from '@/components/ui/textarea'
import PropTypes from'prop-types';

const TextareaField = ({item, handleInputChange}) => {
  return (
    <div>
      <Textarea item={item} onChange={(e)=>handleInputChange(item.name, e.target.value)} />
    </div>
  )
}

TextareaField.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,

  handleInputChange: PropTypes.func.isRequired
}

export default TextareaField
