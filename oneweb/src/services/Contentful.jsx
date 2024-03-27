import axios from 'axios'

const spaceId = process.env.REACT_APP_SPACE_ID;
const environment = process.env.REACT_APP_ENVIRONMENT;
const token = process.env.REACT_APP_TOKEN;
const api = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

const FUNCTION_APIS = {
    PROJECTS: "https://cache-function.juricamigac.from.hr/projects",
    EXPERIENCES: "https://cache-function.juricamigac.from.hr/experiences"
}

function getRequestData(query) {
    let data = JSON.stringify({
        query: query,
        variables: {}
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: api,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      return config;
}

 const Contentful = {

    getExperienceArticles : async (query) => {
        try {
            const { data: response } = await axios.get(FUNCTION_APIS.EXPERIENCES);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    
    getProjectArticles : async (query) => {
        try {
            const { data: response } = await axios.get(FUNCTION_APIS.PROJECTS);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export default Contentful;