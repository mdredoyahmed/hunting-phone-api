const loadephone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);


}
const displayPhones = phonse => {
    //console.log(phonse);
    const phonContainer = document.getElementById('phone-container');
    phonse.forEach(phone =>{
        console.log(phone);
        // 2 create a div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;
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



loadephone();