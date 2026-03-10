function Button({ onClick, isLoading }) {
  return (
    <div className="flex flex-row justify-center mb-3 mt-7">
      <button
        onClick={onClick}
        disabled={isLoading}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        {isLoading ? "Loading..." : "Generate"}
      </button>
    </div>
  );
}

export default Button;
