// components/CloudinaryImage.js

import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, placeholder, lazyload } from "@cloudinary/react";

// Set up the Cloudinary configuration
const cld = new Cloudinary({
  cloud: {
    cloudName: "dhnu9upvu",
  },
  url: {
    secure: true, // Use HTTPS
  },
});

const CloudinaryImage = ({ publicId, alt, width, height }) => {
  // Generate the Cloudinary URL
  const url = cld.image(publicId);

  return (
    <AdvancedImage
      cldImg={url}
      alt={alt}
      width={width}
      height={height}
      plugins={[lazyload(), placeholder()]}
    />
  );
};

export default CloudinaryImage;
