import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tab2 = ({ data, images }) => {
  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        className="h-40 w-96 mobile:w-full my-8 mx-auto"
        autoPlay
        infiniteLoop
      >
        {images.map((img, id) => (
          <img
            src={img}
            alt=""
            key={`part-img-${id}`}
            className="h-40 w-96 mobile:w-full object-cover"
          />
        ))}
      </Carousel>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 mobile:grid-cols-1 w-full gap-x-8 gap-y-2">
        {data
          .filter((opt) => opt.name !== "Model" && opt.name !== "Image")
          .map((opt, id) => (
            <div className="flex gap-8 text-xl" key={`part-detail-${id}`}>
              <span className="w-[40%] text-right font-bold">{opt.name}</span>
              {opt.name === "Head Style" ? (
                <img src={opt.value} className="w-10 h-10" alt="" />
              ) : (
                <span className="text-left">{opt.value}</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tab2;
