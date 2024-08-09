"use client"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/about.webp"} width={360} height={600} alt="Image of Ms. Lazonda Gardner" />
        </div>
        

        <div className={styles.content}>
            <h2>About The Teacher</h2>

            <p>Ms. Lazonda Gardner is a dedicated educationist with a passion for hands-on learning and practical knowledge application with over 25 years in the education field. With extensive experience in program development, training, and curriculum quality assurance, she has excelled in various educational roles. As the owner of The Xavier Preparatory School and The Gardner Preparatory School LLC in Lancaster, TX, Ms. Gardner oversees daily operations, manages budgets, and ensures the professional growth of her staff and the academic success of her students. She has a rich background in teaching at multiple institutions, including The Art Institute of Dallas and Fort Worth, Prime Prep Academy, Dallas Community College District, and Dallas Independent School District. Ms. Gardner is pursuing a Doctoral Program in Educational Leadership from the University of Phoenix, a Masters Degree in Liberal Arts from Southern Methodist University, at Texas A&M University- Commerce she completed her Teaching Certification, and undergraduate studies at Prairie View A&M- Bachelor of Arts in Advertising.
            </p>
            <Link href="/contact" className="main-link main-link-light">Contact</Link>
        </div>
    </section>
  )
}
