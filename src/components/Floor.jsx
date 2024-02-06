import React from "react";
import { Link } from "react-router-dom";

function Floor() {
  return (
    <div>
      <div className="py-2">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
            <div>
              <div className="p-7 rounded-xl bg-gray-100 dark:bg-neutral-700/70 hover:bg-gray-300 hover:transition transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-7">FIRST FLOOR</h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                  We've designed and built ecommerce experiences that have
                  driven sales.
                </p>
                <button
                  href
                  className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                >
                  CHECK IN!
                </button>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-gray-100 dark:bg-neutral-700/70 hover:bg-gray-300 hover:transition transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-7">SECOND FLOOR</h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                  The ability to independentiy value an enterprise is an
                  essential tool for marking business and strategic decisions.
                </p>
                <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  CHECK IN!
                </button>
              </div>
            </div>

            <div>
              <div className="p-7 rounded-xl bg-gray-100 dark:bg-neutral-700/70 hover:bg-gray-300 hover:transition transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-7">THIRD FLOOR</h3>
                <p className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">
                  Strategic Business Leader is a trainig course from the
                  Strategic Professional level.
                </p>
                <button
                  href="/"
                  className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                >
                  CHECK IN!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floor;
