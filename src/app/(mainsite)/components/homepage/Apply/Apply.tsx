"use client"
import Link from 'next/link';
import styles from './apply.module.css';

export default function Apply(){
return (
 <div className={styles.apply}>
    <h2>Apply Now</h2>

    <div className="center">
        <Link className='main-link' href={"/contact"}>Learn More</Link>
    </div>

    <div className="shader" style={{backgroundColor: "rgba(0,0,0,0.8)"}}></div>
    <img src="/img/apply.webp" alt="image of children with usa flag" className="bg-img" />
 </div>
)};