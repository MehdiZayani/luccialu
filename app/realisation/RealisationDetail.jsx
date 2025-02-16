// pages/ProductDetail.js
import { useRouter } from 'next/router';
import AllData from '../components/réalisation/AllData';
import Image from 'next/image';
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link';
const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Récupère les détails du produit en fonction de l'ID
  const product = AllData.find((value) => value.id === parseInt(id));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center w-9/12 mx-auto'>
      <div className='flex'>
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#000000"/>
        </svg>
        <Link href="realisation" className='pt-4'>Retour aux Réalisations</Link>
      </div>
            <div className='flex flex-col gap-6 lg:w-2/4'>
              <Zoom>
                <img src={product.image}  alt="" className='w-full h-full aspect-square object-cover rounded-xl'/></Zoom>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>{product.category}</span>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                </div>
                <p className='text-gray-700'>
                {product.desc}
                </p>
            </div>
        </div>
    </div>
  );
};

export default ProductDetail;
