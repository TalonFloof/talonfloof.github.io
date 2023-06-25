import TopBar from "../components/TopBar";
import Meeeee from "../assets/meeeee.png";

export default function Main(properties) {
  console.log("Oh haiiiiiiiiii :3");
  console.log("I see your interested in how this site works?");
  console.log("That's great! It's always nice to see someone who's curious.");
  console.log("The full source code is actually publically avaiable at: https://github.com/TalonFox/talonfox.github.io");
  console.log("Feel free to use whatever you want, the code is under the Apache 2.0 License.");
  return (
    <>
      <TopBar {...properties}/>
      <main className="animate-fade-from-bottom">
        <section className="flex flex-col justify-center items-center md:flex-row mt-4 mb-6 pb-6 md:mt-[5vh] gap-10 md:gap-24 xl:gap-32">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 blur-xl rotate-45"></div>
                <img 
                    src={Meeeee}
                    alt="Meeeeeeeeee :3"
                    className="relative rounded-full h-40 w-40 md:h-44 md:w-44 xl:h-60 xl:w-60 select-none pointer-events-none"
                />
            </div>
            <div className="flex flex-wrap flex-col relative group justify-top items-top p-6">
                <h1 className="cursor-default text-2xl md:text-4xl font-bold text-talon-darkbg dark:text-talon-lightbg">Hello, I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Talon</span></h1>
                <span className="max-w-xs">
                    <p className="cursor-default text-sm font-bold text-talon-darkbg dark:text-talon-lightbg">Yes, you're visiting a furry's website. Don't blame me! You clicked the link...</p>
                </span>
            </div>
        </section>
        <section className="flex relative justify-center items-center">
            <p className="cursor-default text-talon-darkbg dark:text-talon-lightbg">New website is currently under construction!</p>
        </section>
      </main>
    </>
  );
}
