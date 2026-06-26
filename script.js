// 1
let productsList = document.querySelectorAll('.product'); 
let searchProduct = document.getElementById('searchInput'); 

searchProduct.addEventListener('input', function(){
    let searchText = searchProduct.value.toLowerCase();

    productsList.forEach(product => {
    
    let productName = product.textContent.toLowerCase();

    
    if (productName.includes(searchText)) {
      
      product.style.display = ""; 
    } else {
      product.style.display = "none"; 
    }
  })
})


// 2
let askQuestions = document.querySelectorAll('.faq-question');

askQuestions.forEach(button => {
    button.addEventListener('click', function() {
        
        let answer = this.nextElementSibling;
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


// 3
let openModel = document.getElementById('openModalBtn');
let model = document.getElementById('modalOverlay');
let closeModel = document.getElementById('closeModalBtn');
let overlay = document.getElementById('modalOverlay');
const modalContent = document.querySelector('.modal-content');

function openModelFunc(){
    model.style.display = "block"
}

function closeModelFunc(){
    model.style.display = "none"
}



openModel.addEventListener('click', openModelFunc)

closeModel.addEventListener('click', closeModelFunc)

overlay.addEventListener('click', closeModelFunc);

// modalContent.addEventListener('click', function(event) {
//     event.stopPropagation(); 
// });

// 4
let emailInput = document.getElementById('emailInput');
let nameInput = document.getElementById('nameInput');
let passwordInput = document.getElementById('passwordInput');
let submit = document.getElementById('submit');


nameInput.addEventListener('input', function(){
 if (nameInput.value === '') {
        setError(nameInput, 'Name cannot be empty.');
    } else {
        setError(nameInput, '');
    }
})

emailInput.addEventListener('input', function(){
    if(!emailInput.value.includes('@')){
        setError(emailInput, 'Email not valid')
    } else {
        setError(emailInput, '')
    }
})

passwordInput.addEventListener('input', function(){
    if(passwordInput.value.length >= 8){
        setError(passwordInput, '')
    } else {
        setError(passwordInput, 'Pass not valid')
    }
})


function setError(inputElement, errorMessage) {
    let errorDiv = inputElement.nextElementSibling;
    errorDiv.textContent = errorMessage;
}

function setSuccess(inputElement, goodMessage) {
    let succDiv = inputElement.nextElementSibling;
    succDiv.textContent = goodMessage;
}

submit.addEventListener('click', function(){
    

    let isNameValid = nameInput.value !== '';
    let isEmailValid = emailInput.value.includes('@');
    let isPasswordValid = passwordInput.value.length >= 8;

    if (isNameValid && isEmailValid && isPasswordValid){
        setSuccess(submit, 'Registration successful!');
    } else {
        setError(passwordInput, 'Registration failed!')
    }
})

// 5
let shortcutMessage = document.getElementById('shortcutMessage');


shortcutMessage.addEventListener('keydown', function(event){
    
    if(event.key === 'Escape'){
        shortcutMessage.style.display = "none"
    }
    if(event.key === 'Enter'){
        shortcutMessage.style.display = "flex"
    }

})