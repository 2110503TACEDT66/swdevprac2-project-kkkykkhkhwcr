'use client'
import styles from './styles/banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Banner (){
    const router = useRouter()

    return(
        <div className={styles.banner}>
           <video autoPlay loop muted className={styles.video} >
            <source src="/vdo/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Dental Care Hub</h1>
                <h3 className='text-xl font-serif'>We are the Ministry of Promotion of Learning and Experience of Jura Kites,
                Recognizing the critical significance of oral health, we have established the premier dental care hub in Jura.
                Our mission is to ensure optimal dental wellness for all residents by providing comprehensive dental services and promoting preventive care against oral diseases.</h3>
            </div>
            <div className={styles.welcomeText}>
                <h3 className='text-2xl font-serif hover:text-orange-500 hover:font-semibold'
                onClick={(e)=>{e.stopPropagation(); router.push('doctor')}}>
                Come join us for good oral health.</h3>
            </div>
        </div>
    )
}