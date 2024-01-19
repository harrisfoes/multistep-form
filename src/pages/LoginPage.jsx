import React, { useState } from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import StepIndicators from "../components/StepIndicators";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import ThankYouPage from "../components/ThankYouPage";

function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <section className="bg-bg-neutral h-screen md:h-fit  md:flex">
      <div className="main-header relative">
        <div>
          <picture>
            <source media="(min-width:768px)" srcSet={bgSidebarDesktop} />
            <img src={bgSidebarMobile} className="w-full" />
          </picture>

          <StepIndicators currentStep={currentStep} />
        </div>
      </div>

      <div className="md:bg-white m-content">
        <div className="absolute md:static md:w-full top-24 form-div w-full flex justify-center">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && (
            <Step2 isYearly={isYearly} setIsYearly={setIsYearly} />
          )}
          {currentStep === 3 && <Step3 isYearly={isYearly} />}
          {currentStep === 4 && (
            <Step4 setCurrentStep={setCurrentStep} isYearly={isYearly} />
          )}
          {currentStep === 5 && <ThankYouPage />}
        </div>

        <div
          className={`${
            currentStep === 1 ? "justify-end" : "justify-between"
          } button-at-footer bg-white absolute md:static inset-x-0 bottom-0 p-4 flex text-grey`}
        >
          <button
            className={`${
              currentStep > 1 && currentStep < 5 ? "block" : "hidden"
            }`}
            onClick={handleGoBack}
          >
            Go Back
          </button>
          <button
            className={`${
              currentStep > 3 ? "hidden" : ""
            } bg-denim text-white p-3 rounded-lg hover:opacity-75`}
            onClick={handleNextStep}
          >
            Next Step
          </button>
          <button
            className={`${
              currentStep === 4 ? "" : "hidden"
            } bg-purple text-white p-3 rounded-lg hover:opacity-75`}
            onClick={handleNextStep}
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
