// Get the container element
const container = document.getElementById('container');

// Get the information dialog element
const infoDialog = document.getElementById('info-dialog');

// Create a function to generate the click boxes
function generateClickBoxes(data) {
  data.forEach((item, index) => {
    // Create the click box element
    const clickBox = document.createElement('div');
    clickBox.classList.add('click-box');
    clickBox.addEventListener('click', () => {
      // Show the information dialog with the corresponding data
      showInfoDialog(item);
    });

    // Create the logo image element
    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.src = item.chanel_image;
    logoImg.alt = item.chanel_name + ' Logo';

    // Create the channel name element
    const chanelName = document.createElement('h5');
    chanelName.textContent = item.chanel_name;

    // Append the elements to the click box
    clickBox.appendChild(logoImg);
    clickBox.appendChild(chanelName);

    // Append the click box to the container
    container.appendChild(clickBox);
  });
}

// Create a function to show the information dialog
function showInfoDialog(data) {
  // Get the information dialog elements
  const infoImg = document.getElementById('info-img');
  const infoHeading = document.getElementById('info-heading');
  const infoPara = document.getElementById('info-para');
  const status = document.getElementById('status');
  const owner = document.getElementById('owner');
  const contact = document.getElementById('contact');
  const infoLink = document.getElementById('info-link');

  // Update the information dialog elements with the corresponding data
  infoImg.src = data.chanel_image;
  infoImg.alt = data.chanel_name + ' Logo';
  infoHeading.textContent = data.chanel_name;
  infoPara.textContent = data.chanel_desc;
status.innerHTML = 'Status: <div class="active"></div>' + data.chanel_statys;
  owner.textContent = 'Owner: ' + data.chanel_owner;
  contact.textContent = 'Contact: ' + data.chanel_contact;
  infoLink.href = data.chanel_link;

  // Show the information dialog
  infoDialog.style.transform = 'translate(-50%,-50%) scale(1)';
}

// Create a function to hide the information dialog
function hideInfoDialog() {
  infoDialog.style.transform = 'translate(-50%,-50%) scale(0)';
}

// Add an event listener to the close button to hide the information dialog
document.getElementById('close-btn').addEventListener('click', hideInfoDialog);

// Generate the click boxes
generateClickBoxes(allData);