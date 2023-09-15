import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to }) => {
  const className =
    'tracking-wide rounded-full bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
