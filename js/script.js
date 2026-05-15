const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

/* Report */
const reportForm = document.getElementById('report-form');
const reportedData = document.getElementById('reported-data');

reportForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phoneNo = document.getElementById('phone').value;
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;
  const quantity = document.getElementById('quantity').value;

  let reports = JSON.parse(localStorage.getItem('reports')) || [];
  reports.push({ name, phoneNo, location, type, quantity });
  localStorage.setItem('reports', JSON.stringify(reports));

  displayReports();
  reportForm.reset();
});

function displayReports() {
  reportedData.innerHTML = '';
  let reports = JSON.parse(localStorage.getItem('reports')) || [];
  reports.forEach((report, index) => {
    const item = document.createElement('div');
    item.className = 'reported-item';
    item.innerHTML = `
      <div class="detail">
      <strong>REPORT FROM ${report.name}</strong>
      </div>
      <div class="details">
        Name: ${report.name}<br>
        Phone: ${report.phoneNo}<br>
        Location: ${report.location}<br>
        Type: ${report.type}<br>
        Quantity: ${report.quantity}
      </div>
    `;
    item.addEventListener('click', () => {
      const details = item.querySelector('.details');
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
    reportedData.appendChild(item);
  });
}

displayReports();

