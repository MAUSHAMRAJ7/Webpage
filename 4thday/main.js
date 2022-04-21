function myfun(){
    let emailcheck =document.forms["validate"]["emailid"].value;
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regx.test(emailcheck))
    {
        console.log(emailcheck);
    }
    else {
        alert("invalid email")
    }
    // return false;

    let passcheck =document.forms["validate"]["password"].value;
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(reg.test(passcheck))
    {
        console.log(passcheck);
    }
    else {
        alert("invalid password")
    }
    // return false;

    
    let mobcheck = document.forms["validate"]["phone"].value;
    let regmob = /^[0-9][A-Za-z0-9 -]*$/;
    if(regmob.test(mobcheck))
    {
        console.log(mobcheck);
    }
    else {
        alert("invalid phone number");
    }
    // return false;

   
    let checkBoxes = document.getElementsByClassName('sprt');
    let isChecked = false;
    let values = [];
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            //isChecked = true;
            values.push(checkBoxes[i].value);
        }
    };
    console.log(values);
    return false;

}