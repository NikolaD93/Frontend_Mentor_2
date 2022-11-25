import React from "react";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="section-wrapper bg-veryLightGray text-center sm:text-left">
      <h2 className="text-4xl mb-10">Latest Articles</h2>

      <div className="card-wrapper flex flex-col sm:flex-row sm:justify-between sm:gap-6">

        <div className="card mb-8">
          <img className="w-[350px] h-[250px] rounded-t sm:w-[320px]" src={currency} alt="currency" />
          <div className="text p-6 rounded-b shadow-sm bg-white">
            <p className="text-sm text-grayishBlue">By Claire Robinson</p>
            <h4 className="text-2xl my-5 leading-7 cursor-pointer hover:text-limeGreen">Receive money in any <br /> currency with no fees</h4>
            <p className="text-grayishBlue">The world is getting smaller and <br /> we're becoming more mobile. So <br /> why should you be forced to only <br /> receive money in a single...</p>
          </div>
        </div>

        <div className="card mb-8">
          <img className="w-[350px] h-[250px] rounded-t sm:w-[320px]" src={restaurant} alt="currency" />
          <div className="text p-6 rounded-b shadow-sm bg-white">
            <p className="text-sm text-grayishBlue">By Wilson Hutton</p>
            <h4 className="text-2xl my-5 leading-7 cursor-pointer hover:text-limeGreen">Treat yourself without <br /> worrying aboit money</h4>
            <p className="text-grayishBlue">Our simple budgeting feature <br /> allows you to separate out your <br /> spending and set realistic limits <br /> each month. That means you...</p>
          </div>
        </div>

        <div className="card mb-8">
          <img className="w-[350px] h-[250px] rounded-t sm:w-[320px]" src={plane} alt="currency" />
          <div className="text p-6 rounded-b shadow-sm bg-white">
            <p className="text-sm text-grayishBlue">By Wilson Hutton</p>
            <h4 className="text-2xl my-5 leading-7 cursor-pointer hover:text-limeGreen">Take your Easybank <br /> card wherever you go</h4>
            <p className="text-grayishBlue">We want you to enjoy your travels. <br /> This is why we don't charge any <br />fees on purchases while you're <br />abroad. We'll even show you...</p>
          </div>
        </div>

        <div className="card mb-8">
          <img className="w-[350px] h-[250px] rounded-t sm:w-[320px]" src={confetti} alt="currency" />
          <div className="text p-6 rounded-b shadow-sm bg-white">
            <p className="text-sm text-grayishBlue">By Claire Robinson</p>
            <h4 className="text-2xl my-5 leading-7 cursor-pointer hover:text-limeGreen">Our invite-only Beta <br /> accounts are now live!</h4>
            <p className="text-grayishBlue">After a lot of hard work by the <br /> whole team, we're excited to launch <br /> our closed beta. It's easy to request <br /> an invite through the site...</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Articles;
