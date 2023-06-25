import TopBar from "../components/TopBar";

export default function Contact(properties) {
    const { _, darkMode } = properties;
    return (
        <>
            <div className="sticky top-0 left-0 right-0">
                <TopBar {...properties} />
            </div>
            <section>
            <div className="pt-40 w-screen h-auto bg-gradient-to-b from-violet-500 to-blue-200">
            <section className="w-screen absolute flex flex-row justify-center items-center z-10 animate-fade-from-bottom">
                <section className="relative group">
                    <h1 className="select-none absolute dark:blur-xl cursor-default text-6xl md:text-8xl font-bold text-talon-darkbg dark:text-talon-lightbg dark:animate-light-flicker">Contacts</h1>
                    <h1 className="select-none cursor-default text-6xl md:text-8xl font-bold text-talon-darkbg dark:text-talon-lightbg">Contacts</h1>
                </section>
            </section>
                <svg
                className="relative p-0 m-0 w-screen h-auto transition-colors ease-in-out duration-200"
                id="visual"
                viewBox="0 0 675 293"
                width="675"
                height="293"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
  <path d="M 0 136 L 16 117 C 32 98 64 60 96.2 56.7 C 128.3 53.3 160.7 84.7 192.8 92.8 C 225 101 257 86 289.2 70.3 C 321.3 54.7 353.7 38.3 385.8 49.5 C 418 60.7 450 99.3 482.2 118.2 C 514.3 137 546.7 136 578.8 116.3 C 611 96.7 643 58.3 659 39.2 L 675 20 L 675 313 L 659 313 C 643 313 611 313 578.8 313 C 546.7 313 514.3 313 482.2 313 C 450 313 418 313 385.8 313 C 353.7 313 321.3 313 289.2 313 C 257 313 225 313 192.8 313 C 160.7 313 128.3 313 96.2 313 C 64 313 32 313 16 313 L 0 313 L 0 136 Z" fill={darkMode ? "#434343" : "#c5c5c5"}></path>
  <path d="M 0 119 L 16 127.5 C 32 136 64 153 96.2 153.5 C 128.3 154 160.7 138 192.8 135.8 C 225 133.7 257 145.3 289.2 144.2 C 321.3 143 353.7 129 385.8 115.2 C 418 101.3 450 87.7 482.2 81.8 C 514.3 76 546.7 78 578.8 77.5 C 611 77 643 74 659 72.5 L 675 71 L 675 313 L 659 313 C 643 313 611 313 578.8 313 C 546.7 313 514.3 313 482.2 313 C 450 313 418 313 385.8 313 C 353.7 313 321.3 313 289.2 313 C 257 313 225 313 192.8 313 C 160.7 313 128.3 313 96.2 313 C 64 313 32 313 16 313 L 0 313 L 0 119 Z" fill={darkMode ? "#393939" : "#cfcfcf"}></path>
  <path d="M 0 133 L 16 146.5 C 32 160 64 187 96.2 192.3 C 128.3 197.7 160.7 181.3 192.8 172.7 C 225 164 257 163 289.2 169.5 C 321.3 176 353.7 190 385.8 190.7 C 418 191.3 450 178.7 482.2 176.7 C 514.3 174.7 546.7 183.3 578.8 189.3 C 611 195.3 643 198.7 659 200.3 L 675 202 L 675 313 L 659 313 C 643 313 611 313 578.8 313 C 546.7 313 514.3 313 482.2 313 C 450 313 418 313 385.8 313 C 353.7 313 321.3 313 289.2 313 C 257 313 225 313 192.8 313 C 160.7 313 128.3 313 96.2 313 C 64 313 32 313 16 313 L 0 313 L 0 133 Z" fill={darkMode ? "#333333" : "#e5e5e5"}></path>
  <path d="M 0 230 L 16 223.7 C 32 217.3 64 204.7 96.2 198 C 128.3 191.3 160.7 190.7 192.8 193.3 C 225 196 257 202 289.2 200.7 C 321.3 199.3 353.7 190.7 385.8 185 C 418 179.3 450 176.7 482.2 181.5 C 514.3 186.3 546.7 198.7 578.8 202.2 C 611 205.7 643 200.3 659 197.7 L 675 195 L 675 313 L 659 313 C 643 313 611 313 578.8 313 C 546.7 313 514.3 313 482.2 313 C 450 313 418 313 385.8 313 C 353.7 313 321.3 313 289.2 313 C 257 313 225 313 192.8 313 C 160.7 313 128.3 313 96.2 313 C 64 313 32 313 16 313 L 0 313 L 0 230 Z" fill={darkMode ? "#292929" : "#efefef"}></path>
  <path d="M 0 226 L 16 226.5 C 32 227 64 228 96.2 232.3 C 128.3 236.7 160.7 244.3 192.8 251.8 C 225 259.3 257 266.7 289.2 270 C 321.3 273.3 353.7 272.7 385.8 273.8 C 418 275 450 278 482.2 277.2 C 514.3 276.3 546.7 271.7 578.8 270.3 C 611 269 643 271 659 272 L 675 273 L 675 313 L 659 313 C 643 313 611 313 578.8 313 C 546.7 313 514.3 313 482.2 313 C 450 313 418 313 385.8 313 C 353.7 313 321.3 313 289.2 313 C 257 313 225 313 192.8 313 C 160.7 313 128.3 313 96.2 313 C 64 313 32 313 16 313 L 0 313 L 0 226 Z" fill={darkMode ? "#232323" : "#f5f5f5"}></path>
            </svg>
          </div>
            </section>
            <section className="flex flex-col justify-center items-center animate-fade-from-bottom">
                <p className="select-none cursor-default text-l md:text-xl font-bold text-talon-darkbg dark:text-talon-lightbg">You can find me at the following places</p>
                <table className="table-fixed text-sm w-1/3 mt-5 text-talon-darkbg dark:text-talon-lightbg">
                    <tr className="divide-x">
                        <th className="select-none">Github</th>
                        <th className="border-talon-darkbg dark:border-talon-lightbg"><code className="bg-gray-300 dark:bg-gray-700 p-0.5 rounded-md">TalonFox</code></th>
                    </tr><br />
                    <tr className="divide-x">
                        <th className="select-none">Discord</th>
                        <th className="border-talon-darkbg dark:border-talon-lightbg"><code className="bg-gray-300 dark:bg-gray-700 p-0.5 rounded-md">@talonfox</code></th>
                    </tr><br />
                    <tr className="divide-x">
                        <th className="select-none">Steam</th>
                        <th className="border-talon-darkbg dark:border-talon-lightbg"><code className="bg-gray-300 dark:bg-gray-700 p-0.5 rounded-md">TalonFox</code></th>
                    </tr><br />
                    <tr className="divide-x">
                        <th className="select-none">Xbox</th>
                        <th className="border-talon-darkbg dark:border-talon-lightbg"><code className="bg-gray-300 dark:bg-gray-700 p-0.5 rounded-md">ItsTalon25</code></th>
                    </tr>
                </table>
                <p className="cursor-default transition-colors ease-in-out duration-200 text-talon-lightbg dark:text-talon-darkbg">I should really be on a furry social media platform...</p>
            </section>
        </>
    );
}