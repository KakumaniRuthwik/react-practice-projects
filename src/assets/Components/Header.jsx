import SearchLabs  from "../Images/GoogleLabs.svg"
import MenuIconApps  from "../Images/menuIcon.svg"
import accountLogo  from "../Images/accountLogo.jpg"


function Header(){
    return (
        <header className="text-white text-[14px]">
            <div className="flex justify-between items-center px-6 py-5">
                <div className="flex justify-start">
                    <ul className="flex  items-center gap-6">
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
                        <ul className="flex gap-4.5 items-center">
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
                            <li className="pl-2 pr-1">
                                <a href="#">
                                    <img src = { MenuIconApps } alt="Google Menu Icon" className="size-5" />
                                </a>
                            </li>
                            <li className="-mr-1">
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