

function loadMe(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (let i in months){
        console.log("dubibidid");
        var current = document.getElementById("display").innerHTML;
        
        
        switch (months[i]){
            case "January":
                holidays = "New Year's Day and Martin Luther King Jr. Day!" + "<br>";
                break;
            case "February":
                holidays = "Valentine's Day and Mardi Gras!" + "<br>";
                break;
            case "March":
                holidays = "Saint Patrick's Day and Vernal Equinox!" + "<br>";
                break;
            case "April":
                holidays = "April Fool's Day and Easter!" + "<br>";
                break;
            case "May":
                holidays = "Cinco de Mayo and Mother's Day!" + "<br>";
                break;
            case "June":
                holidays = "Juneteenth and Father's Day!" + "<br>";
                break;
            case "July":
                holidays = "Independence Day and Liberty Bell Day!" + "<br>";
                break;
            case "August":
                holidays = "Friendship Day and Ecuador Independence Day!" + "<br>";
                break;
            case "September":
                holidays = "Grandparents Day and Autumnal Equinox!" + "<br>";
                break;
            case "October":
                holidays = "Columbus Day and Halloween!" + "<br>";
                break;
            case "November":
                holidays = "Thanksgiving and Election Day!" + "<br>";
                break;
            case "December":
                holidays = "Christmas and New Year's Eve!" + "<br>";
                break;
        }

        document.getElementById("display").innerHTML = current + "The month is " + months[i] + ". The holidays this month are " + holidays;
    }
}