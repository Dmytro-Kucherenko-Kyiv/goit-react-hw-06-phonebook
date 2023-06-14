import { Input, Label, LabelWrap } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilter } from 'components/redux/actions';
import { getFilter } from "../redux/selectors";
import { useSelector } from "react-redux";

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (

    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type='text'
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </LabelWrap>
  )
}