import React from "react";
import { Container } from "../shear/Container";
import { Heading } from "../shear/Heading";
import { Button } from "../shear/Button";

const Contact = () => {
  return (
    <>
      <section className="px-3 mt-16 lg:mt-[80px] ">
        <Heading>Contact Us</Heading>
        <Container className={"relative  overflow-hidden"}>
          <div className="absolute right-0 top-1/4  w-80  opacity-20 rounded-full h-40 bg-amber-400  blur-[170px] -z-10"></div>
      

          <div className="bg-darkBg/5 backdrop-blur-[10px] border border-bgcolor dark:border-darkGreen/25 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4  dark:text-darktextwhite">
              Personal Information
            </h1>
            <p className="text-textcollor dark:text-darktextcolor mb-6">
              Use a permanent address where you can receive mail.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
              </div>
              <div className="mb-4">
                <select className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base">
                  <option disabled selected>
                    {" "}
                    <span className="!text-gray-100">Select your country</span>
                  </option>
                  <option value={1}>Palistain</option>
                  <option value={2}>Bangladesh</option>
                  <option value={3}>Iran</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Street address"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="City"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
                <input
                  type="text"
                  placeholder="State / Province"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
                <input
                  type="text"
                  placeholder="ZIP / Postal code"
                  className="border p-2 rounded w-full  border-darkBg/25 bg-white/5 dark:border-darkGreen/20 outline-none focus:outline-none  backdrop-blur-2xl focus:border-darkGreen dark:focus:border-darkGreen/50 placeholder:text-sm text-base"
                />
              </div>
              <Button>Send Now</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
