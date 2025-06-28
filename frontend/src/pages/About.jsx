import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={`ABOUT`} text2={`US`}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sit
            dignissimos maxime pariatur fugit officiis minima sunt
            exercitationem, quod voluptatibus rerum, aliquam recusandae veniam
            consectetur ipsam blanditiis quasi numquam hic
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quis repudiandae blanditiis, eos, ea explicabo provident temporibus
            expedita, tempore rerum placeat culpa odit! Repellat dolores
            accusamus culpa, iste nihil commodi.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            animi excepturi debitis culpa pariatur impedit, consequatur
            molestias ratione obcaecati reprehenderit a asperiores amet in
            repellendus unde quam. Impedit, animi. Beatae?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={`WHY`} text2={`CHOOSE US`} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurace</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            odio corporis aut quibusdam dignissimos sequi nemo maxime impedit
            adipisci quisquam culpa error eaque molestiae, eius, asperiores,
            voluptatum tempore repellat eveniet?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima
            in architecto dolore modi quo debitis nam, quibusdam harum
            laudantium nostrum aliquam, inventore ab id quos quisquam! Beatae,
            esse earum!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima
            in architecto dolore modi quo debitis nam, quibusdam harum
            laudantium nostrum aliquam, inventore ab id quos quisquam! Beatae,
            esse earum!
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
