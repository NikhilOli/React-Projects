import React from "react";

const Hero = () => {
  const bgImageStyle = {
    background: "rgb(58,69,180)",
    background:
      "linear-gradient(90deg, rgba(58,69,180,1) 0%, rgba(56,104,233,1) 50%, rgba(255,255,255,1) 93%, rgba(212,207,207,1) 100%)",
  };
  return (
    <div
      id="home"
      className="h-max w-full pb-36 flex  items-center transition-all duration-1000 ease-in-out"
      style={bgImageStyle}
    >
      <div className=" w-2/5 mx-28">
        <h1 className="text-6xl leading-tight tracking-wider text-white pt-40">
          Let Me Help You Overshoot Your Goals in the Right Ways.
        </h1>
        <p className="text-white my-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          labore nobis earum rem consequuntur autem harum doloribus corrupti quo
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          in! unde.
        </p>
        <div className="flex gap-2  ">
          <button
            className="bg-white text-[rgb(58,69,190)] text-lg px-6 py-4 hover:bg-[rgb(58,69,190)] hover:text-white"
            // style={{ color: "rgb(58,69,190" }}
          >
            Start Now
          </button>
          <button
            className="text-white bg-[rgb(58,69,190)] text-lg px-6 py-4 hover:bg-white hover:text-[rgb(58,69,190)]"
            // style={{ backgroundColor: "rgb(58,69,190)" }}
          >
            Read More
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFRW4ha6xAXdw/profile-displayphoto-shrink_200_200/0/1546438575706?e=2147483647&v=beta&t=Kki3ekTdtC0VdCm042CTCgtjnv2qKAusjtDJ2n02Keg"
          alt=""
          width={400}
        />
      </div>
    </div>
  );
};
// {{  }}
export default Hero;
