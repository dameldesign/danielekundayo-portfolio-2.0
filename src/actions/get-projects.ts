"use server";

import { dummyProjects } from "@/constants/dummy-data";
import { Project } from "@/types";

const getProjects = async (): Promise<Project[]> => {
    try {
        // Return dummy projects data
        return dummyProjects;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getProjects;
