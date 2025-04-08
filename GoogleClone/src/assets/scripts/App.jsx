import Header from "../Components/Header.jsx"
import { GoogleCenteredText } from "../Components/MainSection.jsx"

export function App(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <GoogleCenteredText />
            </main>
        </div>
    );
}

