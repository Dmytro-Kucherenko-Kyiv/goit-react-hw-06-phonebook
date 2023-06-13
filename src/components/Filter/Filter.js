import { Input, Label, LabelWrap } from "./Filter.styled";

import { contactsFilter, filterValue } from 'components/Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  return (

    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type='text'
          name='filter'
          value={filter}
          onChange={e => dispatch(contactsFilter(e.target.value))}
        />
      </Label>
    </LabelWrap>
  )
}