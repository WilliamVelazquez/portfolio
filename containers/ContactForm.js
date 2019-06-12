import React, {PureComponent} from 'react';
import { logEvent } from '../utils/analytics';
import { scrollToClassElement } from '../utils/functions';

import API from '../utils/api';
import ContactFormUI from '../components/ContactFormUI';

const GA_CONTACT_CATEGORY="Contact";
const GA_CONTACT_INVALID_DATA_ACTION="Invalid Data";
const GA_CONTACT_SUCCESS_ACTION="Data Sent Successfully";
const GA_CONTACT_ERROR_ACTION="Error Sending Data";

class ContactForm extends PureComponent{
  state={
    name:'',
    email:'',
    phone:'',
    comments:'',
    askForCall:false,
    validName:true,
    validEmail:true,
    validPhone:true,
    alert:false,
    msg:"",
    success:false,
    loading: false
  }

  startLoading = () => {
    this.setState({
      loading: true
    });
  }

  finishLoading = () => {
    this.setState({
      loading: false
    });
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
      validName: true
    });
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
      validEmail: true
    });
  }

  changePhone = (event) => {
    this.setState({
      phone: event.target.value,
      validPhone: true
    });
  }

  changeComments = (event) => {
    this.setState({
      comments: event.target.value
    });
  }

  changeAskForCall = () => {
    //event
    // console.log("askForCall-->",event.target.value);
    this.setState({
      askForCall:!this.state.askForCall
    });
  }

  validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    let havePhone = phone?true:false;
    if(havePhone){
      return (phone.length>7)?true:false;
    }
    return true;
  }

  validateForm = () => {
    //let valid = false;
    let validName = this.state.name.length>1;
    let validEmail = this.validateEmail(this.state.email);
    let validPhone = this.validatePhone(this.state.phone);
    this.setState({
      validName,
      validEmail,
      validPhone
    });
    return (validName && validEmail);
  }

  handleSubmit = async () => {
    //console.log("State--->",this.state);
    this.startLoading();
    let validForm=this.validateForm();
    if (validForm){
      const { name, email, phone, comments, askForCall } = this.state;
      // let data={
      //   companyName:name,
      //   email,
      //   phoneNumber:phone,
      //   commentary:comments || "Sin observaciones",
      //   callBack: askForCall
      // };
      let data={
        name,
        email,
        phone,
        comments,
        callBack: askForCall
      };
      console.log("Contact Data-->",data);
      const saveContact = await API.saveContactInfo(data);
      console.log("saveContact-->",saveContact);

      if(saveContact.success){
        this.setState({
          name:'',
          email:'',
          phone:'',
          comments:'',
          askForCall:false,
          validName:true,
          validEmail:true,
          validPhone:true,
          alert:true,
          msg:saveContact.msg,
          success:saveContact.success
        }, 
          ()=>{
            logEvent(GA_CONTACT_CATEGORY,GA_CONTACT_SUCCESS_ACTION,`Message-->${this.state.msg}}`)
            this.hideAlert();
          }
        );
      }
      else{
        // console.log(saveContact.msg);
        //alert(saveContact.msg);
        this.setState({
          alert:true,
          msg:saveContact.msg,
          success:saveContact.success
        }, 
          ()=>{
            logEvent(GA_CONTACT_CATEGORY,GA_CONTACT_ERROR_ACTION,`Message-->${this.state.msg}}`)
            this.hideAlert();
          }
        );
      }
    }
    else{
      // console.log("Información no válida!");
      this.setState({
        alert:true,
        msg:"Invalid information!",
        success:false
      }, 
        ()=>{
          logEvent(GA_CONTACT_CATEGORY,GA_CONTACT_INVALID_DATA_ACTION,`Message-->${this.state.msg}}`)
          this.hideAlert();
        }
      );
      //() => alert(saveContact.msg)
      //alert("Información no válida!");
    }
    //Scrolling to the Top of the Page in order to see the message.
    // scrollToTop();
  }

  hideAlert = () => {
    scrollToClassElement('alertBox', 10);
    this.finishLoading();
    setTimeout(() => {
      this.setState({
        alert:false, 
        msg:"",
        success:false
      });
    }, 8000);
    //this.setState({alert:false});
  }

  render() {
    return (
      <div>
        <ContactFormUI 
          {...this.state}
          changeName={this.changeName}
          changeEmail={this.changeEmail}
          changePhone={this.changePhone}
          changeComments={this.changeComments}
          changeAskForCall={this.changeAskForCall}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ContactForm;