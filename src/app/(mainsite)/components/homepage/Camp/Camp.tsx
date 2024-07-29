"use client"

import Link from 'next/link';
import styles from './camp.module.css';

export default function Camp(){
return (
 <div className={styles.opportunites}>
        <h3>Summer Camp</h3>

        <p>We don’t just offer learning during the school year. At The Gardener Preparatory School we offer a summer camp to not only help your children learn more but to have great experiences. </p>
        
        <Link className='main-link' href={"/contact"}>Learn More</Link>

        <img src="/img/camp.png" alt="image of children" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.9)"}}></div>
 </div>
)};