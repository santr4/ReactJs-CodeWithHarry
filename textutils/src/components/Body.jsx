import React from "react";

function Body({ bodyContent }) {
    return (
        <body>
            <div>
                <bold>
                {[...bodyContent, "Welcome "].map(val => val)} {/*spread operator*/}
                </bold>
            </div>
        </body>
    )
}

export default Body;