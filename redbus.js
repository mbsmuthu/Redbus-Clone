const form= document.querySelector("#form");
const seats= document.querySelectorAll(".seat"); 
// const seat = {seatNo, isSelected:false, isBooked:false};
const seats_array = [...seats];
const seatLayout = document.querySelector(".seat-layout");
const cost = document.querySelector("#cost");
const bookBtn = document.querySelector("#bookBtn");

const fname=document.querySelector("#name");
const email=document.querySelector("#email");
const welcomeMessage = document.querySelector("#welcome-message");



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    welcomeMessage.innerHTML=`Welcome ${fname.value}`;
    
    seatLayout.style.visibility="visible";
    cost.style.visibility="visible";
    bookBtn.style.visibility="visible";
    fname.value="";
    email.value="";
    
})
// const getSelectedSeats = () =>seats_array.filter(seat => seat.classList.contains("selected-seat"));

let selected_seats=[];
let booked_seats=[];
        seatLayout.addEventListener("click",(event)=>{
            if(event.target.classList.contains("seat")){
                event.target.classList.toggle("selected-seat");
            }
            else return;
        
        selected_seats = seats_array.filter(seat=>{
            return seat.classList.contains("selected-seat");
        })

        // getSelectedSeats();
        // console.log(selected_seats.length
       
        cost.textContent=`Rs.${(selected_seats.length - booked_seats.length)  * 1000}`;
        selected_seats.length=0;
    
    });

bookBtn.addEventListener("click",()=>{
    cost.textContent = `Rs.0`;
    const selected_seats = seats_array.filter(seat=>{
        return seat.classList.contains("selected-seat");
    })
    booked_seats = selected_seats.map(seat=>{
        return seat.classList.add("booked-seat");
    })
    
    
   
    cost.textContent=`Rs.${(selected_seats.length - booked_seats.length)  * 1000}`;
    
    
})
seatLayout.style.visibility="hidden";
    cost.style.visibility="hidden";
    bookBtn.style.visibility="hidden";