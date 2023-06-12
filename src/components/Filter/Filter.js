/* import PropTypes from 'prop-types'; */
import { Input, Label, LabelWrap } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          autoComplete="off"
        />
      </Label>
    </LabelWrap>
  );
};


/* export const Filter = ({ value, onChange }) => {

  return (

    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type='text'
          value={value}
          onChange={onChange}
        />
      </Label>
    </LabelWrap>
  )
} */

/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
} */