var loginPage = document.getElementById('login-page');
var signupPage = document.getElementById('signup-page');
var dashboardPage = document.getElementById('dashboard-page');

var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');
var foodForm = document.getElementById('food-forms');

var showSignupLink = document.getElementById('show-signup');
var showLoginLink = document.getElementById('show-login');
var logoutBtn = document.getElementById('logout-btn');

var loginUsername = document.getElementById('login-username');
var loginPassword = document.getElementById('login-password');
var signupUsername = document.getElementById('signup-username');
var signupPassword = document.getElementById('signup-password');

var foodId = document.getElementById('food-id');
var foodName = document.getElementById('food-name');
var foodDescription = document.getElementById('food-description');
var foodImage = document.getElementById('food-image');
var foodFormButton = document.getElementById('food-form-button');
var foodsList = document.getElementById('foods-list');
var loggedInUserSpan = document.getElementById('logged-in-user');


var currentUser = null;
var isEditMode = false;


function initApp() {
    
    var loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
        currentUser = loggedInUser;
        showDashboard();
        loadFoods();
    } else {
        showLogin();
    }

    
    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSignup();
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLogin();
    });

    logoutBtn.addEventListener('click', function() {
        logout();
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSignup();
    });

    foodForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (isEditMode) {
            updateFood();
        } else {
            addFood();
        }
    });
}


function showLogin() {
    loginPage.classList.remove('hidden');
    signupPage.classList.add('hidden');
    dashboardPage.classList.add('hidden');
}


function showSignup() {
    loginPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
    dashboardPage.classList.add('hidden');
}


function showDashboard() {
    loginPage.classList.add('hidden');
    signupPage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    
    
    if (currentUser) {
        loggedInUserSpan.textContent = 'Welcome, ' + currentUser;
    }
    
    
    resetFoodForm();
}


function handleLogin() {
    var username = loginUsername.value.trim();
    var password = loginPassword.value;

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    
    var users = JSON.parse(localStorage.getItem('users') || '{}');

   
    if (users[username] && users[username] === password) {
        currentUser = username;
        localStorage.setItem('currentUser', username);
        showDashboard();
        loadFoods();
    } else {
        alert('Invalid username or password');
    }
}


function handleSignup() {
    var username = signupUsername.value.trim();
    var password = signupPassword.value;

    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    
    var users = JSON.parse(localStorage.getItem('users') || '{}');

    
    if (users[username]) {
        alert('Username already exists');
        return;
    }

    
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please login.');
    showLogin();
}


function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
}


function addFood() {
    var name = foodName.value.trim();
    var description = foodDescription.value.trim();
    var imageUrl = foodImage.value.trim();

    if (!name) {
        alert('Please enter a food name');
        return;
    }

    
    var food = {
        id: Date.now(),
        name: name,
        description: description,
        imageUrl: imageUrl,
        username: currentUser,
        createdAt: new Date().toLocaleDateString()
    };

    
    var foods = JSON.parse(localStorage.getItem('foods') || '[]');

    
    foods.push(food);
    localStorage.setItem('foods', JSON.stringify(foods));

    
    resetFoodForm();

    
    loadFoods();
}


function editFood(id) {
    
    var foods = JSON.parse(localStorage.getItem('foods') || '[]');
    
    
    var food = foods.find(function(f) {
        return f.id === id;
    });
    
    if (food) {
        
        foodId.value = food.id;
        foodName.value = food.name;
        foodDescription.value = food.description || '';
        foodImage.value = food.imageUrl || '';
        
        
        isEditMode = true;
        foodFormButton.textContent = 'Update Food';
        foodFormButton.classList.add('update-mode');
        
        
        document.querySelector('.food-form-section').scrollIntoView({ behavior: 'smooth' });
    }
}


function updateFood() {
    var id = parseInt(foodId.value);
    var name = foodName.value.trim();
    var description = foodDescription.value.trim();
    var imageUrl = foodImage.value.trim();

    if (!name) {
        alert('Please enter a food name');
        return;
    }

    
    var foods = JSON.parse(localStorage.getItem('foods') || '[]');
    
    
    var foodIndex = foods.findIndex(function(f) {
        return f.id === id;
    });
    
    if (foodIndex !== -1) {
        
        foods[foodIndex].name = name;
        foods[foodIndex].description = description;
        foods[foodIndex].imageUrl = imageUrl;
        
        
        localStorage.setItem('foods', JSON.stringify(foods));
        
       
        resetFoodForm();
        
        
        loadFoods();
    }
}


