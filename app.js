window.addEventListener('load', function(){
    let searchBtn = this.document.querySelector('#searchBtn');
    let heroName = this.document.querySelector('#heroname');

    console.log(heroName.value);

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
                if(isEmpty(heroName.value)){
                    let heroList = document.querySelector('#result');
                    heroList.innerHTML = data;
                }
                heroList.innerHTML = data;
                

            })
            .catch(error => console.log('There was an error: ' + error));
    });


    function isEmpty(elementValue) {
        if (elementValue.length == 0) {
          // Or you could check if the value == ""
          console.log('field is empty');
          return true;
        }
      
        return false;
    }

});