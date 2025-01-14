import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "../components/photos/photos";

// Dynamically import all images in the _fairImages folder
const images = import.meta.glob("/assets/image/*.{webp,png,jpg,jpeg,svg}", {
  eager: true,
});

const arr = Object.values(images).map((image, index) => ({
  src: image.default,
  width: 1920,
  height: 1280,
}));

const Gallery = () => {
  const [layout, setLayout] = useState("rows");
  const [index, setIndex] = useState(-1);

  console.log("images", arr);
  //   const handleLayout = () => {
  //     layout === "rows" ? setLayout("columns") : setLayout("rows");
  //   };
  return (
    <>
      <div className="px-5 pt-20 pb-5">
        {/* <button
        className={`text-white px-2 flex w-full justify-end py-2 mb-5 rounded-md capitalize cursor-pointer ${
          layout === "rows" ? "bg-[#5cb85c]" : "bg-primaryGreenDark"
        }`}
        onClick={handleLayout}
      >
        {layout}
      </button> */}
        <PhotoAlbum
          photos={arr}
          layout="rows"
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={arr}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </>
  );
};

export default Gallery;
