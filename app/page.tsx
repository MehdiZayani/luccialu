import Image from "next/image";
import Slideshow from "../components/slideshow";
import Photo from"../images/Photofabrication.jpg";
import Photo2 from "../images/Menuiserie Aluminium Baie Vitree.jpg"
import PhotoNizar from "../images/nizarzayani.jpg";
import Link from "next/link";
export default function Home() {
    
  return (
    <div>
        
        <Slideshow/>
        <section className="py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative mb-12">
                        <Image className="w-full rounded-md" src={Photo} alt="Image d'une fenetre en fabrication" />

                        <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-gray-100 rounded">
                                <div className="px-10 py-6">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-blue-800 sm:text-4xl">90%</p>
                                        <p className="pl-6 text-sm font-medium text-black sm:text-lg">Clients Satisfaits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                        <h2 className="mt-10 text-3xl font-bold leading-tight text-blue-800 sm:text-4xl lg:text-5xl lg:leading-tight">Notre objectif:</h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">Chez Lucci Alu, votre satisfaction est notre priorité absolue.<br/> C’est pourquoi notre équipe s’engage pleinement dans votre projet de menuiserie, en vous accompagnant à chaque étape pour vous garantir un produit d’excellence.
                        Nous vous proposons une gamme complète de services, allant de l’ingénierie à la maîtrise d’œuvre, en passant par la logistique et la maintenance. Grâce à nos solutions innovantes et performantes, nous répondons à vos exigences tout en respectant votre budget.
                        Élégance intemporelle... Performance durable.</p>
                        <Link href="/contact" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-blue-800 hover:opacity-80 focus:opacity-80" role="button"> Prendre Rendez-vous </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                        <path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#2D3748"/><path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#2D3748"/><path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#4299E1"/>
                    </svg>

                    <h1 className="mt-4 text-xl font-semibold text-blue-800 ">Innovation et Qualité</h1>

                    <p className="mt-2 text-gray-500 ">Lucci Design s’engage à développer des produits en aluminium alliant design, durabilité et performance, tout en intégrant les dernières innovations technologiques.</p>
                </div>
                <div>
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                        <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748"/><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1"/><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1"/>
                    </svg>

                    <h1 className="mt-4 text-xl font-semibold text-blue-800">Satisfaction Client et Service Personnalisé</h1>

                    <p className="mt-2 text-gray-500 ">Offrir des solutions adaptées aux besoins spécifiques des clients en garantissant un service après-vente réactif et efficace.</p>
                </div>

                <div>
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0)"><path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1"/><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748"/><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748"/><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748"/><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs>
                    </svg>

                    <h1 className="mt-4 text-xl font-semibold text-blue-800 ">Maîtrise des coûts et compétitivité tarifaire
                    </h1>

                    <p className="mt-2 text-gray-500 ">Une gestion rigoureuse des ressources et des charges permet d’offrir des produits compétitifs tout en maintenant des standards élevés de qualité.</p>
                </div>
            </div>
        </div>
        </section>
        <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <Image className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={Photo2} alt="image fenetre en aluminum"/>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 className="text-2xl font-semibold text-blue-800  lg:text-3xl lg:w-96">
                    La Qualité 
                </h1>

                <p className="max-w-lg mt-6 text-gray-500  ">
                &quot;Fidèle à son engagement envers ses clients, Lucci Alu place leur satisfaction au cœur de ses priorités en proposant des produits et services répondant aux plus hautes exigences dans le domaine des menuiseries en aluminium. La direction met un point d&quot;honneur à garantir le respect des attentes clients ainsi que des obligations réglementaires et légales.&quot;
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Nizar zayani</h3>
                <p className="text-gray-600 ">Gérant Lucci Alu</p>


            </div>
        </div>
    </div>
        </section>
        <section className="py-10 bg-white sm:py-16 lg:py-20">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                    <h2 className="text-4xl font-bold text-black lg:max-w-md"> Politique <span className="text-blue-600">Qualité</span> et Engagement  Manuel <span className="text-blue-600">Qualité</span></h2>

                    <div className="px-10 mt-8 lg:mt-0 lg:px-0">
                        <div className="sm:flex sm:justify-center lg:justify-end">

                            <Link href="/"  className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                                Voir Document
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white ">
            <div className="relative flex">
                <div className="min-h-screen lg:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

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
        <h1 className="text-center text-4xl my-12">Questions <span className="text-blue-600">Fréquemment</span> Posées </h1>
        <div className="space-y-4 md:w-6/12 mx-auto w-11/12">
            <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">QUELS SONT LES PRODUITS QUE VOUS PROPOSEZ ?</h2>

                <span className="relative size-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                ✅ Portes et fenêtres en aluminium <br />
                ✅ Vérandas et façades vitrées <br />
                ✅ Garde-corps et balustrades <br />
                ✅ Volets roulants et stores <br />
                ✅ Portails, clôtures et portes de garage <br />
                ✅ Cloisons et murs-rideaux <br />
                ✅ Agencements sur mesure pour particuliers et professionnels
                </p>
            </details>

            <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">POURQUOI CHOISIR L&quot;ALUMINIUM POUR VOS MENUISERIES ?</h2>

                <span className="relative size-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                L’aluminium est un matériau léger, résistant et durable, offrant de nombreux avantages : <br />
                ✔️ Esthétique moderne : Finitions élégantes et designs personnalisables <br />
                ✔️ Excellente isolation : Réduction des pertes de chaleur et des nuisances sonores <br />
                ✔️ Résistance aux intempéries : Ne rouille pas et ne se déforme pas <br />
                ✔️ Entretien facile : Un simple nettoyage suffit pour conserver son éclat <br />
                ✔️ Écologique : 100 % recyclable
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">QUELLES SONT LES GARANTIES SUR VOS PRODUITS ?</h2>

                <span className="relative size-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                Nos menuiseries en aluminium sont conçues avec des matériaux de haute qualité et bénéficient de garanties solides sur la durabilité et la performance. Nous assurons également un service après-vente réactif pour toute question ou intervention nécessaire.
                </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">PROPOSEZ-VOUS DES SOLUTIONS POUR LES PROFESSIONNELS ?</h2>

                <span className="relative size-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                Absolument ! Nous collaborons avec des architectes, promoteurs, bureaux d’études et entreprises pour la réalisation de projets sur mesure, qu’il s’agisse de bâtiments commerciaux, bureaux, hôtels ou espaces industriels.                    </p>
            </details>
            <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">COMBIEN DE TEMPS PREND LA FABRICATION ET L’INSTALLATION ?</h2>

                <span className="relative size-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                Le délai dépend du type et de la complexité de votre projet. Une estimation précise vous sera donnée lors de votre demande de devis. Nous nous engageons à respecter des délais rapides et efficaces tout en garantissant une qualité optimale.

        Besoin d’informations supplémentaires ? Contactez-nous, notre équipe se fera un plaisir de vous accompagner ! 😊                    </p>
            </details>
        </div>
    </div>
  );
}
