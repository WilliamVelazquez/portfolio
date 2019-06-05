const BASE_API = 'https://us-central1-william-velazquez-portfolio.cloudfunctions.net'//'https://hayd.us-west-1.elasticbeanstalk.com/rest/';

class Api{
  async saveContactInfo(data){
  	try {
      const response = await fetch(
        //`${BASE_API}contact/saveNewContact`,
        `${BASE_API}/contact`,
        {
          method: 'POST',
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
        //throw Error(response.statusText);
      }
      else{
        console.log("response-->",response);
        const responseJSON = await response.json();
        console.log("responseJSON-->",responseJSON);

        //statusCode 200 : 500
        if(responseJSON.cod=="C00000"){
          return { success:true, msg:"Thanks for sharing your information!\nI'll contact you soon :)"}
        }
        else{
          return { success:false, msg:`Error ${responseJSON.cod}: Verify the data provided.`}
          //return { success:false, msg:`Error ${responseJSON.cod}: ${responseJSON.msg}`}
        }
      }
    } catch (error) {
      console.log("Error: " + error);
      //this.setState({loading:false});
      return { success:false, msg:"Error sending the information :(\nPlease try again"}
    }
    //const query = await fetch(`${BASE_API}contact/saveNewContact?data?${data}`);
    //const data = query.json();
    //return true;
  }
}

export default new Api();