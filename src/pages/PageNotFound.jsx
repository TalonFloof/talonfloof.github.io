import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";

export default function PageNotFound(properties) {
    return (
        <>
            <div className="fixed top-0 left-0 right-0">
                <TopBar {...properties} />
            </div>
            <main className="flex flex-col justify-center items-center min-h-screen gap-0 animate-fade-from-bottom">
                <h1 
                className="font-unifont text-[20rem] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-700"
                >404</h1>
                <div className="relative -translate-y-20 flex flex-col justify-center items-center gap-3">
                <p className="font-bold cursor-default text-talon-darkbg dark:text-talon-lightbg">Page not found</p>
                <Link
                    to="/"
                    className="relative translate-y-1 self-center text-md rounded-2xl bg-talon-darkbg dark:bg-talon-lightbg text-talon-lightbg dark:text-talon-darkbg w-fit py-3 px-7 select-none hover:scale-110 transition ease-in-out duration-200"
                >Return To Main Page</Link>
                </div>
            </main>
        </>
    );
}