import React from "react";
import Links from "./Links.jsx";


function Pyqs() {
  return (
    <div className="pt-5">
      {" "}
      <div className="font-bebas text-[#023047] text-2xl ">
        &#128200; PYQs :
      </div>
      <h1 className="font-semibold">
        practice makes the man perfect. solving previous year questions (PYQs)
        is one of the most effective ways to prepare for the JEE exam. It helps
        you understand the exam pattern, question types, and important topics.
        Below is a collection of PYQs from various years and sources to aid your
        preparation.
      </h1>
      <div className="w-full p-3">
        <div className="bg-[#0096c7] flex flex-col gap-[10px] justify-between w-full rounded py-3 px-1">
          <Links
            names="2022"
            links="https://drive.google.com/open?id=1s0POFwCkiHqJDCW6qu1KpQCamt7ZdF79&usp=drive_copy"
          />
          <Links
            names="2023"
            links="https://drive.google.com/open?id=10HDfGZlwa0vx-4yuka0ctkZ1GcwRZEW9&usp=drive_copy"
          />
          <Links
            names="2024"
            links="https://drive.google.com/open?id=1GRnOGpdrbqFeWs3gwESuKewr_302Bvj7&usp=drive_copy"
          />
          <Links
            names="Arihant 41 Years"
            links="https://drive.google.com/open?id=1r6cs21b8TNbPduObfwLD6fs8BQvG8KD0&usp=drive_copy"
          />
          <Links
            names="Disha 41 years"
            links="https://drive.google.com/open?id=1EjNscaaEprIeRmsmiUpeJPyZwYoJ1lll&usp=drive_copy"
          />
          <Links
            names="MTG 41 years"
            links="https://drive.google.com/open?id=1lUzdDucIRrOUZ4juuXBjJbG1YLke5Mys&usp=drive_copy"
          />
        </div>
        <div className="py-3 px-2 flex flex-row justify-between">
          <button
            href="https://drive.google.com/open?id=1jJHccXXqhOm1gCOHknaFNn0GF1Hwtju3&usp=drive_copy"
            className="p-3 border text-white hover:text-black rounded-full bg-blue-900"
          >
            MATH HANDBOOK
          </button>
          <button
            href="https://drive.google.com/open?id=1cUybeVcx-OCTHv1bntQJR_XaBjaJ8TBt&usp=drive_copy"
            className="p-3 border text-white hover:text-black rounded-full bg-blue-900"
          >
            PHYSICS HANDBOOK
          </button>
          <button
            href="https://drive.google.com/open?id=1ZGUkYvw0wvAS0pfrvlIR6vPEadF7nujJ&usp=drive_copy"
            className="p-3 border text-white hover:text-black rounded-full bg-blue-900"
          >
            CHEMISTRY HANDBOOK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pyqs
