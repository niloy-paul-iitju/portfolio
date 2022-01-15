function emptyCheck() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
    var subject = document.getElementById("Subject").value;
    var text = document.getElementById("text").value;
    
    if (name == "" || name == null) {
      alert("Name must be filled out!");
      return false;
    }
    
    else if (email == "" || email == null) {
      alert("Email must be filled out!");
      return false;
    }
    
    else if (service == "service") {
        alert("Select a Proper Service Name!");
        return false;
      }
    
    else if (subject == "" || subject == null) {
        alert("Include an appropriate subject!");
        return false;
        }
    
    else if (text == "" || text == null) {
        alert("Explain your necessity with proper explanation!");
        return false;
        }
    else{
        alert("Name   : "+name+"\nEmail    : "+email+"\nService : "+service+"\nSubject : "+subject+"\nThanks for your inquiry. I will reply to you very soon.\n");  
    }
    
    
  }