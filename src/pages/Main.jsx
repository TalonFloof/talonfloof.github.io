import TopBar from "../components/TopBar";
import Meeeee from "../assets/meeeee.png";
import { Link } from "react-router-dom";

export default function Main(properties) {
  console.log("Oh haiiiiiiiiii :3");
  console.log("I see your interested in how this site works?");
  console.log("That's great! It's always nice to see someone who's curious.");
  console.log("The full source code is actually publically avaiable at: https://github.com/TalonFox/talonfox.github.io");
  console.log("Feel free to use whatever you want, the code is under the Apache 2.0 License.");
  document.querySelector("html").style = null;
  return (
    <>
      <div className="sticky top-0 left-0 right-0">
        <TopBar {...properties}/>
      </div>
      <main className="animate-fade-from-bottom">
        <section className="flex flex-col justify-center items-center md:flex-row mt-[15vh] mb-6 pb-6 gap-10 md:gap-24 xl:gap-32">
            <div className="relative group">
                <div className="animate-light-flicker absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 blur-xl rotate-45"></div>
                <img 
                    src={Meeeee}
                    alt="Meeeeeeeeee :3"
                    className="relative rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 select-none pointer-events-none"
                />
            </div>
            <div className="flex flex-wrap flex-col relative group justify-top items-top p-6 select-none">
                <h1 className="cursor-default text-2xl md:text-4xl font-bold text-talon-darkbg dark:text-talon-lightbg">Hello, I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Talon</span></h1>
                <span className="max-w-xs">
                    <p className="cursor-default text-sm font-bold text-talon-darkbg dark:text-talon-lightbg">I am a self-taught programmer who is particularly interested in baremetal software development.</p>
                    <p className="cursor-default text-xs text-talon-darkbg dark:text-talon-lightbg">Yes, this is a furry's website. Just remember that it was your decision to visit this site.</p>
                </span>
            </div>
        </section>
        <section className="flex flex-col relative justify-center items-center">
        <div className=" justify-center items-center divide-x text-talon-darkbg dark:text-talon-lightbg">
          <Link to="/aboutme" className="text-center pl-2 pr-2 border-talon-darkbg dark:border-talon-lightbg">About Me</Link>
          <Link to="/contact" className="text-center pl-2 pr-2 border-talon-darkbg dark:border-talon-lightbg">Contact</Link>
          <Link to="/projects" className="text-center pl-2 pr-2 border-talon-darkbg dark:border-talon-lightbg">Projects</Link>
          <Link to="/fursona" className="text-center pl-2 pr-2 border-talon-darkbg dark:border-talon-lightbg">Fursona</Link>
        </div>
        </section>
      </main>
    </>
  );
}
