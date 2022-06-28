import React from "react";

export function TileImageRight({header, paragraph1, paragraph2, altText, image}) {
    return (
        <>
            <section>
                <h2>{header}</h2>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
            </section>
            <section>
                <img alt={altText} src={image}/>
            </section>
        </>

    )
}

export function TileImageLeft({altText, image, header, paragraph1, paragraph2}) {
    return (
        <>
            <section>
                <img alt={altText} src={image}/>
            </section>
            <section>
                <h2>{header}</h2>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
            </section>
        </>
    )

}
