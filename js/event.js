  const btn = document.getElementById("btn-make-blue");

  btn.addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    document.body.style.backgroundColor = randomColor;
  });

  const div = document.getElementById("question-page");

  div.addEventListener("click", function () {
    window.location.href = "./question.html";
  });

  

  function showDate() {
    const date = new Date(); 
    const currentDate = date.toDateString(); 
    
    document.getElementById("today").innerHTML = `<br> ${currentDate} <br>`;
  }

  showDate(); 


const buttons = document.querySelectorAll('.btn-primary');
let completedCount = 24; 
const completedTaskSpan = document.getElementById('completed-task');

let totalTaskCount = 6; 
const totalTaskSpan = document.getElementById('total-taskcount');
const historyDiv = document.getElementById('history');
const clearBtn = document.getElementById('clear-btn');

function addHistory(task) {
  const time = new Date().toLocaleTimeString();
  const p = document.createElement('p');
  p.className = 'bg-[#F4F7FF] p-3 rounded-xl text-sm';
  p.innerText = `You have completed the task ${task} at ${time}`;
  historyDiv.appendChild(p);
}


clearBtn.addEventListener('click', () => {
  historyDiv.innerHTML = '';
});

// ----------------------
buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (!button.disabled) {
   
      button.disabled = true;
      button.innerText = 'Completed';
      button.style.backgroundColor = 'gray';
      button.style.cursor = 'not-allowed';

      const cardTitle = button.closest('.card-body').querySelector('.card-title').innerText;

      
      alert(`${cardTitle} Task Completed Successfully `);

      
      addHistory(cardTitle);

      
      completedCount++;
      completedTaskSpan.innerText = completedCount;

      
      totalTaskSpan.innerText = --totalTaskCount;

      
      if (totalTaskCount === 0) {
        alert('All Tasks Completed Successfully');
      }
    }
  });
});