import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            expedita nihil numquam iste animi est sapiente a alias soluta? Hic
            consequatur ducimus cum eaque? Libero, quae nisi? Illo, dicta sed.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li> Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5" >
            {" "}
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li> +1-535-234-6234</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />

        <p className="py-5 text-sm text-center">
          {" "}
          CopyRight 2024@ forever.com - All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
