document.getElementById('vacation-form').onsubmit = () => {
    clearErrors();

    let isValid = true;
    
    let numberOfTravelers = document.getElementById('travelers').value.trim();
    if (numberOfTravelers <= 0) {
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }

    let destination = document.getElementById('destination').value;
    if (destination === "none") {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}