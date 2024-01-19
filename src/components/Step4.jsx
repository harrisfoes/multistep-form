import React from "react";

function Step4({ setCurrentStep, isYearly }) {
  const handlePlanChange = () => {
    setCurrentStep(2);
  };
  return (
    <div className="step-1 rounded-lg w-11/12 bg-white p-6">
      <h1 className="text-denim text-3xl font-bold">Finishing up</h1>
      <p className="text-grey py-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary my-4 p-4 bg-verylightgrey">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start py-2">
            <span className="text-denim font-medium">
              Arcade ({isYearly ? "Yearly" : "Monthly"})
            </span>
            <button className="text-grey underline" onClick={handlePlanChange}>
              Change
            </button>
          </div>
          <div className="font-bold text-denim">
            {isYearly ? "$90/yr" : "$9/mo"}
          </div>
        </div>
        <div className="divider w-[98%] my-3 h-[0.5px] opacity-50 bg-grey"></div>
        <div className="flex justify-between items-center my-2">
          <span className="text-grey">Online service</span>
          <div className="text-denim">{isYearly ? "$10/yr" : "$1/mo"}</div>
        </div>
        <div className="flex justify-between items-center my-2">
          <span className="text-grey">Larger storage</span>
          <div className="text-denim">$2/mo</div>
        </div>
        <div className="flex justify-between items-center my-8">
          <span className="text-grey">Total (per month)</span>
          <div className="text-purple text-xl font-semibold ">$12/mo</div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
