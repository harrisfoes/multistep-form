import React from "react";

const StepNum = ({ currentStep, thisStepNumber }) => {
  //console.log(thisStepNumber, "thisStep");
  //console.log("wawawa");
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
  //console.log(currentStep, "currentStep");
  const steps = ["1", "2", "3", "4", "5"];
  return (
    <div className="absolute top-8 inset-0 step-container flex justify-center w-full">
      <div className=" flex step-indicators gap-4">
        {steps.map((step, index) => (
          <StepNum
            currentStep={currentStep}
            thisStepNumber={step}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StepIndicators;
