const Tab0 = ({ imageSet, images }) => {
  return (
    <div className="w-full mt-4 flex flex-col gap-4 justify-items-center items-center">
      <img src={imageSet} alt="" className="w-full h-96 object-contain"/>
      {
        images.map((image, id) =>
          <img src={image} key={`mobile-part-image-${id}`} alt="" className="w-[60%] h-20 drop-shadow-lg object-cover" />
        )
      }
    </div>
  )
}

export default Tab0;