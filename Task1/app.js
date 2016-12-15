$('form').attr('onsubmit', 'return validate()');

function validate() {
  var val = validateName() && validateEmail() && validateDate() && validateIp();
  return val;
}

function validateName() {
  var isValid = true;
  var name = $("[name='name']").val();
  if (name.length < 5 || name.length > 30) {
    alert('Name should be in length from 5 to 30 characters');
    isValid = false;
  } else if (name.search(/[0-9]/) !== -1) {
    alert('Name has to be without numbers');
    isValid = false;
  }

  return isValid;
}

function validateEmail() {
  var isValid = true;
  var $email = $("[name='email']");
  var pattern = /([a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6})/g;

  if ($email.val().search(pattern) !== 0) {
    alert('Email is not valid. Enter \'expamle@gmail.com \'');
    isValid = false;
  }

  return isValid;
}

function validateDate() {
  var isValid = true;
  var date = $("[name = 'date']").val();
  var pattern = /^([0-3]{1}[0-1]{1})|([0-2]{1}[0-9]{1})\/([1]{1}[0-2]{1})|([0]{1}[1-9]{1})\/\d{4}$/g;

  if (!date.match(pattern)) {
    alert('Date should be in format DD/MM/YYYY');
    isValid = false;
  }

  return isValid;
}

function validateIp() {
  var isValid = true;
  var ip = $("[name = 'ip']").val();
  var pattern = /^\d+\.\d+\.\d+\.\d+$/g;

  if(ip.search(pattern) === -1) {
    alert('IP should be in format 0.0.0.0');
    isValid = false;
  }

  return isValid;
}