const url = 'https://api.adviceslip.com/advice';

const advice = fetch(url)
                .then((response)=>{
                    return response.json();
                }).then((data)=>{
                    console.log(data.slip['advice']);
                    document.querySelector('.id-box').innerHTML=`ADVICE #${data.slip['id']}`;
                    document.querySelector('.advice-box').innerHTML=`${data.slip['advice']}`;
                })
                .catch((reject)=>{
                    console.log(`Error : ${reject}`);
                });

//Releading page to get new advice when clicked on the dice
document.querySelector('.dice').addEventListener('click', ()=>{
    window.location.reload();
})

// Spinning on load 
window.addEventListener('load',()=>{
    document.querySelector('h5').style.visibility='visible';
    document.querySelector('.advice').style.visibility='visible';
    document.querySelector('.attribution').style.visibility='visible';
    document.querySelector('.lds-hourglass').style.display='none';
})