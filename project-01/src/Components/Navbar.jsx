import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full bg-red-100 flex justify-around items-center py-4">
        <div className="pr-20">
          <img
            src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2018/02/logo-regular-free-img.png"
            alt=""
          />
        </div>

        <div className="flex gap-4 text-xl pl-24">
          <a href="#home" className="hover:text-[rgb(58,69,180)]">
            Home
          </a>
          <a href="/about" className="hover:text-[rgb(58,69,180)]">
            About
          </a>
          <a href="#" className="hover:text-[rgb(58,69,180)]">
            eBooks
          </a>
          <a href="#" className="hover:text-[rgb(58,69,180)]">
            Courses
          </a>
          <a href="#" className="hover:text-[rgb(58,69,180)]">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
