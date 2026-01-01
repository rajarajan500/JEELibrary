import React from "react";
import {Link} from 'react-scroll';



function Home() {
  return (
    <div className="flex flex-col pt-4 ">
      <div className="flex justify-center ">
        <div
          className="bg-center mb-3 bg-cover w-[350px] h-[200px] rounded shadow-sm"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/005/658/297/original/girl-studying-with-computer-and-books-illustration-concept-in-cartoon-style-vector.jpg')",
          }}
        ></div>
      </div>
      <div>
        <h1 className="font-openSans font-semibold text-center">
          JEE Library is a free online platform where you can access a wide
          range of study resources, including guides, question banks, previous
          year questions (PYQs), and notes from different authors. Explore
          hundreds of books and materials—all available at no cost—to support
          your exam preparation.
        </h1>
      </div>
      <div className="ml-4  gap-2 pt-10">
        <ol>
          <li>
            {" "}
            <i className=" text-[5px] pr-3  text-center fa-solid fa-circle"></i>
            all files uploded here are stored in the cloud
          </li>
          <li>
            {" "}
            <i className="text-[5px] pr-3 fa-solid fa-circle"></i>you can
            download the file for free
          </li>
          <li>
            {" "}
            <i className=" text-[5px] pr-3 fa-solid fa-circle"></i>the edition
            of the books and notes may not be the latest
          </li>
        </ol>
      </div>

      <div className="text-center p-5 text-[10px]">
        <i className="fa-solid fa-0"></i>
        <i className="fa-solid fa-1"></i>
        <i className="fa-solid fa-9"></i>
      </div>
      <div className="font-bold text-[#003049] text-center justify-between flex flex-col">
        <Link to="mat" href='' smooth={true} duration={1000}>
          <h1>MATHEMATICS - 33%</h1>
        </Link>
        <Link to="che" href='' smooth={true} duration={1000}>
          <h1>CHEMISTRY - 33%</h1>
        </Link>
        <Link to="phy" href='' smooth={true} duration={1000}>
          <h1>PHYSICS - 33%</h1>
        </Link>
      </div>

    </div>
  );
}

export default Home
