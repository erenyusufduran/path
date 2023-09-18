import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    'tracking-wide rounded-full uppercase font-semibold inline-block transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' focus:ring-yellow-300 text-stone-800 bg-yellow-400 hover:bg-yellow-300 px-4 py-3 md:px-6 md:py-4 text-sm',
    small:
      base +
      ' focus:ring-yellow-300 text-stone-800 bg-yellow-400 hover:bg-yellow-300 py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round:
      base +
      ' focus:ring-yellow-300 text-stone-800 bg-yellow-400 hover:bg-yellow-300 py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
    secondary:
      base +
      ' hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 text-sm',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;