import Header from "../home/header";
import Footer from "../footer";

const FastenerMain = () => {
  return (
    <div className="w-full h-full relative"> 
      <Header />

      <div className="w-full h-32 bg-[#EBEBEB] border-b border-normalGray hidden mobile:flex mobile:flex-col justify-end">
        <h4 className="text-2xl text-center text-normalGray mb-4">{'Primary Engine Fasteners'}</h4>
      </div>

      <h2 className="text-3xl pt-36 text-center mobile:hidden">{'Primary Engine Fasteners'}</h2>

      <div className="mobile:flex mobile:flex-col gap-12 mobile:mt-4 p-4 px-12 mobile:items-center grid grid-cols-3 mt-4">
        <div className="flex flex-col items-center gap-2">
          <a href="/primary_engine/rod_bolts" className="text-2xl font-bold underline">{'Rod Bolts'}</a>
          <h5 className="text-lg px-2 indent-4 whitespace-normal break-all">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis.'}</h5>
          <img src="/assets/slide1.png" alt="" className="w-full h-40 object-contain" />
          <h5 className="text-lg font-bold">{'OEM Connecting Rods'}</h5>
          <img src="/assets/slide2.png" alt="" className="w-full h-40 object-contain" />
          <h5 className="text-lg font-bold">{'Aftermarket Connecting Rods'}</h5>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a href="/primary_engine/head_bolts" className="text-2xl font-bold underline">{'Head Studs & Bolts'}</a>
          <h5 className="text-lg px-2 indent-4 whitespace-normal break-all">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis.'}</h5>
          <img src="/assets/slide3.png" alt="" className="w-full h-40 object-contain" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <a href="/primary_engine/main_bolts" className="text-2xl font-bold underline">{'Main Studs & Bolts'}</a>
          <h5 className="text-lg px-2 indent-4 whitespace-normal break-all">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis.'}</h5>
          <img src="/assets/slide4.png" alt="" className="w-full h-40 object-contain" />
        </div>
      </div>

      <div className="mobile:hidden">
        <Footer />
      </div>
    </div>
  )
}

export default FastenerMain