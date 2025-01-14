import React from "react";
import GridGallery from "../components/GridGallery";
import PhotoAlbum from "react-photo-album";

export const Old = () => {
  const images = Object.values(
    import.meta.glob("../assets/oldHouse/*.jpg", { eager: true })
  );

  const imageList = images.map((img) => {
    return { img: img.default };
  });

  return (
    <>
      <PhotoAlbum
        photos={imageList}
        layout="rows"
        onClick={({ index }) => setIndex(index)}
      />
      <GridGallery galleryImages={imageList} />
    </>
  );
};
