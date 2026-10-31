'use client'

import { useState, useRef, useEffect } from "react"

export default function ImageBanner() {
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef()

    useEffect(() => {
        if (imgRef.current.complete) {
            setIsLoaded(true)
        }
    }, [])


    return (
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res" />
            <img ref={imgRef} className="high-res-img" src="med_res/banner.png" alt="banner-high-res" style={{ opacity: isLoaded ? 1 : 0 }} onLoad={() => {
                // when the high resolution image is completely loaded, this callback function will be executed and the intention is to get it to take this initially invisible image, and now make it visible
                setIsLoaded(true)
            }} />
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to the</h3>
                        <h1>Buse's Store</h1>
                    </div>
                    <div>
                          <button onClick={() => {
    const target = [...document.querySelectorAll("#sticker-section .section-header h2")]
        .find(el => el.textContent?.trim() === "Or Collect Your Favorite Tech");

    if (!target) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight || 0;

    const y =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}}>
    Shop stickers
</button>
                       
  <button
    onClick={() => {
        const target = [...document.querySelectorAll(".section-header")]
            .find(el => el.querySelector("h2")?.textContent?.trim() === "Shop Our Selection");

        if (!target) return;

        const header = document.querySelector("header");
        const headerHeight = header?.offsetHeight || 0;

        window.scrollTo({
            top: target.getBoundingClientRect().top
                + window.scrollY
                - headerHeight,
            behavior: "smooth"
        });
    }}
>
    Shop planner
</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

