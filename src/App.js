import React from 'react';
import './App.css';
import StandardButton from "./components/StandardButton";
import tassie1 from "./assets/bag_1.png"
import tassie2 from "./assets/bag_2.png"
import tassie3 from "./assets/bag_3.png"
import tassie4 from "./assets/bag_4.png"
import brandImage from "./assets/brand.png"
import storyImage from "./assets/our_story.png"
import ProductCard from "./components/ProductCard";
import {TileImageLeft, TileImageRight} from "./components/Tile";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <StandardButton
                    buttonTextContent="to the collection"
                    disabledStatus={false}
                />
                <StandardButton
                    buttonTextContent="shop all bags"
                    disabledStatus={false}
                />
                <StandardButton
                    buttonTextContent="pre-orders"
                    disabledStatus={true}
                />
            </nav>
            <main>
                <ProductCard
                    highlightLabel="Best seller"
                    image={tassie1}
                    productName="The handy bag"
                    price="€400,-"
                />

                <ProductCard
                    highlightLabel="Best seller"
                    image={tassie2}
                    productName="The stylish bag"
                    price="€250,-"
                />

                <ProductCard
                    highlightLabel="New collection"
                    image={tassie3}
                    productName="The simple bag"
                    price="€300,-"
                />

                <ProductCard
                    highlightLabel="New collection"
                    image={tassie4}
                    productName="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <TileImageRight
                    header="The brand"
                    paragraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A exercitationem fugiat hic nam omnis
                        quaerat repellendus totam unde voluptatem voluptatibus."
                    paragraph2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A exercitationem fugiat hic nam omnis
                        quaerat repellendus totam unde voluptatem voluptatibus."
                    altText="the brand"
                    image={brandImage}
                />
                <TileImageLeft
                header="Our story"
                paragraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A exercitationem fugiat hic nam omnis
                        quaerat repellendus totam unde voluptatem voluptatibus."
                altText="our story"
                image={storyImage}
                />
            </footer>
        </>

    );
}

export default App;



