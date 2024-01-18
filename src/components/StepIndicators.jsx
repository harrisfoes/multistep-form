import React from "react";

const StepNum = ({ currentStep, thisStepNumber }) => {
  console.log(thisStepNumber, "thisStep");
  return (
    <div
      className={`${
        thisStepNumber == currentStep
          ? "text-denim bg-skyblue"
          : "border border-white text-white"
      } rounded-full  w-[33px] h-[33px] flex items-center justify-center font-bold`}
    >
      {thisStepNumber}
    </div>
  );
};

function StepIndicators({ currentStep }) {
  console.log(currentStep, "currentStep");
  return (
    <div className="absolute top-8 inset-0 step-container flex justify-center w-full">
      <div className=" flex step-indicators gap-4">
        <StepNum currentStep={currentStep} thisStepNumber="1" />
        <StepNum currentStep={currentStep} thisStepNumber="2" />
        <StepNum currentStep={currentStep} thisStepNumber="3" />
        <StepNum currentStep={currentStep} thisStepNumber={"4"} />
        <StepNum currentStep={currentStep} thisStepNumber={5} />
      </div>
    </div>
  );
}

export default StepIndicators;
