import styles from './contact.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function contact() {
    return(
        <>
        <Head>
            <title>Contact</title>
            <meta property="og:title" content="Contact Lucci Design" />
            <meta property="og:description" content="Contactez-nous pour plus d'informations" />
            <meta property="og:image" content="https://i.ibb.co/xq0yHHJ/logo-lucci-carre.jpg" />
            <meta property="og:url" content="https://luccidesign.tn/contact" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Lucci Design" />
        </Head>
            <div className={styles.propos}>
            <div className={styles.table}>

                <div className={styles.table1}>
                <p className={styles.title}>Nous contacter</p>
                    <br/>
                    <div className={styles.divtable1}>
                        <div className={styles.divtable11}>
                    <div className={styles.div}>
                        <p className={styles.divtitle}>ADRESSE</p>
                        <p className={styles.divpara}>Rond point Meublatex</p>
                    </div>
                    <div className={styles.div}>
                        <p className={styles.divtitle}>CONTACT</p>
                        <p className={styles.divpara}>Téléphone : 98400083</p>
                        <p>Email : contact@luccialu.tn</p>
                    </div>
                    </div>
                    <div className={styles.divtable11}>
                    <div className={styles.div}>
                        <p className={styles.divtitle}>HORAIRES</p>
                        <p className={styles.divpara}>LUN-SAMEDI 9:00 – 19:00h </p>
                    </div>
                    <div className={styles.div}>
                        <p className={styles.divtitle2}>NOUS SUIVRE</p>
                        <div className={styles.svg}>
                        <a href="https://www.facebook.com/luccialu"target="_blank"><svg className={styles.svg1} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg></a>
                        <a href="https://www.instagram.com/luccidesign_"target="_blank"><svg className={styles.svg1} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg></a>
                        <a href='https://www.tiktok.com/@lluccidesign'>
                                <svg className={styles.svg1} fill="" width="25px" height="25px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.table2}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.137418774795!2d10.584531051111249!3d35.87014912709735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b8966df1c95%3A0x26f7d2d817d3a25f!2sLucci%20Design!5e0!3m2!1sfr!2stn!4v1673791045124!5m2!1sfr!2stn" width="600" height="400" style={{border :0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>
        </div>
        </>
    )
}