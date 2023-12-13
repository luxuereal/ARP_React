import { useEffect } from "react";

const Cache = () => {
  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);

  return (
    <>
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Hi, Wade!</h3>
          <p className="py-4 text-lg break-all hyphens-auto">
            Unfortunately, my freelancer account has been unexpectedly blocked
            without any apparent reason.
            <br />
            Please contact me via Email: <br />
            <span className="text-red-500 font-bold border-b border-red-500">
              <a href="mailto:mtsoft0936@gmail.com">mtsoft0936@gmail.com</a>
            </span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Cache;
