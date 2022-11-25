import React from "react";
import onlineBanking from '../assets/icon-online.svg';
import budgeting from '../assets/icon-budgeting.svg';
import onboarding from '../assets/icon-onboarding.svg';
import api from '../assets/icon-api.svg';

const MainContent = () => {
  return (
    <main className="section-wrapper bg-lightGrayishBlue text-center sm:text-left">
      <h2 className="text-4xl">Why choose Easybank? </h2>
      <p className="my-5 text-grayishBlue">
        We leverage Open Banking to turn your bank account into your financial
        hub. <br />
        Control your finances like never before.
      </p>

      <div className="content-wrapper flex flex-col  gap-6  mt-[4rem] sm:flex-row">

        <div>
            <img className="w-[70px] mx-auto mb-8 sm:mx-0" src={onlineBanking} alt="online-banking" />
            <h4 className="text-[1.5rem] mb-6">Online Banking</h4>
            <p className="text-grayishBlue">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
      
        <div>
            <img className="w-[70px] mx-auto mb-8 sm:mx-0" src={budgeting} alt="online-banking" />
            <h4 className="text-[1.5rem] mb-6">Simple Budgeting</h4>
            <p className="text-grayishBlue">See exactly where your money goes each month. Receive notifications when you're close to hittin your limits.</p>
        </div>
     
        <div>
            <img className="w-[70px] mx-auto mb-8 sm:mx-0" src={onboarding} alt="online-banking" />
            <h4 className="text-[1.5rem] mb-6">Fast Onboarding</h4>
            <p className="text-grayishBlue">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>
      
        <div>
            <img className="w-[70px] mx-auto mb-8 sm:mx-0" src={api} alt="online-banking" />
            <h4 className="text-[1.5rem] mb-6">Open API</h4>
            <p className="text-grayishBlue">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>    
      </div>

    </main>
  );
};

export default MainContent;
