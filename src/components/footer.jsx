const Footer = () => {
  return (
    <footer className="bg-black w-full h-20 fixed bottom-0 z-10 p-4">
        <div className="w-full h-full relative">
          <div className="absolute left-8 flex gap-4 items-center">
            <button className="h-10 w-10 rounded-full bg-white border border-normalGray">F</button>
            <button className="h-10 w-10 rounded-full bg-white border border-normalGray">T</button>
            <button className="h-10 w-10 rounded-full bg-white border border-normalGray">I</button>
            <button className="h-10 w-10 rounded-full bg-white border border-normalGray">Y</button>
            <button className="h-10 w-10 rounded-full bg-white border border-normalGray">U</button>
          </div>
          <div className="w-full h-full flex justify-center items-center pt-2">
            <div className="flex gap-4 text-white">
              <span>About ARP</span>
              <span>Site Map</span>
              <span>Privacy & Legal</span>
              <span>Terms & Warranty</span>
              <span>Contact Us</span>
              <span>Certifications</span>
            </div>
          </div>
          <span className="absolute text-white text-sm bottom-0 right-4">© 2018 Automotive Racing Products, Inc.</span>
        </div>
      </footer>
  )
}

export default Footer;