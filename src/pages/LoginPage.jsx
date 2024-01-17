import React from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

function LoginPage() {
  return (
    <section className="bg-bg-neutral h-screen">
      <div className="main-header relative">
        <img src={bgSidebarMobile} />

        <div className="absolute top-8 inset-0 step-container flex justify-center w-full">
          <div className=" flex step-indicators gap-4">
            <div className="rounded-full bg-skyblue w-[33px] h-[33px] flex items-center justify-center font-bold text-denim">
              1
            </div>
            <div className="rounded-full w-[33px] h-[33px] flex items-center justify-center font-bold text-white border border-white">
              2
            </div>
            <div className="rounded-full w-[33px] h-[33px] flex items-center justify-center font-bold text-white border border-white">
              3
            </div>
            <div className="border border-white rounded-full bg-sky-400 w-[33px] h-[33px] flex items-center justify-center font-bold text-white">
              4
            </div>
          </div>
        </div>

        <div className="absolute top-24 form-div w-full flex justify-center">
          <div className="rounded-lg w-11/12 bg-white p-6">
            <h1 className="text-denim text-3xl font-bold">Personal Info</h1>
            <p className="text-grey py-2 font-medium">
              Please provide your name, email address, and phone number.
            </p>
            <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
