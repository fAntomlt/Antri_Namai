document.querySelector('#formRegister')
.addEventListener('submit', function (event) {
    event.preventDefault();

    const ete = event.target.elements;

    const formData = {
        fullName: ete.fullName.value,
        email: ete.email.value,
        phone: ete.phone.value, 
        visitType: ete.visitType.value,
        animalType: ete.animalType.value,
        date: ete.visitDate.value,
        comments: ete.comments.value
    }

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Registracija sėkminga!');
        this.reset();
    })
    .catch(error => {
        console.error('Klaida:', error);
        alert('Įvyko klaida');
    });
});