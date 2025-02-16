import Image from "next/image"
import PhotoNizar from "../../images/nizarzayani.jpg";


export default function quiSommesNous(params) {
    return(
        <>
            <h1 className="text-center text-4xl">Qui Sommes Nous ?</h1>
            <section className="bg-white ">
            <div className="relative flex">
                <div className="min-h-screen lg:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen  lg:block"></div>

                <div
                    className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                        Notre <span className="text-blue-800">Fondateur</span> <br/> Nizar Zayani
                    </h1>

                    <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                        <Image className="object-cover object-center w-full lg:w-[32rem] rounded-lg " src={PhotoNizar} alt="Photo du Fondateur Nizar Zayani"/>

                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-blue-800  lg:w-72">
                            LUCCI ALU : L’Excellence en Menuiserie Aluminium
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 ">
                                “ Fondée par <span className="text-blue-500"> Nizar Zayani</span>, expert aguerri en menuiserie aluminium,<span className="text-blue-500">LUCCI ALU</span>  incarne le savoir-faire et l’innovation. Fort d’une expérience solide au sein des plus grandes entreprises du secteur, il a su décrypter les attentes des clients tunisiens pour leur offrir des solutions à la hauteur de leurs exigences.

En <span className="text-blue-500">2023</span>, il donne naissance à <span className="text-blue-500">LUCCI ALU</span> avec une ambition claire : <span className="text-blue-500">révolutionner la menuiserie aluminium</span> en alliant qualité supérieure, design raffiné et performance durable. ”
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            </section>

        </>
    )
}