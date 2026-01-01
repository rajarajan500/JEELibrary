import React from "react";
import Links from "./Links.jsx";
import { Link } from "react-scroll";

function Mat({links,names}) {
  return (
    <div className="pt-5">
      <div className="font-bebas text-[#023047] text-2xl ">
        &#128293; MATHEMATICES :
      </div>
      <div>
        <h1 className="font-semibold">
          Mathematics in JEE is often considered one of the toughest sections.
          It is said to be challenging and time‑consuming, yet mastering it is
          essential for achieving a good score in the exam. Success in JEE
          requires consistent practice, especially in mathematics. Below, you’ll
          find a collection of guides and question papers from various sources
          to help strengthen your preparation.
        </h1>
        <div className="w-full p-3">
          <div className="bg-[#0096c7] flex flex-col gap-[10px] justify-between w-full rounded py-3 px-1">
            <h1 className="text-center">CENGAGE</h1>
            <div className="w-full flex underline items-center sm:h-[50px] h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1zHtEXbthJo5AFMF5D55Esl8o_sRrIBlq/view?usp=drive_link">
                Cengage Calculus
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1slxBbduAMfoEnfPLUfcgus00cncyP1ii/view?usp=drive_link">
                Cengage Calculus_dt
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1iiYdyzIpveh8F32qdEZ_QLXCL4hqrU0H/view?usp=drive_link">
                Cengage Algebra
              </a>
            </div>
            <div className="w-full sm:h-[50px] underline items-center h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1MpvXSMyEEsZMW_2x998i8EvXhC1vgwF8/view?usp=drive_link">
                Cengage Geometry
              </a>
            </div>{" "}
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1W6YtLisiu6VhYm7VTuUrJuheqnzD6Aiv/view?usp=drive_link">
                Cengage Trigonometry
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/file/d/1aFwnl05gdaiC85STDD8ttD2NwhfUliRC/view?usp=drive_link">
                Cengage Vectors and 3d Geometry
              </a>
            </div>
            <h1 className="text-center">ARIHANT</h1>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/1_RADjMcMZuGnEAy-W5lPutZfkKJTJani?usp=drive_link">
                Amit M Aggarwal Algebra
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/1XCS7b6HwXcTW94Oy6e2TK5hZLRyY5GOr?usp=drive_link">
                Amit M Aggarwal Coordinate Geometry
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/1UcbdEL7J2L8RQMRJl0JfAEuM4qnhFR2v?usp=drive_link">
                Amit M Aggarwal Differential Calculas
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/18F2x6xpq9mDXNzKtmaspp_MD4Rscb4uQ?usp=drive_link">
                Amit M Aggarwal Integral Calculas
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/1b5ETAUFVO5KLilHx0sUxR2zTUiqK3Lno?usp=drive_link">
                Amit M Aggarwal Play With Graphs
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/10ra2wLxGOE0hWg1e2Qavnq4CTH0-GOmG?usp=drive_link">
                Amit M Aggarwal Trigonometry
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/12PzHL0q_84oWWfulh6YvJrkDF7r1nXCK?usp=drive_link">
                Amit M Aggarwal Vector And 3D
              </a>
            </div>
            <div className="w-full sm:h-[50px] items-center underline h-7 bg-[#00b4d8]">
              <a href="https://drive.google.com/drive/folders/1LPb29mevc306V7troCHwqhlMrOuV-viq?usp=drive_link">
                SL Loney
              </a>
            </div>
            <h1 className="text-center">RD SHRMA</h1>
            <Links links='https://drive.google.com/file/d/1qSuTKmsXXYWJV0inoVVIStBMr2HS3lRY/view?usp=drive_link' names='RD Shrma Volume 1'/>
            <Links links='https://drive.google.com/file/d/10G2xBrZWQR3DzjRKK8W5FOI4oFs3gm5d/view?usp=drive_link' names='RD Shrma Volume 2'/>
            <Links links='https://drive.google.com/file/d/1UJK20MGSHSjE_SvIj3sAxPEg4SU3JAU0/view?usp=drive_link' names='RD Shrma XI'/>
            <h1 className="text-center">RS AGARWAL</h1>
            <Links names='RS Agarwal Grade XI Book' links='https://drive.google.com/file/d/1Hrv4E60JmpbiFACmj2nyKYxfLMUScG61/view?usp=drive_link'/>
            <Links names='RS Agarwal Grade XII Book' links='https://drive.google.com/file/d/1QUnS7lz1_XR26Pa0Ga-OyIvkW-m9oaZ4/view?usp=drive_link'/>
            <h1 className="text-center">VIKAS GUPTA</h1>
            <Links names='Advance Problem - SOL' links='https://drive.google.com/file/d/1xlLyTUrdUxlw560fpCkgQb6Iyfqtzjbu/view?usp=drive_link'/>
            <Links names='Advance Problem Vikas Gupta' links='https://drive.google.com/file/d/1UrJlIPLU5kSKmVeOlFavgfM_njdUnEuK/view?usp=drive_link'/>
            <Links names='Advance Problem  Vikas Gupta' links='https://drive.google.com/file/d/1x2VNj4Brii1Dcao__ASc5sbCWaC3BFMk/view?usp=drive_link'/>
            <h1 className="text-center">WILEYS MATHEMATICS</h1>
            <Links names='Calculas IIT JEE' links='https://drive.google.com/file/d/1_xH-4nkaEYeNXdGNcGHuAWozpDuyGHce/view?usp=drive_link'/>
            <Links names='Geometry IIT JEE' links='https://drive.google.com/file/d/1aDg1I96zJ1L9cS_xdJkbXf-lW5zsKlKq/view?usp=drive_link'/>
            <Links names='Problems for JEE Vol 1' links='https://drive.google.com/file/d/1gFEzV0Hd-RT8RURTtKBsnQgpcgjJDDL8/view?usp=drive_link'/>
            <Links names='Problems for JEE Vol 2' links='https://drive.google.com/file/d/1kvdS-Rwpl5NeWdRxfDeClbs7u4GuDLya/view?usp=drive_link'/>
            <Links names='Trigonometry-Vector-Algebra-Probability' links='https://drive.google.com/file/d/1XzoZiLyu2yktOS8ONyOhNINDrZHvqMcv/view?usp=drive_link'/>
            <Links names='Algebra' links='https://drive.google.com/file/d/1ddKTd33xQaOJv-JqPuySUvLrRgImAoZc/view?usp=drive_link'/>
            <Links names='Grade 11 Problems' links='https://drive.google.com/file/d/1v2ZQbMKnu9KfsRzq5y9qYVZJNfVvJA0H/view?usp=drive_link'/>
            <Links names='Grade 12 Problems' links='https://drive.google.com/file/d/1KsIaNy7rDY0Jmm5Fb8KnF75IxBmbRbIE/view?usp=drive_link'/>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Mat
