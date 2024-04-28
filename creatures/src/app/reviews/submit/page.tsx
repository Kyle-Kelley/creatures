"use client"

import {useState} from 'react';
import { getXataClient } from "../../../xata";

const xata  = getXataClient();

interface createReviewState {
    category: string,
    subCategory: string,
    review: string,
    subject: string,
    product: string,
    link: string,
    author: string,
    pictures: File
};

export default async function Submit(){
    const [formData, setFormData] = useState<createReviewState> ({
        category: "",
        subCategory: '',
        review: "",
        subject: "",
        product: "",
        link: "",
        author: "",
        pictures: {
            lastModified: 0,
            name: '',
            webkitRelativePath: '',
            size: 0,
            type: '',
            arrayBuffer: function (): Promise<ArrayBuffer> {
                throw new Error('Function not implemented.');
            },
            slice: function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                throw new Error('Function not implemented.');
            },
            stream: function (): ReadableStream<Uint8Array> {
                throw new Error('Function not implemented.');
            },
            text: function (): Promise<string> {
                throw new Error('Function not implemented.');
            }
        }
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData: createReviewState) => ({...prevData, [name]: value}))
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault;
        try {
            const response = await xata.db.products.create({
        
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    

}
