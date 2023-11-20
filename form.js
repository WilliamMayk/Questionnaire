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
  var questionnaireFormDB = firebase.database().ref('questionnaireForm');

  document.getElementById('questionnaireForm').addEventListener("submit",submitForm )

  function submitForm(e) {
    e.preventDefault();

    var industry = getElementVal("companyName");
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

    console.log(industry,
            address,
            person,
            email,
            phoneNumber,
            url,
            socialProfiles,
            onlineMarketplaces,
            Kpi,
            option1,
            option2);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

  //13:10