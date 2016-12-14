$('input:submit').click(function () {
  // event.preventDefault();
  validateName();
  validateEmail();
});


function validateName() {
  var name = $("[name='name']").val();
  if (name.length < 5 || name.length > 30) {
    alert('Min length is 5. Max length of name is 30 characters. ');
  } 
}

function validateEmail() {
  var $email = $("[name='email']");
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;

}

// $('#validate').validate({
//   rules: {
//     name: {
//       required: true,
//       rangelength: [5, 30]
//     }
//   },
//   messages: {
//     required: "поле не заполнено или заполнено не верно",
//     rangelength: "Please enter a value between 5 and 30 characters long."
//   }
// });

