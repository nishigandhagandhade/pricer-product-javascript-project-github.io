

const form = document.getElementById("myform"); //form access

const handleform = (e) => {

    e.preventDefault()  //data not value is refresh or reload

    const name = document.forms["myform"]["name"].value; // user input take the  access value



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4c43914c37mshf4aa34540da05afp1ea53ajsncce84a016d3b',
            'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
        }
    };

    fetch(`https://pricer.p.rapidapi.com/str?q=${name}`, options)  //API fetch
        .then(response => response.json())
        .then(response => {



            response.map((cval) => {                         //map function method use new array create


                document.getElementById("result").innerHTML += `
                
                <div class=" div col-md-4 mt-5">
                <div class="divscard bg-dark text-white text-center mt-5" style="width: 18rem ;">
                <img src="${cval.img}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${cval.title}</h5>
                   <p class="card-text">${cval.rating}</p>
                   <h3 class="text-danger">price${cval.price}</h3>
                   <a href="${cval.link}" class="btn btn-primary">Read More</a>
                    </div>
                   </div>
                </div>
                
                
                `


            })
        })
        .catch(err => console.error(err));


}



form.addEventListener("submit", handleform)