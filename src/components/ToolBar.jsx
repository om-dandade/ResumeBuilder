
export default function ToolBar({setAboutClosed}){
    function reload(){
        if(window.confirm("Are you sure you want to reload default info?")){
            window.location.reload();
        }
    }

    return(
        <div className="tooBar">
            <button className="tool" onClick={reload} >Reload</button>
            <button onClick={() => setAboutClosed(false)} className="tool">About</button>
        </div>
    );
}

function AboutPage({isAboutClosed, setAboutClosed}){
    if(isAboutClosed)return null;
    return(
        <div className="aboutPageBackgroud">
            <div className="aboutPage">
                <button className="crossButton" onClick={() => setAboutClosed(true)}></button>
                <h1>About</h1>
                <p>Welcome to my Resume Builder!</p>
                <p className="contentText">
                    This project is a showcase of my React development skills, with a focus on efficiently managing 
                    and rendering state. The entire application is built with React, utilizing a state-driven 
                    architecture to handle dynamic updates and user interactions seamlessly.
                </p>
                <div className="contentText textAlightLeft">
                    <h2>Key Features:</h2>
                    <h4>Real-time Updates with State Management</h4>
                    <p>The resume preview updates in real-time as you input data, all powered by React's state management. The left section allows for data input, and the right side renders the resume instantly, demonstrating the efficient use of multiple states.</p>

                    <h4>Collapsible Sections</h4>
                    <p>I have implemented collapsible sections to keep the UI clean and organized. The entire structure is managed through React states to ensure that only the necessary parts of the application render when needed.</p>

                    <h4>Custom Scrolling and Syncing</h4>
                    <p>When editing different sections, the preview on the right automatically scrolls to the relevant section. This feature demonstrates how React state can be leveraged to sync user inputs with visual components across the page.</p>

                    <h4>Optimized Rendering</h4>
                    <p>With use of <code>React.memo</code> and other techniques to prevent unnecessary re-renders, the app remains efficient, even with complex state management. This ensures smooth performance, which is a key consideration in React development.</p>
                </div>
                <p className="contentText">This project serves as a practical example of my understanding of React, particularly in handling dynamic UIs, managing component states, and optimizing rendering behavior.</p>
                <div className="centeredItems">
                    <a>Know more about me: </a>
                    <button className="circularButton linkedinButton" onClick={() => window.open("https://www.linkedin.com/in/om-dandade/", "_blank")}></button>
                    <button className="circularButton githubButton" onClick={() => window.open("https://github.com/om-dandade", "_blank")}></button>
                </div>
            </div>
        </div>
    )
}

export {ToolBar, AboutPage};