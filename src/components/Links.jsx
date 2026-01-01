import React from "react";

function Links({links,names}) {
  return (
    <div>
      {" "}
      <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
        <a href={links}>
          {names}
        </a>
      </div>
    </div>
  );
}

export default Links
