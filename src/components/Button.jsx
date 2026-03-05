function Button({ onClick, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className="text-white mt-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      {isLoading ? "Loading..." : "Generate"}
    </button>
  );
}

export default Button;
