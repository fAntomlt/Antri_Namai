function submitDonation() {
    var amount = document.getElementById('donationAmount').value;
    
    // Patikrinti, ar įvesta suma
    if(amount && amount > 0) {
        // Išvedame į konsolę
        console.log("Paaukota suma: €" + amount);

        // Išvedame "AČIŪ!" žinutę į HTML
        document.getElementById('thanksMessage').innerText = "AČIŪ!";

        // Išvalyti laukelį po paaukos
        document.getElementById('donationAmount').value = '';
    } else {
        alert("Prašome įvesti teisingą sumą.");
    }
}