function Button({ children, onClick }) {
  return (
    <button
      className="font-medium border rounded-full bg-pink-400 px-3 py-2 hover:bg-pink-500 font-montserrat focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-pink-400 focus:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
