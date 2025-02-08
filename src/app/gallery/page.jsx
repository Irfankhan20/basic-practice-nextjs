import Image from "next/image";
import nextjsImg from "../../assets/next js image.png";
const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Image Optimizations</h1>
      <h2 className="text-2xl text-center py-1 underline mt-10">
        Regular Image Tag
      </h2>
      <img
        src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
        alt="Next image"
        className="mx-auto"
        width={500}
        height={500}
      />
      <h2 className="text-2xl text-center py-1 mt-10 underline">
        Next js image component
      </h2>
      <Image
        src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
        alt="Next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-2xl text-center py-1 mt-10 underline">Local Image</h2>
      <Image
        src={nextjsImg}
        alt="Next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
