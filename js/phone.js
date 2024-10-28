const loadephone = async (searchText='13',isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);


}
const displayPhones = (phonse,isShowAll )=> {
    //console.log(phonse);
    const phonContainer = document.getElementById('phone-container');
    // clear phone container cards befor adding new cards
    phonContainer.textContent='';
    // display show all button if there are more then 12 phones
     const showAllContainer = document.getElementById('show-allcontainer');
     if(phonse.length>12 && !isShowAll){
      showAllContainer.classList.remove('hidden');
     }
     else{
      showAllContainer.classList.add('hidden');
     }

    // console.log('is show all',isShowAll);
         //display only first 12 phones if not show all

    if(!isShowAll){
      phonse =phonse.slice(0,12);
    }


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
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetaile('${phone.slug}') " class="btn btn-primary">Show Datails</button>
                      </div>
                    </div>
    
    `;

    //4 append chiled 

    phonContainer.appendChild(phoneCard);

    });
    //hiden loding spiner
    toggleLodingSpinner(false);

}

// show deatilse click
const handleShowDetaile =async (id)=>{
  //console.log('clicked show detaile',id);
  //lod singale phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone{id}`);
  const data = await res.json();
  console.log(data);

  const phone = data.data;
  showphoneDetailse(phone);
}

const showphoneDetailse = (phone) =>{
  console.log(phone);
  const phoneName = document.getElementById('show-detail-phone-name');
  phoneName.innerText = phone.name;


  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML = `
  <img src ="${phone.image}" alt = ""/>
  `
  // show the modal 
  show_details_modal.showModal();
}


//handel search button
const handleSearch= (isShowAll) =>{
  toggleLodingSpinner(true);
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);
   loadephone(searchText,isShowAll);
}


//handel search recap 

// const handleSearch2 = ()=>{
//   toggleLodingSpinner(true);
//  const searchField2 = document.getElementById('search-field2');
//  const searchText2 = searchField2.value;
//  console.log(searchText2);
//  loadephone(searchText2)
  
// }



const toggleLodingSpinner = (isloding) => {
  const lodingSpinner = document.getElementById('lodding-container');
  if(isloding){
    lodingSpinner.classList.remove('hidden');
  }
  else{
    lodingSpinner.classList.add('hidden');
  }
}

//handal show all
const handleShowAll = () =>{
  handleSearch(true);

}
loadephone();