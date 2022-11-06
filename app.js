window.addEventListener('load', function(){
    let searchBtn = this.document.querySelector('#searchBtn');

    searchBtn.addEventListener('click', function(e){
        e.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if(response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('Something has gone wrong.')
                }
            })
            .then(data => {
                let heroList = document.querySelector('#heroList');
                alert(data);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});