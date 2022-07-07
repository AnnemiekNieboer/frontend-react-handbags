import React from "react";

export function TileImageRight({header, altText, image, children}) {
    return (
        <>
            <section>
                <h2>{header}</h2>
                {children}
            </section>
            <section>
                <img alt={altText} src={image}/>
            </section>
        </>
    )
}

export function TileImageLeft({altText, image, header, children}) {
    return (
        <>
            <section>
                <img alt={altText} src={image}/>
            </section>
            <section>
                <h2>{header}</h2>
                {children}
            </section>
        </>
    )

}
