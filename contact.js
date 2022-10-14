function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Your Username",
        Password : "Your Password",
        To : 'Type The Email Where You Want To Send All The Information From The Contact Form',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone No: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully!")
    );
}