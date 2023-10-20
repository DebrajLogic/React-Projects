/* eslint-disable react/prop-types */
function Button({ label, handleClick }) {
    return (
      <button
        onClick={handleClick}
        className="bg-green-500 rounded-lg px-3 py-1 hover:bg-green-600 text-white"
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  