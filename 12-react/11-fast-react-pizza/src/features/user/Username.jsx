import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

const Username = () => {
  const username = useSelector(getUser);
  if (!username) return null;

  return <div className="text-sm font-semibold hidden md:block">{username}</div>;
};

export default Username;
