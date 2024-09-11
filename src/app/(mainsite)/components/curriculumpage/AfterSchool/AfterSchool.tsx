"use client"
import styles from "./afterschool.module.css"
import Link from "next/link"

export default function AfterSchool() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/afterschool.png"} width={360} height={600} alt="Image of child stirring" />
        </div>
        

        <div className={styles.content}>
            <h2>Before/Afterschool Program</h2>

            <p>Our Before & Afterschool Program offers engaging and enriching activities for students up to age 12. We provide a safe, nurturing environment with a focus on academic support, creative exploration, and physical activity. We also offer transportation from select schools and homes for added convenience. Contact us to learn more about our programs and transportation options!
            </p>
            <Link href="/contact" className="main-link main-link-light">Contact</Link>
        </div>
    </section>
  )
}
