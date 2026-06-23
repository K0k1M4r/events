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

modalContent.addEventListener('click', function(event) {
    event.stopPropagation(); 
});