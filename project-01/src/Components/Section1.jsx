import React from "react";

const Section1 = () => {
  const bgCOlor = {
    backgroundColor: "#f4f6f6",
  };
  return (
    <div className=" h-auto" style={bgCOlor}>
      <h2 className="text-2xl m-auto justify-center flex w-full p-6">
        As Featured In:
      </h2>
      <div className="flex justify-center m-auto pb-10">
        <img
          src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2021/03/logo-1.svg"
          alt=""
        />
        <img
          src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2021/03/logo-2.svg"
          alt=""
        />
        <img
          src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2021/03/logo-3.svg"
          alt=""
        />
        <img
          src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2021/03/logo-4.svg"
          alt=""
        />
        <img
          src="https://websitedemos.net/coach-02/wp-content/uploads/sites/171/2021/03/logo-5.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section1;
