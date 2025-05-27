import Image from "next/image"

export default function Photography(){

    return (
        <div>
            <header className="h-screen bg-[url(/images/home.jpg)] bg-cover bg-center bg-no-repeat">
                        <div className="flex justify-between p-8 text-white items-center">
                            <a className="flex-1 md:text-6xl italic text-4xl" href="/">Geselle</a>
            
                            <nav className="hidden 2xl:flex gap-12 text-3xl">
                                <a className="opacity-55 hover:opacity-90 hover:scale-110
                                relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">About</a>
                                <a className="opacity-55 hover:opacity-90 hover:scale-110
                                relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Photography</a>
                                <a className="opacity-55 hover:opacity-90 hover:scale-110
                                relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Contact</a>
                            </nav>
            
                            <div className="flex-1 hidden 2xl:inline">
                            </div>
            
                            <div className="navbar-end 2xl:hidden">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="flex-none">
                                            <button className="btn btn-square bg-black focus:bg-stone-400">
                                                <Image
                                                    src={"/images/icons/menu_white.svg"}
                                                    alt="menu"
                                                    width={10}
                                                    height={10}
                                                    className="size-6 sm:size-7 "
            
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-lg dropdown-content bg-stone-800 opacity-30 rounded-box z-1 mt-3 w-52 p-2">
                                        <li><a className="opacity-55 hover:opacity-90 hover:scale-110
                                            relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">About</a>
                                        </li>
                                        <li><a className="opacity-55 hover:opacity-90 hover:scale-110
                                            relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-4/6 after:transition-all after:duration-300 cursor-pointer">Photography</a>
                                        </li>
                                        <li><a className="opacity-55 hover:opacity-90 hover:scale-110
                                            relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-3/6 after:transition-all after:duration-300 cursor-pointer">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
        </div>
    )
}