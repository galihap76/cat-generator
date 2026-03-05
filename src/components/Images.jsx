function Images({ images }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center">
      {images.slice(0, 3).map((img, index) => (
        <img
          key={index}
          className="h-75 md:w-100 border border-gray-700 rounded-lg"
          src={img}
          alt="cat"
        />
      ))}
    </div>
  );
}

export default Images;
