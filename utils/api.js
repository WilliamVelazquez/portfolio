const BASE_API = 'https://hayd.us-west-1.elasticbeanstalk.com/rest/';

class Api{
  async saveContactInfo(data){
  	try {
      const response = await fetch(
        `${BASE_API}contact/saveNewContact`,
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

        if(responseJSON.cod=="C00000"){
          return { success:true, msg:"Información enviada!"}
        }
        else{
          return { success:false, msg:`Error ${responseJSON.cod}: Verificar los datos ingresados.`}
          //return { success:false, msg:`Error ${responseJSON.cod}: ${responseJSON.msg}`}
        }
      }
    } catch (error) {
      console.log("Error: " + error);
      //this.setState({loading:false});
      return { success:false, msg:"Error al enviar la Información :(\nFavor de intentar nuevamente"}
    }
    //const query = await fetch(`${BASE_API}contact/saveNewContact?data?${data}`);
    //const data = query.json();
    //return true;
  }
}

export default new Api();