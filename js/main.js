/*
====================================================
MAIN WEBSITE JAVASCRIPT
====================================================

This file controls:

- Artwork sections
- Artwork generation
- Scroll effects
- Category sidebar
- Collapse / expand
- Dynamic cursor

DO NOT PUT ARTWORK INFORMATION HERE.

====================================================
*/


/* ==================================================
   SECTION INFORMATION
================================================== */

const sectionInfo = {

    digital: {

        number: "01",

        title: "DIGITAL ART",

        description:
            "Digital illustrations Applications used: Sketchbook and ibis Paint",

        color: "#1be349",

        darkColor: "#00aa3c"
    },


    sketching: {

        number: "02",

        title: "SKETCHING",

        description:
            "Studies, portraits, observations and drawings created through traditional sketching. Tools used: Finelines, Gel, Ball & Fountain pens, Graphite Pencils",

        color: "#c79dfc",

        darkColor: "#ab54f7"
    },


    posters: {

        number: "03",

        title: "POSTERS",

        description:
            "Graphics and Poster Designs created for events, competitions and experiments.",

        color: "#ff5c38",

        darkColor: "#ea3737"
    },


    archives: {

        number: "04",

        title: "ARCHIVES",

        description:
            "Older works, rough drawings, Failed Artworks and experiments that document the evolution of my work.",

        color: "#0072e3",

        darkColor: "#0058b3"
    }

};


/* ==================================================
   CATEGORY ORDER
================================================== */

const categories = [

    "digital",

    "sketching",

    "posters",

    "archives"

];


/* ==================================================
   MAIN ARTWORK CONTAINER
================================================== */

const container =
    document.getElementById(
        "artwork-container"
    );


/* ==================================================
   CREATE ONE ARTWORK
================================================== */

function createArtwork(
    artwork,
    index
) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "artwork";


    article.dataset.category =
        artwork.category;


    article.innerHTML = `

        <div class="artwork-number">

            ${String(index + 1).padStart(2, "0")}

        </div>


        <div class="artwork-image-wrapper">

            <img
                src="${artwork.image}"
                alt="${artwork.title}"
                loading="lazy"
            >


            <div class="artwork-overlay">

                <div class="artwork-info">

                    <span>
                        ${artwork.category.toUpperCase()}
                    </span>


                    <h3>
                        ${artwork.title}
                    </h3>


                    <p>
                        ${artwork.year}
                    </p>


                    <div class="artwork-description">

                        ${artwork.description}

                    </div>

                </div>

            </div>

        </div>

    `;


    return article;

}


/* ==================================================
   CREATE ALL ARTWORK SECTIONS
================================================== */

function createArtworkSections() {


    categories.forEach(
        category => {


            const info =
                sectionInfo[category];


            /*
            ------------------------------------------
            SECTION
            ------------------------------------------
            */

            const section =
                document.createElement(
                    "section"
                );


            section.className =
                "artwork-section collapsed";


            section.dataset.category =
                category;


            section.style.setProperty(
                "--section-color",
                info.color
            );


            section.style.setProperty(
                "--section-dark",
                info.darkColor
            );


            /*
            ------------------------------------------
            SECTION HEADER
            ------------------------------------------
            */

            const header =
                document.createElement(
                    "div"
                );


            header.className =
                "artwork-section-header";


            header.innerHTML = `

                <div class="section-heading-top">

                    <span class="section-number">

                        ${info.number}

                    </span>


                    <span class="section-label">

                        COLLECTION

                    </span>

                </div>


                <h2>

                    ${info.title}

                </h2>


                <div class="section-description">

                    <p>

                        ${info.description}

                    </p>


                <button
                    class="collapse-button"
                    type="button"
                >
                <span>
                        EXPAND
                    </span>

                    <strong>
                        +
                    </strong>
                </button>

                </div>

            `;


            /*
            ------------------------------------------
            ARTWORK WRAPPER
            ------------------------------------------
            */

            const artworkWrapper =
                document.createElement(
                    "div"
                );


            artworkWrapper.className =
                "section-artworks";

            if (category === "archives") {

                artworkWrapper.classList.add(
                    "archive-board"
                );

            }

            /*
            ------------------------------------------
            GET ARTWORKS FOR THIS CATEGORY
            ------------------------------------------
            */

            const categoryArtworks =
                artworks.filter(
                    artwork =>
                        artwork.category === category
                );


            /*
            ------------------------------------------
            ADD ARTWORKS
            ------------------------------------------
            */

            categoryArtworks.forEach(
                (artwork, index) => {

                    const artworkElement =
                        createArtwork(
                            artwork,
                            index
                        );


                    if (category === "archives") {

                        artworkElement.classList.add(
                            "archive-piece"
                        );

                    }


                    artworkWrapper.appendChild(
                        artworkElement
                    );

                }
            );


            /*
            ------------------------------------------
            ADD TO SECTION
            ------------------------------------------
            */

            section.appendChild(
    header
);


            section.appendChild(
                artworkWrapper
            );


            /* ================================================
            CREATIVE DESK DECORATIONS
            ================================================ */

            if (category === "archives") {

                const notes = [

                    {
                        text: "Rough Skeches",
                        className: "note-one"
                    },

                    {
                        text: "maybe this?",
                        className: "note-two"
                    },

                    {
                        text: "Dumped",
                        className: "note-three"
                    },

                    {
                        text: "✕",
                        className: "note-four"
                    },

                    {
                        text: "messed up",
                        className: "note-five"
                    },

                    {
                        text: "Timepaas...",
                        className: "note-six"
                    },

                    {
                        text: "Old sketches",
                        className: "note-seven"
                    },

                    {
                        text: "h",
                        className:
                            "scribble scribble-one"
                    },

                    {
                        text: "",
                        className:
                            "scribble scribble-two"
                    },

                    {
                        text: "",
                        className:
                            "paper-scrap scrap-one"
                    },

                    {
                        text: "",
                        className:
                            "paper-scrap scrap-two"
                    }

                ];


                notes.forEach(noteData => {

                    const note =
                        document.createElement(
                            "div"
                        );


                    note.className =
                        `desk-note ${noteData.className}`;


                    note.textContent =
                        noteData.text;


                    artworkWrapper.appendChild(
                        note
                    );

                });

            }


            container.appendChild(
                section
            );


            /*
            ------------------------------------------
            COLLAPSE BUTTON
            ------------------------------------------
            */

            const isCollapsed =
                section.classList.contains(
                    "collapsed"
                );

            const collapseButton =
                header.querySelector(
                    ".collapse-button"
                );


            collapseButton.addEventListener(
                "click",
                () => {


                    section.classList.toggle(
                        "collapsed"
                    );


                    const isCollapsed =
                        section.classList.contains(
                            "collapsed"
                        );


                    collapseButton
                        .querySelector("span")
                        .textContent =
                        isCollapsed
                            ? "EXPAND"
                            : "COLLAPSE";


                    collapseButton
                        .querySelector("strong")
                        .textContent =
                        isCollapsed
                            ? "+"
                            : "−";

                }
            );

        }
    );

}


