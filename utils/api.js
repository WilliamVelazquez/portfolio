const PROTOCOL = 'https://';
const SERVER = 'us-central1'
const PROJECT_ID = 'william-velazquez-portfolio'
const DOMAIN_NAME = 'cloudfunctions.net';
const API_URL = `${PROTOCOL}${SERVER}-${PROJECT_ID}.${DOMAIN_NAME}`;
// const API_URL = 'https://us-central1-william-velazquez-portfolio.cloudfunctions.net'
const CONTACT_SERVICE = '/contact';
const GET_TYPE = 'GET';
const POST_TYPE = 'POST';

class Api{
  async saveContactInfo(data){
  	try {
      const response = await fetch(
        `${API_URL}${CONTACT_SERVICE}`,
        {
          method: POST_TYPE,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      
      if (!response.ok) {
        //console.log("Status-->" + response.status + " | Error: " + response.statusText);
        console.log("response-->",response);
        throw Error(response.statusText);
      }
      else{
        console.log("response-->",response);
        const responseJSON = await response.json();
        console.log("responseJSON-->",responseJSON);

        switch (responseJSON.statusCode) {
          case 200:
            return { success:true, msg:"Thanks for sharing your information! I'll contact you soon :)"}
            break;
          case 400:
            return { success:false, msg:"Invalid information. Please try again with valid data."}
            break;
          case 500:
            return { success:false, msg:"Error sending the information. Please try again."}
            break;
          case 503:
            return { success:false, msg:"Service not available. Please try again later."}
            break;
          default:
            return { success:false, msg:"Server under maintenance :( Please try again later."}
            break;
        }
        // if(responseJSON.statusCode=="200"){
        //   return { success:true, msg:"Thanks for sharing your information!\nI'll contact you soon :)"}
        // }
        // else if(responseJSON.statusCode=="500"){
        //   return { success:false, msg:"Error sending the information :( Please try again."}
        // }
        // else{
        //   return { success:false, msg:"Server under maintenance :(\nPlease try again later."}
        // }
      }
    } catch (error) {
      console.log("Error: " + error);
      return { success:false, msg:"Service not available. Error sending the information :("}
    }
  }
}

export default new Api();