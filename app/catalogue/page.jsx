import Image from "next/image"
import Photo from"../../images/Photofabrication.jpg";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import PhotoFenetre from "../../images/imagefenetres.png"
import EchantillonFenetre from "../../images/serie67Ellipse.png"
import FenetreCoulissante from "../../images/FenêtreCoulissanteAluminiumSurMesure.jpg"
import Fenetrefrancaise from"../../images/Portefenêtrealu2vantaux.webp"
import PhotoCoulissante from"../../images/BaievitréeAluminium.png"
export default function catalogue(params) {
    return(
        <>
            <h1 className="mt-10 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight text-center "> NOTRE CATALOGUE</h1>
            <div>
                <div className="flex">
                    <h2 className="mt-10 text-xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight bg-blue-800 text-white rounded p-4 "> Une Gamme Complète de Produits et Services</h2>
                </div>
                <h4 className="mt-10 text-lg font-bold leading-8 text-blue-800 sm:text-4xl lg:text-5xl lg:leading-tight uppercase"> <span className="bg-blue-800 text-white p-2" >1</span> Fenêtre / Porte Fenêtre coulissante</h4>
                <div className="w-11/12 md:w-8/12 mx-auto items-center ">
                    <div className="relative mb-12">
                        <Image className="w-full rounded-md" src={FenetreCoulissante} alt="Image d'une fenetre en fabrication" />
                        <div className="absolute w-full max-w-xl px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-gray-100 rounded">
                                <div className="px-10 py-6">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-blue-800 sm:text-4xl">SÉRIE 67</p>
                                        <p className="pl-6 text-sm font-medium text-black sm:text-lg">LIGNE DROITE ELLIPSE TPR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-900  w-auto md:pl-10 pl-3">
            <h1 className=" text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight text-white uppercase pt-10 ">  Fenêtre / Porte Fenêtre coulissante</h1>
            <h4 className=" text-xl font-bold leading-tight  sm:text-2xl lg:text-3xl lg:leading-tight text-white uppercase ">  SÉRIE 67 LIGNE DROITE ELLIPSE TPR</h4>
                <div className="pt-10 pb-16">
                    <p className="text-white">- PROFILÉ PÉRIMÉTRAL DE 40MM AVEC OU SANS COUVRE-JOINT</p>
                    <p className="text-white">- TRAVERSE HAUTE ET BASSE D'UNE ÉPAISSEUR DE 29MM.</p>
                    <p className="text-white">- MONTANT LATÉRAL D'UNE ÉPAISSEUR DE 29MM.</p>
                    <p className="text-white">- MONTANT CENTRAL SIMPLE D'UNE ÉPAISSEUR DE 29MM OU RENFORCÉ DE 60MM.</p>
                    <p className="text-white">- ASSEMBLAGE PAR COUPE DROITE AVEC EMBRÈVEMENT ET VIS SPÉCIALES EN ACIER INOXYDABLE.</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row mt-10">
                    <div className="w-5 mr-5 bg-blue-900"></div>
                        <h1 className="uppercase text-white bg-blue-900  text-3xl p-3">Type d'ouverture</h1>
                </div>
        
                <Image className="mx-auto mt-8" src={PhotoCoulissante} alt="Photo Type D'ouverture"/>
            </div>
            <div className="flex md:flex-row mt-10 ">
                    <div className="w-5 mr-5 bg-blue-900"></div>
                    <h1 className="uppercase text-white bg-blue-900  text-3xl p-3">Caractéristiques</h1>
                </div>
            <div className="flex flex-wrap ml-12 mt-12 flex-col md:flex-row">
                <div className="flex flex-col ml-5 my-auto text-xl">
                    <div>
                        <p>- Ligne Droite ou Arrondi</p>
                        <p>- Dormant épaisseur 40mm</p>
                        <p>- Ouvrant épaisseur 29mm</p>
                        <p>- Double vitrage jusqu'à 20mm</p>
                        <p>- Hautteur maximale par vantail jusqu'à 2,5m</p>
                    </div>
                    <div>
                        <p>- Largeur maximale par vantail jusqu'à 1,2m</p>
                        <p>- Poids par vantail jusqu'à 160kg</p>
                        <p>- Dormant avec couvre-joint intégré ou rapporté</p>
                        <p>- Etanchéité A.E.V renforcée A*3 E*7B V*C3</p>
                    </div>
                </div>
            <Image className=" mx-auto md:w-4/12 w-8/12 border" src={EchantillonFenetre} alt="Echantillon Fenetre"/>
            </div>
            <h4 className="mt-10 text-lg font-bold leading-8 text-blue-800 sm:text-4xl lg:text-5xl lg:leading-tight uppercase md:text-right text-left"> <span className="bg-blue-800 text-white p-2" >2</span>FENÊTRE / PORTE FENÊTRE À LA FRANÇAISE</h4>
            <div className="w-11/12 md:w-8/12 mx-auto items-center ">
                    <div className="relative mb-12">
                        <Image className="w-full rounded-md" src={Fenetrefrancaise} alt="Image d'une fenetre en fabrication" />
                        <div className="absolute w-full max-w-xl px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-gray-100 rounded">
                                <div className="px-10 py-6">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-blue-800 sm:text-4xl">SÉRIE 40</p>
                                        <p className="pl-6 text-sm font-medium text-black sm:text-lg">LIGNE DROITE ELLIPSE TPR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="bg-blue-900  w-auto md:pl-10 pl-3">
            <h1 className=" text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight text-white uppercase pt-10 ">FENÊTRE / PORTE FENÊTRE À LA FRANÇAISE</h1>
            <h4 className=" text-xl font-bold leading-tight  sm:text-2xl lg:text-3xl lg:leading-tight text-white uppercase ">SÉRIE 40 LIGNE DROITE ELLIPSE TPR</h4>
                <div className="pt-10 pb-16 uppercase">
                    <p className="text-white">- Dormant en profilé simple tubulaire de 40mm d'épaisseur avec couvre joint intégré.</p>
                    <p className="text-white">- parclose de hauteur 21mm elliptiques à clipsage de face sans pièces d'angle.</p>
                    <p className="text-white">- ouvrant en profilé tubulaire de 47mm d'épaisseur, avec cage de portes.</p>
                    <p className="text-white">- couvre joint arrondi.</p>
                    <p className="text-white">- rejet d'eau en protégeant l'appuis de FENÊTRE des infoltrations d'eau.</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row mt-10">
                    <div className="w-5 mr-5 bg-blue-900"></div>
                        <h1 className="uppercase text-white bg-blue-900  text-3xl p-3">Type d'ouverture</h1>
                </div>
        
                <Image className="mx-auto mt-8" src={PhotoFenetre} alt="Photo Type D'ouverture"/>
            </div>
        </>
    )
}