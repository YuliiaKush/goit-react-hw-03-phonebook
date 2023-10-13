import PropTypes from 'prop-types';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
      <FilterInput
        id="nameFilterInput"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};