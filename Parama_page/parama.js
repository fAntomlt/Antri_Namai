function submitDonation() {
    let amount = document.getElementById('donationAmount').value;
    
    if(amount && amount > 0) {
        console.log("Paaukota suma: €" + amount);

        document.getElementById('thanksMessage').innerText = "AČIŪ!";

        document.getElementById('donationAmount').value = '';
    } else {
        alert("Prašome įvesti teisingą sumą.");
    }
}