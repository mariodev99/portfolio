import { DocumentData, collection, getDocs } from "firebase/firestore"; 
import {firestore} from "@/firebase/config"
import { projectData } from "@/components/sections/HomeProjects";
import { ProjectDataType } from "@/types";

export const getProjects = async (): Promise<ProjectDataType[]> => {
    let projects: ProjectDataType[] = [];

    try {
        const querySnapshot = await getDocs(collection(firestore, "projects"));
        
        querySnapshot.forEach((doc) => {
            if (doc.exists()) {
                const projectData = doc.data() as ProjectDataType; 
                projects.push(projectData);
            }
        });

        return projects;
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        throw error; 
    }
};