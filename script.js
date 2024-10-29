function validateEmailMatch() {
    const email = document.getElementById("email").value;
    const confirm = document.getElementById("confirm").value;
  
    if (email !== confirm) {
      // Emails don't match
      alert("Emails do not match!");
      return false;
    }
  
    // Emails match, proceed with form submission
    return true;
  }

  document.getElementById("submit").addEventListener("click", validateEmailMatch);