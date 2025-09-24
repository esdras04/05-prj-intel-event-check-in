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
  count++;
  console.log(`Total Attendance: ${count}`);

  //update progress bar
  const percentage = Math.round((count / maxCapacity) * 100) + '%';
  console.log(`Attendance: ${percentage}`);

  //update team counter
  const teamCounter = document.getElementById(teamValue + 'Count');
 teamCounter.textContent = parseInt(teamCounter.textContent) +1;
  console.log(teamCounter);

  //welcome message 
  const message = `Welcome ${name} from ${teamName}! You are attendee number ${count}.`;

  form.reset();
});