function deleteFood(id) {
    if (confirm('Are you sure you want to delete this food item?')) {
        
        var foods = JSON.parse(localStorage.getItem('foods') || '[]');
        
        
        var updatedFoods = foods.filter(function(food) {
            return food.id !== id;
        });
        
        
        localStorage.setItem('foods', JSON.stringify(updatedFoods));
        
        
        loadFoods();
    }
}


function resetFoodForm() {
    foodId.value = '';
    foodName.value = '';
    foodDescription.value = '';
    foodImage.value = '';
    isEditMode = false;
    foodFormButton.textContent = 'Add Food';
    foodFormButton.classList.remove('update-mode');
}


function loadFoods() {
    
    var foods = JSON.parse(localStorage.getItem('foods') || '[]');

   
    var userFoods = foods.filter(function(food) {
        return food.username === currentUser;
    });

  
    foodsList.innerHTML = '';

  
    if (userFoods.length === 0) {
        var noFoodsElement = document.createElement('div');
        noFoodsElement.className = 'no-foods';
        noFoodsElement.textContent = 'No foods added yet';
        foodsList.appendChild(noFoodsElement);
        return;
    }

    userFoods.forEach(function(food) {
        var foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        
        
        var imageHtml = '';
        if (food.imageUrl) {
            imageHtml = '<img src="' + food.imageUrl + '" alt="' + food.name + '" class="food-card-img" onerror="this.onerror=null;this.outerHTML=\'<div class=\\\'food-card-img\\\' style=\\\'display:flex;align-items:center;justify-content:center;background-color:#f0f0f0;\\\'><svg width=\\\'50\\\' height=\\\'50\\\' viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\'><path d=\\\'M8.25 5.25H15.75C16.9926 5.25 18 6.25736 18 7.5V16.5C18 17.7426 16.9926 18.75 15.75 18.75H8.25C7.00736 18.75 6 17.7426 6 16.5V7.5C6 6.25736 7.00736 5.25 8.25 5.25Z\\\' stroke=\\\'#999\\\' stroke-width=\\\'1.5\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'/><path d=\\\'M15.75 12C15.75 13.6569 14.4069 15 12.75 15C11.0931 15 9.75 13.6569 9.75 12C9.75 10.3431 11.0931 9 12.75 9C14.4069 9 15.75 10.3431 15.75 12Z\\\' stroke=\\\'#999\\\' stroke-width=\\\'1.5\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'/><path d=\\\'M18 7.5L6 16.5\\\' stroke=\\\'#999\\\' stroke-width=\\\'1.5\\\' stroke-linecap=\\\'round\\\' stroke-linejoin=\\\'round\\\'/></svg></div>\';">';
        } else {
            imageHtml = '<div class="food-card-img" style="display: flex; align-items: center; justify-content: center; background-color: #f0f0f0;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 5.25H15.75C16.9926 5.25 18 6.25736 18 7.5V16.5C18 17.7426 16.9926 18.75 15.75 18.75H8.25C7.00736 18.75 6 17.7426 6 16.5V7.5C6 6.25736 7.00736 5.25 8.25 5.25Z" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 12C15.75 13.6569 14.4069 15 12.75 15C11.0931 15 9.75 13.6569 9.75 12C9.75 10.3431 11.0931 9 12.75 9C14.4069 9 15.75 10.3431 15.75 12Z" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 7.5L6 16.5" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
        }
        
        foodCard.innerHTML = imageHtml +
            '<div class="food-card-content">' +
                '<h3 class="food-card-title">' + food.name + '</h3>' +
                (food.description ? '<p class="food-card-description">' + food.description + '</p>' : '') +
                '<div class="food-card-meta">' +
                    '<span>Added: ' + food.createdAt + '</span>' +
                '</div>' +
                '<div class="action-buttons">' +
                    '<button class="edit-btn" onclick="editFood(' + food.id + ')">Edit</button>' +
                    '<button class="delete-btn" onclick="deleteFood(' + food.id + ')">Delete</button>' +
                '</div>' +
            '</div>';
            
        foodsList.appendChild(foodCard);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    initApp();
});