import { useState } from "react";
import Images from "./components/Images";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateCats = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=3"
      );
      const data = await res.json();

      const urls = data.map((cat) => cat.url);

      setImages(urls);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p className="text-4xl font-extrabold text-center mt-7 text-heading mb-5">
        🐈 Cat Generator
      </p>

      <Images images={images} />

      <Button onClick={generateCats} isLoading={isLoading} />
    </>
  );
}

export default App;
