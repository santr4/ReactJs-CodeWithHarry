import React from "react";

function Body({ bodyContent }) {
    return (
        <body>
            <div>
                {[...bodyContent, "ProCoder"].map(val => val)} {/*spread operator*/}
            </div>
        </body>
    )
}

export default Body;