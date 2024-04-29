import React from 'react';
import { getXataClient } from '../../../../xata'; 
import Link from 'next/link';


const xata  = getXataClient();

export default async function View({ params }: { params: { slug: string } }) {
    
    const view =  await xata.db.products.filter({ id: params.slug }).getFirst();

    return (
      <div className="w-full max-w-5xl mt-16 mx-auto shadow-xl p-10">
        <Link href="/reviews/products/" className="text-3xl">
          &larr; Product Reviews
        </Link>
   
        <h1 className="text-3xl mt-2 mb-2">{view?.subject}</h1>
        <p className="text-xl">{view?.review}</p>
      </div>
    );
  }