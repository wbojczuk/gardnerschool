"use client"
import Link from 'next/link';
import styles from './approach.module.css';

export default function Approach(){
return (
 <div className={styles.helping}>

    <h2><span className="underline">Our Approach</span></h2>

    <p>Our students learn through the implementation of S.T.E.A.M. (Science Technology Engineering Art Math) and Outdoor School curriculum</p>

    <Link href="/contact" className="main-link">Contact Us</Link>
 
    <img style={{objectPosition: "top"}} src='/img/approach.webp' alt='Image of Volunteers' className='bg-img' />
    <div className='gradient-shader'></div>
 </div>
)};