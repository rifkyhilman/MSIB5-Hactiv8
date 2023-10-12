const activeBox = document.getElementById("activeCases");
const newBox = document.getElementById("newCases");
const recoveredBox = document.getElementById("recoveredCases");
const totalBox = document.getElementById("totalCases");
const totalDeatchBox = document.getElementById("totalDeath");
const totalTestBox = document.getElementById("totalTest");

const tombol = document.getElementById("tombol");
const boxs = document.getElementById("box");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7cb026b615msha0bdf4b27e0adc6p198deejsn21235ab969d0',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};


tombol.addEventListener("click", (event) => {
    event.preventDefault()

    const input = document.getElementById("gsearch").value;


    if (input == ""){
        alert("data tidak boleh kosong !");
    } else {
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${input}`, options)
            .then((result) => result.json())
            .then((data) => renderHTML(data.response[0]))
    }
});


function renderHTML (data) {
    console.log(data)

    if (data !== undefined) {
        activeBox.innerHTML = data.cases.active;
    
        if (data.cases.new !== null) {
            newBox.innerHTML = data.cases.new;
        } else {
            newBox.innerHTML = 0;
        }
    
        recoveredBox.innerHTML = data.cases.recovered;
        totalBox.innerHTML = data.cases.total;
        totalDeatchBox.innerHTML = data.deaths.total;
        totalTestBox.innerHTML = data.tests.total;
    } else {
       boxs.innerHTML = "Negara Tidak ada BROO !!";
        location.reload();
    }

};