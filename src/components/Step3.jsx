import React, { useState } from "react";

const Checkbox = ({ addons, handleChange, index, isYearly }) => {
  //console.log(addons);
  //console.log(index);
  return (
    <label
      htmlFor={addons.id}
      className={`${
        addons.checked ? "border-purple shadow-md" : "border-grey"
      } block py-4 px-3 border w-full rounded-lg my-2`}
    >
      <div className="flex gap-2 items-center justify-start">
        <input
          type="checkbox"
          name="add-on"
          id={addons.id}
          checked={addons.checked}
          onChange={() => handleChange(index)}
        />
        <div className="flex flex-col w-3/4 pl-2">
          <span className="font-semibold text-denim">{addons.name}</span>
          <span className="text-xs text-grey">{addons.desc}</span>
        </div>
        <div className="text-xs text-purple">
          {isYearly ? addons.yearlyPrice : addons.monthlyPrice}
        </div>
      </div>
    </label>
  );
};

function Step3({ isYearly, addons, setAddOns }) {
  //console.log(addonData);

  const handleChange = (i) => {
    //console.log(i, "change ta");
    setAddOns(
      addons.map((item, currentIndex) =>
        currentIndex === i ? { ...item, checked: !item.checked } : item
      )
    );
    //console.log(addons);
  };

  return (
    <div className="step-1 rounded-lg w-11/12 bg-white p-6">
      <h1 className="text-denim text-3xl font-bold">Pick add-ons</h1>
      <p className="text-grey py-2">
        Add-ons help enhance your gaming experience.
      </p>

      <form>
        {addons.map((addon, index) => {
          return (
            <Checkbox
              addons={addon}
              handleChange={handleChange}
              index={index}
              isYearly={isYearly}
              key={addon.name + index}
            />
          );
        })}

        {/*
        <label
          htmlFor="online-service"
          className={`${
            addons[0].checked ? "border-purple shadow-md" : "border-grey"
          } block py-4 px-3 border w-full rounded-lg my-2`}
        >
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="add-on"
              id="online-service"
              value="1"
              checked={addons[0].checked}
              onChange={() => handleChange(0)}
            />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">Online service</span>
              <span className="text-xs text-grey">
                Access to multiplayer games
              </span>
            </div>
            <div className="text-xs text-purple">
              {isYearly ? "+10$/yr" : "+1$/mo"}
            </div>
          </div>
        </label>

        <label
          htmlFor="larger-storage"
          className={`${
            addons[1].checked ? "border-purple shadow-md" : "border-grey"
          } block py-4 px-3 border  w-full rounded-lg my-2`}
        >
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="add-on"
              id="larger-storage"
              value="2"
              checked={addons[1].checked}
              onChange={() => handleChange(1)}
            />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">Larger Storage</span>
              <span className="text-xs text-grey">Extra 1tb of cloud save</span>
            </div>
            <div className="text-xs text-purple">
              {isYearly ? "+20$/yr" : "+2$/mo"}
            </div>
          </div>
        </label>

        <label
          htmlFor="custom"
          className={`${
            addons[2].checked ? "border-purple shadow-md" : "border-grey"
          } block py-4 px-3 border w-full rounded-lg my-2`}
        >
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              name="add-on"
              id="custom"
              value="3"
              checked={addons[2].checked}
              onChange={() => handleChange(2)}
            />
            <div className="flex flex-col w-3/4 pl-2">
              <span className="font-semibold text-denim">
                Customizable Profile
              </span>
              <span className="text-xs text-grey">
                Custom theme on your profile
              </span>
            </div>
            <div className="text-xs text-purple">
              {isYearly ? "+20$/yr" : "+2$/mo"}
            </div>
          </div>
        </label>
        */}
      </form>
    </div>
  );
}

export default Step3;
