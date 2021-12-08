import React from "react";

function Loader({loading}) {
    return(
        <div>
            {loading && 
                <div className="loader">
                    <span></span>
                </div>
            }
        </div>
    )
}

export default Loader;