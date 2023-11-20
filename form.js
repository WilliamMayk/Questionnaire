import firebase from 'firebase/app'
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATfGoWCBIbBMxiAk79vCfB4Kzt5xqmwBE",
    authDomain: "questionnaire-form-746af.firebaseapp.com",
    databaseURL: "https://questionnaire-form-746af-default-rtdb.firebaseio.com",
    projectId: "questionnaire-form-746af",
    storageBucket: "questionnaire-form-746af.appspot.com",
    messagingSenderId: "952496296623",
    appId: "1:952496296623:web:b40877cd35a2a9a7357a5a"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference the database
  var questionnaireFormDB = firebase.database().ref("questionnaireForm");

  document.getElementById("questionnaireForm").addEventListener("submit",submitForm )

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("companyName");
    var industry = getElementVal("inputIndustry");
    var address = getElementVal("inputAddress");
    var person = getElementVal("inputPerson");
    var email = getElementVal("inputEmail");
    var phoneNumber = getElementVal("inputPhoneNumber");
    var url = getElementVal("inputUrl");
    var socialProfiles = getElementVal("inputSocialProfiles");
    var onlineMarketplaces = getElementVal("onlineMarketplaces");
    var Kpi = getElementVal("inputKPI");
    var option1 = getElementVal("flexOption1");
    var option2 = getElementVal("flexOption2");
    var choice1 = getElementVal("flexChoice1");
    var choice2 = getElementVal("flexChoice2");

    saveMessages(companyName, industry, address, person, email, phoneNumber, url, socialProfiles, onlineMarketplaces, Kpi, option1, option2, choice1, choice2);

    // enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // reset the form
    document.getElementById("questionnaireForm").reset();
  }

  const saveMessages = (companyName, inputIndustry, inputAddress, inputPerson, inputEmail, inputPhoneNumber, inputUrl, inputSocialProfiles, onlineMarketplaces, inputKPI, flexOption1, flexOption2, flexChoice1, flexChoice2) => {
    var newQuestionnaireForm = questionnaireFormDB.push();

    newQuestionnaireForm.set({
      name: companyName, 
      industry: inputIndustry,
      address: inputAddress,
      person: inputPerson, 
      email: inputEmail,
      phoneNumber: inputPhoneNumber,
      url: inputUrl,
      socialProfiles: inputSocialProfiles,
      onlineMarketplaces: onlineMarketplaces,
      Kpi: inputKPI,
      option1: flexOption1,
      option2: flexOption2,
      choice1: flexChoice1,
      choice2: flexChoice2,
      
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

  //13:10