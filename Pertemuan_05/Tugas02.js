// Id Buttons
const btnEdit = document.getElementById('btnEdit')
const btnForm = document.getElementById('myForm')

// Form Items
const formName = document.getElementById('formName');
const formRole = document.getElementById('formRole');
const formAvailability = document.getElementById('formAvailability');
const formAge = document.getElementById('formAge');
const formLokasi = document.getElementById('formLokasi');
const formExperience = document.getElementById('formExperience');
const formEmail = document.getElementById('formEmail');
const submitButton = document.getElementById('submitButton');


// Item Target
const namaTarget = document.getElementById('namaTarget');
const roleTarget = document.getElementById('roleTarget');
const availabilityTarget = document.getElementById('availabilityTarget');
const usiaTarget = document.getElementById('usiaTarget');
const lokasiTarget = document.getElementById('lokasiTarget');
const pengalamanTarget = document.getElementById('pengalamanTarget');
const emailTarget = document.getElementById('emailTarget');


submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const currentName = formName.value;
    const currentRole = formRole.value;
    const currentAvailability = formAvailability.value;
    const currentUsia = formAge.value;
    const currentLokasi = formLokasi.value;
    const currentPengalaman = formExperience.value;
    const currentEmail = formEmail.value;


    emailTarget.innerHTML = currentEmail;
    pengalamanTarget.innerHTML = currentPengalaman;
    lokasiTarget.innerHTML = currentLokasi;
    usiaTarget.innerHTML = currentUsia;
    namaTarget.innerHTML = currentName;
    roleTarget.innerHTML = currentRole;
    availabilityTarget.innerHTML = currentAvailability;

    btnForm.classList.toggle('hide');
});

btnEdit.addEventListener('click', () => {
    btnForm.classList.toggle('hide');
});