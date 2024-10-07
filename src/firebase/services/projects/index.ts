import { DocumentData, collection, getDocs, orderBy, query } from "firebase/firestore"; 
import {firestore} from "@/firebase/config"
import { ProjectDataType } from "@/types";

export const getProjects = async (): Promise<ProjectDataType[]> => {
    let projects: ProjectDataType[] = [];

    try {
        const projectsQuery = query(collection(firestore, "projects"), orderBy("position", "asc"));
        const querySnapshot = await getDocs(projectsQuery);

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