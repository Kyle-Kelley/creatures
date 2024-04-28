import React from 'react';
import { getXataClient } from "../../../xata";

const xata  = getXataClient();

export default async function Submit(){
    
    const prodReview = await xata.db.products.create({
        
    })

}
