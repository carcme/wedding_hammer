import { useState } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function GridGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black/80">
          <div className="fixed right-9 top-[60px] z-20 size-12 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 text-neutral-300"></div>
          <FaXmark
            className="fixed right-10 top-20 z-20 size-10 cursor-pointer text-neutral-300 hover:fill-red-700"
            onClick={handleCloseModal}
          />
          <div className="fixed left-8 top-1/2 z-20 size-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 text-neutral-300"></div>
          <FaChevronLeft
            className="fixed left-10 top-1/2 z-20 size-6 -translate-y-1/2 cursor-pointer rounded-full text-neutral-300 hover:fill-red-700"
            onClick={prevSlide}
          />
          <div className="fixed right-8 top-1/2 z-20 size-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 text-neutral-300"></div>
          <FaChevronRight
            className="fixed right-10 top-1/2 z-20 size-6 -translate-y-1/2 cursor-pointer text-neutral-300 hover:fill-red-700"
            onClick={nextSlide}
          />

          <div className="relative flex h-[calc(100%-40px)] w-[calc(100%-40px)] items-center justify-center">
            <img
              className="h-full w-full cursor-pointer bg-contain object-contain"
              src={galleryImages[slideNumber].img}
              alt={galleryImages[slideNumber].text}
              onClick={nextSlide}
            />
            {galleryImages[slideNumber].text !== "" && (
              <div class="absolute bottom-0 left-0 flex w-full items-center justify-center bg-gradient-to-t from-black/60 to-black/10 p-4 backdrop-blur-sm">
                <h3 className="font-Jost w-3/4 text-center text-sm font-semibold text-white md:text-lg">
                  {galleryImages[slideNumber].text}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-2 bg-primaryHoneyDew p-2 pt-[72px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="relative" key={index}>
                <div
                  className="h-full cursor-pointer hover:z-20"
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    src={slide.img}
                    alt={slide.text}
                    className="h-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0"
                  onClick={() => handleOpenModal(index)}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="font-Jost absolute bottom-0 z-10 mx-2 self-center p-2 text-sm font-bold tracking-widest text-white">
                    {slide.text}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
