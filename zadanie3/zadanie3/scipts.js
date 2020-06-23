function fetchData() {
    fetch('http://localhost/')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            document.getElementById('random').innerHTML = data;
        })
        .catch((err) => console.log('Error: ' + err))
}