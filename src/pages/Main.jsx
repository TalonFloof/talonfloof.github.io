import { Link } from "react-router-dom";
import Meeeee from "../assets/meeeee.png";
import { useEffect, useState } from "react";

export default function Main(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <main>
        <section className="flex flex-row justify-center mt-4 mb-6 pb-6 md:mt-[5vh]">
            <div className="flex-none w-48">
                <div className=" relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 blur-xl rotate-45"></div>
                    <img 
                        src={Meeeee}
                        alt="Meeeeeeeeee :3"
                        className="relative rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 select-none"
                    />
                </div>
            </div>
            <div className="flex flex-col relative group justify-top items-top p-6 ">
                <h1 className="cursor-default text-2xl font-bold text-talon-darkbg dark:text-talon-lightbg">Hello, I'm Talon</h1>
                <p></p>
            </div>
        </section>
        <section className="flex relative justify-center items-center">
            <p className="cursor-default text-talon-darkbg dark:text-talon-lightbg">New website is currently under construction!</p>
        </section>
      </main>
    </>
  );
}