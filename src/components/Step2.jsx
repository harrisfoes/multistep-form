import React from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function Step2() {
  return (
    <div className="step-1 rounded-lg w-11/12 bg-white p-6">
      <h1 className="text-denim text-3xl font-bold">Select your plan</h1>
      <p className="text-grey py-2">
        You hve the option of monthly or yearly billing.
      </p>

      <form>
        <label
          htmlFor="arcade"
          className="block p-4 border border-purple w-full rounded-lg my-2"
        >
          <div className="flex gap-2">
            <img src={arcade} />
            <div className="flex flex-col">
              <span className="font-semibold text-denim">Arcade</span>
              <span className="text-sm text-grey">$9/mo</span>
            </div>
          </div>
          <input
            type="radio"
            name="plan"
            id="arcade"
            value="1"
            className="hidden"
          />
        </label>

        <label
          htmlFor="advanced"
          className="block p-4 border border-lightgrey w-full rounded-lg my-2"
        >
          <div className="flex gap-2">
            <img src={advanced} />
            <div className="flex flex-col">
              <span className="font-semibold text-denim">Advanced</span>
              <span className="text-sm text-grey">$12/mo</span>
            </div>
          </div>
          <input
            type="radio"
            name="plan"
            id="advanced"
            value="22"
            className="hidden"
          />
        </label>

        <label
          htmlFor="pro"
          className="block p-4 border border-lightgrey w-full rounded-lg my-2"
        >
          <div className="flex gap-2">
            <img src={pro} />
            <div className="flex flex-col">
              <span className="font-semibold text-denim">Pro</span>
              <span className="text-sm text-grey">$15/mo</span>
            </div>
          </div>
          <input
            type="radio"
            name="plan"
            id="pro"
            value="22"
            className="hidden"
          />
        </label>

        <div className="toggle-plan flex items-center gap-2 py-4 justify-between  w-3/4 mx-auto">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
            Monthly
          </span>

          <label className="relative inline-flex items-center cursor-pointer ">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-denim peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          <span className="ms-3  text-sm font-medium text-gray-900 dark:text-gray-300">
            Yearly
          </span>
        </div>
      </form>
    </div>
  );
}

export default Step2;
