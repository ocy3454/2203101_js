function showLoginPopup(hasFilter) {
	const loginpopup = document.querySelector('#loginpopup');
  
  if (hasFilter) {
  	loginpopup.classList.add('has-filter');
  } else {
  	loginpopupclassList.remove('has-filter');
  }
  
  loginpopup.classList.remove('hide');
}

function closeLoginPopup() {
	const loginpopup = document.querySelector('#loginpopup');
  loginpopup.classList.add('hide');
}