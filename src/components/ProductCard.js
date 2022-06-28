import React from "react";

function ProductCard({highlightLabel, image, productName, price}) {
    return (
        <article>
                  <span>
                      {highlightLabel}
                  </span>
            <img alt={productName} src={image}/>
            <p>
                {productName}
            </p>
            <h4>
                {price}
            </h4>
        </article>
    )
}

export default ProductCard;