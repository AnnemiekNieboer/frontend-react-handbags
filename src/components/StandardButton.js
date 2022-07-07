import React from "react";

function StandardButton({buttonTextContent, disabledStatus}) {
    return (
        <button type="button" disabled={disabledStatus} onClick={() => console.log({buttonTextContent})}>{buttonTextContent}</button>
    )

}

export default StandardButton;