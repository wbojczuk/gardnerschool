"use client"
import styles from "./steam.module.css"
import Link from "next/link"

export default function STEAM() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/steam.png"} width={360} height={600} alt="Image of child drawing" />
        </div>
        

        <div className={styles.content}>
            <h2>Outdoor School and S.T.E.A.M</h2>

            <p>A S.T.E.A.M. and outdoor curriculum for students ages 0 to 2nd grade combines early childhood education with hands-on exploration in nature. It focuses on developing critical thinking and creativity through activities that blend science, technology, engineering, arts, and math with outdoor play. Children engage in age-appropriate experiments, nature walks, and creative projects that encourage curiosity, problem-solving, and a love for learning.
            </p>
            <Link href="/contact" className="main-link main-link-light">Contact</Link>
        </div>
    </section>
  )
}
