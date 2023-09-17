import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { getUser } from '../features/user/userSlice';

const Homes = () => {
  const username = useSelector(getUser);

  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-center text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
};

export default Homes;