/* ==================================================
   CREATE SECTIONS
================================================== */

createArtworkSections();


/* ==================================================
   ARTWORK SCROLL EFFECT
================================================== */

const artworkElements =
    document.querySelectorAll(
        ".artwork:not(.archive-piece)"
    );

const artworkObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {


                        artworkElements.forEach(
                            artwork => {

                                artwork.classList.remove(
                                    "active"
                                );

                            }
                        );


                        entry.target.classList.add(
                            "active"
                        );


                    }

                }
            );

        },

        {

            root: null,

            rootMargin:
                "-35% 0px -35% 0px",

            threshold: 0

        }

    );


artworkElements.forEach(
    artwork => {

        artworkObserver.observe(
            artwork
        );

    }
);


/* ==================================================
   SIDEBAR
================================================== */

const categoryButtons =
    document.querySelectorAll(
        ".category-link"
    );


/* ------------------------------------------
   Highlight sidebar category
------------------------------------------ */

function updateCategory(
    category
) {

    categoryButtons.forEach(
        button => {

            button.classList.toggle(

                "active",

                button.dataset.category ===
                    category

            );

        }
    );

}


/* ------------------------------------------
   Observe sections
------------------------------------------ */

const sectionElements =
    document.querySelectorAll(
        ".artwork-section"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        updateCategory(
                            entry.target.dataset.category
                        );

                    }

                }
            );

        },

        {

            rootMargin:
                "-30% 0px -60% 0px",

            threshold: 0

        }

    );


sectionElements.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* ------------------------------------------
   Sidebar click
------------------------------------------ */

categoryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {


                const category =
                    button.dataset.category;


                const targetSection =
                    document.querySelector(

                        `.artwork-section[data-category="${category}"]`

                    );


                if (targetSection) {

                    targetSection.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    }
);


/* ==================================================
   CUSTOM DYNAMIC CURSOR
================================================== */

const customCursor =
    document.querySelector(
        ".custom-cursor"
    );


if (

    customCursor &&

    window.matchMedia(
        "(pointer: fine)"
    ).matches

) {


    document.body.classList.add(
        "custom-cursor-enabled"
    );


    let mouseX = 0;

    let mouseY = 0;

    let cursorX = 0;

    let cursorY = 0;


    /* ------------------------------------------
       Mouse position
    ------------------------------------------ */

    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        }
    );


    /* ------------------------------------------
       Smooth movement
    ------------------------------------------ */

    function animateCursor() {


        cursorX +=
            (mouseX - cursorX) *
            0.18;


        cursorY +=
            (mouseY - cursorY) *
            0.18;


        customCursor.style.transform =

            `translate3d(
                ${cursorX}px,
                ${cursorY}px,
                0
            )
            translate(-50%, -50%)`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /* ------------------------------------------
       Buttons + links
    ------------------------------------------ */

    const interactiveElements =
        document.querySelectorAll(
            "a, button"
        );


    interactiveElements.forEach(
        element => {


            element.addEventListener(
                "mouseenter",
                () => {

                    customCursor.classList.add(
                        "cursor-large"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    customCursor.classList.remove(
                        "cursor-large"
                    );

                }
            );

        }
    );


    /* ------------------------------------------
       Headings
    ------------------------------------------ */

    const headings =
        document.querySelectorAll(
            "h1, h2, h3"
        );


    headings.forEach(
        heading => {


            heading.addEventListener(
                "mouseenter",
                () => {

                    customCursor.classList.add(
                        "cursor-heading"
                    );

                }
            );


            heading.addEventListener(
                "mouseleave",
                () => {

                    customCursor.classList.remove(
                        "cursor-heading"
                    );

                }
            );

        }
    );


    /* ------------------------------------------
       Artwork
    ------------------------------------------ */

    artworkElements.forEach(
        artwork => {


            artwork.addEventListener(
                "mouseenter",
                () => {

                    customCursor.classList.remove(
                        "cursor-large",
                        "cursor-heading"
                    );


                    customCursor.classList.add(
                        "cursor-artwork"
                    );

                }
            );


            artwork.addEventListener(
                "mouseleave",
                () => {

                    customCursor.classList.remove(
                        "cursor-artwork"
                    );

                }
            );

        }
    );

}