import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpg";
import { getAssetURL } from "@/lib/image-util";

const ImageSliderData = {
  en: {
    slides: [
      {
        title: "Image 1",
        place: "Berlin",
        color: "text-red-500",
        img: img1,
      },
      {
        title: "Image 2",
        place: "Paris",
        color: "text-blue-500",
        img: img2,
      },
      {
        title: "Image 3",
        place: "Madrid",
        color: "text-green-500",
        img: img3,
      },
      {
        title: "Image 4",
        place: "Linz",
        color: "text-slate-500",
        img: img4,
      },
    ],
  },
  de: {},
};
export default ImageSliderData;
