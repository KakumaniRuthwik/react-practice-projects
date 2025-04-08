import SearchLabs  from "../Images/GoogleLabs.svg"
import MenuIconApps  from "../Images/menuIcon.svg"
import accountLogo  from "../Images/accountLogo.jpg"


function Header(){
    return (
        <header className="text-white">
            <div className="flex justify-between items-center px-6.5 py-3.5">
                <div className="flex justify-start">
                    <ul className="flex  items-center gap-5 text-[14px] font-[Arial,sans-serif]">
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Store</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-end">
                        <ul className="flex gap-4 items-center text-[13px] font-[Arial,sans-serif]">
                            <li>
                                <a href="#">Gmail</a>
                            </li>
                            <li>
                                <a href="#">Images</a>
                            </li>
                            <li className="pl-2">
                                <a href="">
                                    <img src = { SearchLabs } alt="Search Labs" className="size-6" />
                                </a>
                            </li>
                            <li className="pl-3 pr-1">
                                <a href="#">
                                    <img src = { MenuIconApps } alt="Google Menu Icon" className="size-6" />
                                </a>
                            </li>
                            <li className="-mr-2">
                                <a href="#">
                                    <img src = {accountLogo} alt="User profile" className="rounded-full size-8"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;