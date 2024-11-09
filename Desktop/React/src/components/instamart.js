import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    //const [isVisible, setIsVisible] = useState(false);

    return (
    <div className="border border-black p-2 m-2">
        <h1 className="font-bold text-xl"> {title} </h1>
        {
            isVisible ? (
            <button onClick = {() => setIsVisible(false)} className="underline "
            > Hide </button>

            ) : ( <button onClick = {() => setIsVisible(true)} className="underline "
            > Show </button>
            )
        }

        {isVisible && <p>{description}</p>}
        
    </div>
    );
};

const Instamart = () => {
    const [sectionConfig, setsectionConfig] = useState({
        showAbout:false,
        showTeam:false,
        showCareers:false,
    }
        );
    return (
        <div>
            <h1 className="text-2xl m-2 p-2 font-bold">Welcome, to Instamart!</h1>
            <Section 
                title = {"About Instamart"} 
                description={"This is the about section of InstamartLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                isVisible={sectionConfig.showAbout}
                setIsVisible= {() =>
                    setsectionConfig({
                        showAbout:true,
                        showTeam:false,
                        showCareers:false,
                    })
                }
                />
                
            <Section 
                title = {"Team Instamart"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                isVisible={sectionConfig.showTeam}
                setIsVisible= {() =>
                    setsectionConfig({
                        showAbout:false,
                        showTeam:true,
                        showCareers:false,
                    })
                }
                />
            
            <Section 
                title = {"Careers Instamart"} 
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                isVisible={sectionConfig.showCareers}
                setIsVisible= {() =>
                    setsectionConfig({
                        showAbout:false,
                        showTeam:false,
                        showCareers:true,
                    })
                }
                />
        </div>
    );
};

export default Instamart;