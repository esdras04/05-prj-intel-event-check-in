const form= document.getElementById('checkInForm');

const nameInput= document.getElementById("attendeeName");

const teamSelect = document.getElementById("teamSelect");



//track attendance
let count = 0;
const maxCapacity = 50;


//handle form submission
form.addEventListener('submit', function(e){
  event.preventDefault();

  //get values from form
  const name = nameInput.value;
  const teamValue = teamSelect.value;
  const teamName= teamSelect.selectedOptions[0].text;  
  console.log(`Name: ${name}, Team: ${teamName}`);

  //increment count 
   const teamCounter = document.getElementById(teamValue + 'Count');
  count++;

  if (count<= maxCapacity){

    attendeeCount.textContent = count;
  //update team counter
    teamCounter.textContent = parseInt(teamCounter.textContent) +1;
  }
    

  console.log(`Total Attendance: ${count}`);
  console.log(teamCounter);

  //update progress bar
  const percentage = Math.round((count / maxCapacity) * 100) + '%';
  console.log(`Attendance: ${percentage}`);

  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = percentage;



  //welcome message 
  const message = `Welcome ${name} from ${teamName}! You are attendee number ${count}.`;
  document.getElementById("greeting").textContent = message;
  greeting.style.display = 'block';
  console.log(message);

  form.reset();
});

