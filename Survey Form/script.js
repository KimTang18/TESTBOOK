function validate_form ()
{
    valid = true;
    if(document.survey_form.survey_name.value == "")
    {
        alert("Please Enter your Name Section.");
        Valid = false;
    }
    if(document.survey_form.survey_email.value == "")
    {
        alert("Please Enter your Email Section.");
        valid = false;
    }
    if(document.survey_form.survey_role.selectedIndex == 0)
    {
        alert('Please select a role.');
        valid = false;
    }
    if((document.survey_form.user-chance[0].checked == false) && (document.survey_form.user-chance[1].checked == false) && (document.survey_form.user-chance[2].checked == false))
    {
        alert('please select a freecodecamp freind');
        valid = false;
    }
    return valid;
}