"use client"
import styles from "./curriculumcontent.module.css"
import Link from "next/link"

export default function CurriculumContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/curriculum.webp"} width={360} height={600} alt="Image of child drawing" />
        </div>
        

        <div className={styles.content}>
            <h2>The Curriculum</h2>

            <p>Our curriculum, Gardner Four Seasons up to 2nd grade, blends S.T.E.A.M. (Science, Technology, Engineering, Art, and Math) with outdoor learning. We envision a future where students learn not just in the classroom but also outside, playing and exploring.
            </p>
            <Link href="/contact" className="main-link main-link-light">Contact</Link>
        </div>
    </section>
  )
}
