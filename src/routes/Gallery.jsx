import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getLanguage, useLanguage } from "@/LanguageContext";
import { Helmet } from "react-helmet-async";
import helmetData from "@/data/helmetData";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Dynamically import all images in the _fairImages folder
const images = import.meta.glob("/assets/image/*.{webp,png,jpg,jpeg,svg}", {
  // as: "url",
  query: "?url",
  import: "default",
  eager: true,
});

const Gallery = () => {
  const meta = getLanguage(helmetData);
  const [index, setIndex] = useState(-1);

  const photos = Object.values(images).map((image, key) => ({
    key: key,
    src: image,
    width: 1920,
    height: 1280,
    title: image,
  }));
  photos.map((image, key) => {
    // const start = image.src.indexOf("?t=");
    // const path = image.src.substring(0, start);
    // console.log("image", path);
    if (image.src.includes("_port")) {
      image.width = 600;
      image.height = 800;
      image.title = image.src.replace("_port", "");
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleGallery}</title>
        <meta name="description" content={meta.descGallery} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />
      </Helmet>
      <div className="px-4 pb-5 pt-28">
        {/* <button
          className={`text-white px-2 flex w-full justify-end py-2 mb-5  capitalize cursor-pointer bg-primaryGreen`}
          onClick={handleLayout}
        >
          Swtich display to {layout === "rows" ? "Columns" : "Rows"}
        </button> */}
        <PhotoAlbum
          index={index}
          photos={photos}
          layout="columns"
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails]}
        />
      </div>
    </>
  );
};

export default Gallery;
