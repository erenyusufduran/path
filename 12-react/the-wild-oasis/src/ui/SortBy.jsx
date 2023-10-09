/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import Select from './Select';

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';
  
  const handleChange = (e) => {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  };

  return <Select type="white" value={sortBy} options={options} onChange={handleChange} />;
};

export default SortBy;
