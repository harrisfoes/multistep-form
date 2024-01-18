import React from "react";

function Step3() {
  return (
    <div className="step-1 rounded-lg w-11/12 bg-white p-6">
      <h1 className="text-denim text-3xl font-bold">Pick add-ons</h1>
      <p className="text-grey py-2">
        Add-ons help enhance your gaming experience.
      </p>

      <form>
        <label
          htmlFor="online-service"
          className="block py-4 px-3 border border-purple w-full rounded-lg my-2"
        >
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="add-on"
              id="online-service"
              value="1"
            />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">Online service</span>
              <span className="text-xs text-grey">
                Access to multiplayer games
              </span>
            </div>
            <div className="text-xs text-purple">+1$/mo</div>
          </div>
        </label>

        <label
          htmlFor="larger-storage"
          className="block py-4 px-3 border border-grey w-full rounded-lg my-2"
        >
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="add-on"
              id="larger-storage"
              value="2"
            />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">Larger Storage</span>
              <span className="text-xs text-grey">Extra 1tb of cloud save</span>
            </div>
            <div className="text-xs text-purple">+2$/mo</div>
          </div>
        </label>

        <label
          htmlFor="custom"
          className="block py-4 px-3 border border-grey w-full rounded-lg my-2"
        >
          <div className="flex gap-2 items-center ">
            <input type="checkbox" name="add-on" id="custom" value="3" />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">
                Customizable Profile
              </span>
              <span className="text-xs text-grey">
                Custom theme on your profile
              </span>
            </div>
            <div className="text-xs text-purple">+2$/mo</div>
          </div>
        </label>
      </form>
    </div>
  );
}

export default Step3;
