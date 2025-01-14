const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

//https://source.unsplash.com/xzjouTJASSA/1080x800

const unsplashPhotos = [
  { id: "xzjouTJASSA", width: 1080, height: 800 }, // moss forest
  { id: "ftq55dYVPgg", width: 1080, height: 1620 }, // 3girls, 1 ring
  { id: "liZzMH8X0XI", width: 2520, height: 1280 }, // love couple
  { id: "9Qv774YDKbA", width: 1920, height: 2880 }, // hand heart

  { id: "_Yqq0vf2V8E", width: 1920, height: 1280 }, //forest wedding dress
  { id: "ACse-ieowwE", width: 1920, height: 1280 }, // wedding couple trees
  { id: "y4bE8ST_CTg", width: 1920, height: 2879 }, // celebration couple
  { id: "rkkr6-2I4sg", width: 2400, height: 2560 }, // yellow trees

  { id: "y4bE8ST_CTg", width: 1920, height: 1280 }, // more trees
  { id: "tAH2cA_BL5g", width: 1920, height: 1280 }, // girls wine
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 }, // forest path
  { id: "464ps_nOflw", width: 1920, height: 1280 }, // hand holding

  { id: "7XqL_DVuBMw", width: 1920, height: 2885 }, // men hand holding flowers
  { id: "8vaQKYnawHw", width: 1920, height: 1280 }, // gold rings
  { id: "dvF6s1H1x68", width: 1920, height: 2879 }, // confette
  { id: "PuXtB1B4zL8", width: 1080, height: 810 }, // couple on moars
  { id: "8yPA6ZYq0-s", width: 1920, height: 2880 }, // bouquet
  { id: "tEFItLGn0uc", width: 1920, height: 2880 }, // wedding couple
  { id: "S2YssLw97l4", width: 1920, height: 1280 }, // dark party
  { id: "gaUb54H8UEc", width: 1280, height: 1720 },
  { id: "pHYAC4tFdmQ", width: 1920, height: 1280 },
  { id: "", width: 1080, height: 720 },
  { id: "", width: 1080, height: 1440 },
  { id: "", width: 1180, height: 720 },
  { id: "", width: 1089, height: 1440 },
  { id: "", width: 1080, height: 1720 },
  { id: "", width: 1080, height: 1240 },
  { id: "", width: 1080, height: 710 },
  { id: "", width: 1080, height: 1540 },
];

export function photoById(id) {
  const photos = unsplashPhotos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    id: photo.id,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  }));

  return photos.find((obj) => obj.id === id);
}

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
