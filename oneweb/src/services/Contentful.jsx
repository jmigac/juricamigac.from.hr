import axios from 'axios'

const FUNCTION_APIS = {
    PROJECTS: "https://cache-function.juricamigac.from.hr/projects",
    EXPERIENCES: "https://cache-function.juricamigac.from.hr/experiences"
}

 const Contentful = {

    getExperienceArticles : async () => {
        try {
            const { data: response } = await axios.get(FUNCTION_APIS.EXPERIENCES);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    
    getProjectArticles : async () => {
        try {
            const { data: response } = await axios.get(FUNCTION_APIS.PROJECTS);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export default Contentful;