import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterSearch = e => {
    dispatch(filter(e.target.value));
  };
  return (
    <>
      <label className={css.labelFilter}>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={filterSearch}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
