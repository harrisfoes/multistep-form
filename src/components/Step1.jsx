import React from "react";

function Step1() {
  return (
    <div className="step-1 rounded-lg w-11/12 bg-white p-6">
      <h1 className="text-denim text-3xl font-bold">Personal Info</h1>
      <p className="text-grey py-2">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col gap-2 py-2">
        <label htmlFor="name" className="font-sm text-denim font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          className="border border-grey rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2 py-2">
        <label htmlFor="name" className="font-sm text-denim font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className="border border-grey rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-2 py-2">
        <label htmlFor="name" className="font-sm text-denim font-medium">
          Phone Number
        </label>
        <input
          type="number"
          id="phone-number"
          placeholder="e.g. +1 234 567 890"
          className="border border-grey rounded-md p-2"
        />
      </div>
    </div>
  );
}

export default Step1;
