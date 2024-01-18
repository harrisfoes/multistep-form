import React from "react";
import check from "../assets/images/icon-thank-you.svg";

function ThankYouPage() {
  return (
    <div className="step-1 rounded-lg w-11/12 bg-white py-12 px-6 text-center flex-col items-center justify-center">
      <img src={check} alt="check-mark" className="mx-auto mb-6 mt-8" />
      <h1 className="text-denim text-3xl font-bold">Thank you!</h1>
      <p className="text-grey py-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouPage;
