import axios from 'axios'

const spaceId = process.env.REACT_APP_SPACE_ID;
const environment = process.env.REACT_APP_ENVIRONMENT;
const token = process.env.REACT_APP_TOKEN;
const api = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
        

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
            let config = getRequestData(query);
            const { data: response } = await axios.request(config);
            return response.data.experienceArticleCollection.items;
        } catch (error) {
            console.log(error);
        }
    },
    
    getProjectArticles : async (query) => {
        try {
            let config = getRequestData(query);
            const { data: response } = await axios.request(config);
            return response.data.projectArticleCollection.items;
        } catch (error) {
            console.log(error);
        }
    }


}

export default Contentful;