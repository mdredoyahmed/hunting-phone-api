const loadephone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);


}
const displayPhones = phonse => {
    //console.log(phonse);
    const phonContainer = document.getElementById('phone-container');
    // clear phone container cards befor adding new cards
    phonContainer.textContent='';
    // display show all button if there are more then 12 phones
     const showAllContainer = document.getElementById('show-allcontainer');
     if(phonse.length>12){
      showAllContainer.classList.remove('hidden');
     }
     else{
      showAllContainer.classList.add('hidden');
     }

    phonse= phonse.slice(0,12);


    phonse.forEach(phone =>{
        //console.log(phone);
        // 2 create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        //3 set inner html
        phoneCard.innerHTML = `
                   <figure>
                      <img
                        src="${phone.image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
    
    `;

    //4 append chiled 

    phonContainer.appendChild(phoneCard);

    });
}

const handleSearch= () =>{
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);
   loadephone(searchText);
}

const handleSearch2 = ()=>{
 const searchField2 = document.getElementById('search-field2');
 const searchText2 = searchField2.value;
 console.log(searchText2);
 loadephone(searchText2)
  
}


//loadephone();