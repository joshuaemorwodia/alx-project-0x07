// pages/index.tsx
import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);

    // Simulate image generation (mock)
    setTimeout(() => {
      const fakeImage = {
        imageUrl: "https://placekitten.com/400/300", // replace with real URL later
        prompt,
      };

      setGeneratedImages([fakeImage, ...generatedImages]);
      setImageUrl(fakeImage.imageUrl);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        {generatedImages.length > 0 &&
          generatedImages.map((img, index) => (
            <ImageCard
              key={index}
              imageUrl={img.imageUrl}
              prompt={img.prompt}
              action={(imgPath) => setImageUrl(imgPath)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
