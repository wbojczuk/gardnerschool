"use client"

import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.content}>
            <h1>The Gardner <br /> <span>Preparatory School</span></h1>
        </div>

        <div className={styles.content}>
            <p>The Gardener Preparatory School is a private early childhood and elementary school serving children up to the 2nd grade. We harness the natural curiosity of children to teach math, language arts, cultural studies, and science through discovery-based learning. Our approach ensures that students engage deeply with their education, fostering a love for learning from an early age.</p>

            <div className={styles.buttonWrapper}>
                <Link className="main-link" href="/contact">Contact Us</Link>
            </div> 
        </div>

        <div style={{backgroundColor: "rgba(0,0,0,.7)"}} className="shader"></div>
        <img src="/img/header.png" alt="Image of Bible" className="bg-img" />
    </header>
  )
}
