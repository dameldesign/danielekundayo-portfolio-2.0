"use server";

import { dummyReviews } from "@/constants/dummy-data";

const getReviews = async () => {
    try {
        const transformedReviews = dummyReviews.map(review => ({
            name: review.name,
            text: review.review,
            rating: Math.floor(Math.random() * 11) / 10 + 4,
            country: review.company 
        }));
        
        return transformedReviews;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getReviews;
