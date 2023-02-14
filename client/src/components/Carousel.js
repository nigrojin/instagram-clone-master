import { useState } from "react";

export default function Carousel({ images }) {

  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <div className="overflow-x-hidden relative">
      <ul
        className="flex transition"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map(image => (
          <li key={image} className="w-full h-96 shrink-0">
            <img
              src={`${process.env.REACT_APP_SERVER}/files/articles/${image}`}
              className="w-full h-full object-cover"
              alt={image}
            />
          </li>
        ))}
      </ul>

      <div className="absolute top-0 left-0 h-full flex items-center">
        <button
          className={"px-2 bg-white " + (index === 0 && "hidden")}
          onClick={() => setIndex(index - 1)}
        >
          &#10094;
        </button>
      </div>

      <div className="absolute top-0 right-0 h-full flex items-center">
        <button
          className={"px-2 bg-white " + (index === images.length - 1 && "hidden")}
          onClick={() => setIndex(index + 1)}
        >
          &#10095;
        </button>
      </div>

      <ul className="absolute bottom-0 w-full py-2 flex justify-center gap-1 ">
        {images.map((image, dot) => (
          <li
            key={dot}
            className={"w-2 h-2 rounded-full " + (dot === index ? "bg-white" : "bg-white/[0.5]")}
          >
          </li>
        ))}
      </ul>
    </div>
  )
} 