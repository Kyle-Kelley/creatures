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
        subject: "",
        category: "",
        subCategory: '',
        review: "",
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

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault;
        try {
            const response = await xata.db.products.create({
                subject: `{subject.value}`,
                category: `{category.value}`,
                subCategory: `{subCategory.value}`,
                review: `{review.value}`,
                product: `{product.value}`,
                link: `{link.value}`,
                author: `{author.author}`
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form id="ProductReview" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor='subject'></label>
                        <input value={formData.subject} type="text" name="subject" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='category'></label>
                        <input value={formData.category} type="text" name="category" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='subCategory'></label>
                        <input value={formData.subCategory} type="text" name="subCategory" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='product'></label>
                        <input value={formData.product} type="text" name="product" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='review'></label>
                        <input value={formData.review} type="text" name="review" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='link'></label>
                        <input value={formData.link} type="text" name="link" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='pictures'></label>
                        <input type="file" name="pictures" id="" onChange={handleChange}></input>
                    </li>
                    <li>
                        <label htmlFor='author'></label>
                        <input value={formData.author} type="text" name="author" id="" onChange={handleChange}></input>
                    </li>
                </ul>
            </form>
        </div>
    )

}
