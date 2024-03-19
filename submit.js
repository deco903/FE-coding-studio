 // membuat object custom event
    const eventRegisterComplete = new Event('register-complete');

    // membuat object element dom
    const messageElement = document.getElementById('message');
    const btnSubmit = document.getElementById('btn-submit');

    // handle untuk custom event  
    document.addEventListener('register-complete', function (e) {
      messageElement.style.display = "flex";
    });

    // handle untuk event klik pada button
    btnSubmit.addEventListener('click', function (e) {
      // trigger custom event register-complete
      document.dispatchEvent(eventRegisterComplete);
    });