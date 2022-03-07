var flag=0;
var msg;

function ValidateMail()
{
    var message=document.getElementById("message").value;
    var lblError1 = document.getElementById("lblError1");
    lblError1.innerHTML = "";
    if(message=="")
    {
        lblError1.style.color='red';
        lblError1.innerHTML='Please enter the mail.';
        flag=1;
    }
    else
    {
        flag=0;
        msg=message;
    }
                enableButton();

            
    }

function enableButton()
{
    if(flag==0)
        {
             document.getElementById("button").disabled = false;
            
        }
        else if (flag==1) 
        {
            
            document.getElementById("button").disabled = true;
        }

}


var Alert = new CustomAlert();

function CustomAlert(){

  this.render = function()
  {
      //Show Modal
      var popUpBox = document.getElementById('popUpBox');
      if (msg=="phishing")
      {
        document.getElementById("result").src="images/report.jpg";

        var report= document.getElementById("wresult");
        report.innerHTML = "Report: Phishing Detect";
      }
      else
      {
        document.getElementById("result").src="images/report2.png";
        var report= document.getElementById("wresult");
        report.innerHTML = "Report: Non Phishing Detect";
    }
      popUpBox.style.display = "block";

      //Close Modal
      document.getElementById('closeModal').innerHTML = '<button onclick="Alert.ok()">OK</button>';
        
    }
this.ok = function(){
  document.getElementById('popUpBox').style.display = "none";
  document.getElementById('popUpOverlay').style.display = "none";
}
}