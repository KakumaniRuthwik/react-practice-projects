import GoogleText from "../Images/GoogleText.png"
import SearchIcon from "../Images/googleSearch.svg"
import MicIcon from "../Images/googleMic.svg"
import LensIcon from "../Images/googleLens.svg"

export function GoogleCenteredText(){
    return (
        <section className="flex items-center">

            <div className="flex flex-col gap-6 justify-center items-center min-w-screen ">
                
                <div className="select-none">
                    <img src={ GoogleText } alt="Google Text"  className="aspect-auto w-2xs" />
                </div>

                <div>
                    <div className="flex rounded-full justify-between bg-[#3F4454]">
                        <div className="flex items-center p-2 gap-1 justify-center">
                            <div className="flex px-2">
                                <img src={ SearchIcon } alt="SearchIcon"  className="size-5 select-none"/>
                            </div>
                            <div className="pt-1">
                                <textarea rows={1} maxLength={2048} name="Search" id="searchInput" className="w-md text-[16px] text-white border-0 outline-0 py-1 resize-none"> </textarea>
                            </div>
                            <div className="flex px-1">
                                <img src={ MicIcon } alt="SearchIcon"  className="size-6 select-none"/>
                            </div>
                            <div className="flex px-2">
                                <img src={ LensIcon } alt="SearchIcon"  className="size-6 select-none"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
        </section>
    );
}
