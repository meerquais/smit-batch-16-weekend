// console.log("JavaScript Connected!");


// DOM Element ko get karna

var homePage = document.getElementById("home-page");
var dashboardPage = document.getElementById("dashboard-page");
var homeLink = document.getElementById("home-link");
var dashboardLink = document.getElementById("dashboard-link");
var authBtn = document.querySelector(".auth-btn");
var authModal = document.getElementById("auth-modal");
var closeModal = document.querySelector(".close");
var loginTab = document.getElementById("login-tab");
var signupTab = document.getElementById("signup-tab");
var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var loginFormContent = document.getElementById("login-form-content");
var signupFormContent = document.getElementById("signup-form-content");

var postsContainer = document.getElementById("posts-container");
var userPostsContainer = document.getElementById("user-posts-container");
var postForm = document.getElementById("post-form");
var postIdInput = document.getElementById("post-id");
var postTitleInput = document.getElementById("post-title");
var postDescriptionInput = document.getElementById("post-description");
var PostImageInput = document.getElementById("post-image");
var submitPostBtn = document.getElementById("submit-post");
var cancelEditBtn = document.getElementById("cancel-edit");

var currentUser = null;

function initApp() {

  var storedUser = localStorage.getItem("currentUser");

  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    updateAuthUI();
  }

  loadAllPosts();

  setupEventListeners();
}

function setupEventListeners() {

  // navigation 

  homeLink.addEventListener('click', showHomePage);
  dashboardLink.addEventListener('click', showDashboardPage);
  authBtn.addEventListener("click", toggleAuthModal);

  // modal 

  closeModal.addEventListener("click", closeAuthModal);
  window.addEventListener('click', function (event) {
    if (event.target === authModal) {
      closeAuthModal()
    }
  });

  // Auth Tabs


  loginTab.addEventListener('click', function () {
    setActiveTab(loginTab, signupTab);
    setActiveForm(loginForm, signupForm);
  });

  signupTab.addEventListener('click', function () {
    setActiveTab(signupTab, loginTab);
    setActiveForm(signupForm, loginForm);
  });


  // Auth Forms

  loginFormContent.addEventListener('submit', handleLogin);
  signupFormContent.addEventListener('submit', handleSignup);

  // Post form

  postForm.addEventListener('submit', handlePostSubmit);
  cancelEditBtn.addEventListener('click', cancelEdit);
};

function showHomePage() {
  homePage.classList.add("active");
  dashboardPage.classList.remove("active");
}

function showDashboardPage() {
  if (!currentUser) {
    openAuthModal();
    return
  }

  homePage.classList.remove("active");
  dashboardPage.classList.add("active");
  loadUserPost();
}

function openAuthModal() {
  authModal.classList.add("active");
}

function closeAuthModal() {
  authModal.classList.remove("active");
}

function toggleAuthModal() {
  if (currentUser) {
    handleLogout()
  } else {
    openAuthModal()
  }
};

function setActiveTab(activeTab, inactiveTab) {
  activeTab.classList.add("active");
  inactiveTab.classList.remove("active");
};

function setActiveForm(activeForm, inactiveForm) {
  activeForm.classList.add("active");
  inactiveForm.classList.remove("active")
};

function updateAuthUI() {
  if (currentUser) {
    authBtn.textContent = "logout (" + currentUser.username + " )";
    dashboardLink.style.display = "block";
  } else {
    authBtn.textContent = "Login";
    dashboardLink.style.display = "none";
  }
}

// Authentication 

function handleLogin(e) {

  e.preventDefault()

  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var user = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      user = users[i]
      break;
    }
  }

  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();


    loginFormContent.reset();


    if (homePage.classList.contains("active")) {
      showDashboardPage();
    }

  } else {
    alert("invalid username or password")
  }

}

function handleSignup(e) {

  e.preventDefault();

  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;

  var users = JSON.parse(localStorage.getItem("users"));

  if(!Array.isArray(users)){
    users = []
  };


  var userExists = false;
  for(var i = 0; i< users.length;i++){
    if(users[i].username === username){
      userExists = true;
      break;
    }
  }

  if(userExists){
    alert("username already exists!");
    return;
  };


//  create new user

var newUser = {
  id: Date.now().toString(),
  username:username,
  password:password
};


  users.push(newUser);

  localStorage.setItem("users" , JSON.stringify(users));


  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  updateAuthUI();
  closeAuthModal();

  signupFormContent.reset();

  showDashboardPage();
 
};

function handleLogout(){
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateAuthUI();
  showHomePage();
}


function handlePostSubmit(e){
  e.preventDefault()

  if(!currentUser){
    openAuthModal();
    return;
  }

  var postId = postIdInput.value;
  var title = postTitleInput.value;
  var description = postDescriptionInput.value;
  var imageUrl = PostImageInput.value;

  if(!title || !description || !imageUrl){
    alert("please fill in all fields");
    return;
  }


  var posts = JSON.parse(localStorage.getItem("posts")) || [];

  if(postId){
    for(var i = 0; i < posts.length; i++){
      if(posts[i].id === postId && posts[i].authorId === currentUser.id){
        posts[i].title = title;
        posts[i].description = description;
        posts[i].imageUrl = imageUrl;
        break;
      }
    }
    resetPostForm();
  }else{
    var newPost = {
      id: Date.now().toString(),
      title:title,
      description:description,
      imageUrl:imageUrl,
      authorId: currentUser.id,
      autherUsername: currentUser.username,
      createdAt: new Date().toISOString()
        }


        posts.push(newPost)
  }


  localStorage.setItem("posts" , JSON.stringify(posts));

  loadAllPosts();
  loadUserPost();


  postForm.reset()
}


function editPost(postId){
  if(!currentUser) return;

  var posts = JSON.parse(localStorage.getItem("posts")) || [];


  for(var i = 0; i < posts.length; i++){
    if(posts[i].id === postId && posts[i].authorId === currentUser.id){
      postIdInput.value = posts[i].id;
      postTitleInput.value = posts[i].title;
      postDescriptionInput.value = posts[i].description
      postImageInput.value = posts[i].imageUrl;


      cancelEditBtn.style.display = "inline-block";


      document.querySelector(".post-form-container").scrollIntoView({behavior:"smooth"});

      break;
    }
  }
}

function cancelEdit(){
  resetPostForm();
}

function resetPostForm(){
  postForm.reset();
  postIdInput.value = "";
  cancelEditBtn.style.display = "none"
};


function deletePost(postId){
  if(!currentUser) return;

  if(!confirm("Are you sure you want to delete?")){
    return;
  }

  var posts = JSON.parse(localStorage.getItem("posts")) || [];

  var newPosts = [];

  for(var i = 0;i < posts.length; i++){
    if(!(posts[i].id === postId && posts[i].authorId === currentUser.id)){
      newPosts.push(posts[i]);
    }
  }

  localStorage.setItem("posts" , JSON.stringify(newPosts));


  loadAllPosts();
  loadUserPost();
}

function loadAllPosts(){
  var posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.sort(function(a,b){
    return new Date(b.createdAt) - new Date(a.createdAt);
  });


  postsContainer.innerHTML = "";

  if(posts.length === 0){
    postsContainer.innerHTML = '<p>No posts yet. Be the first to create one!</p>';
    return
  }

  for(var i =0;i < posts.length;i++){
    
 var post = posts[i];
 var postElement = createPostElement(post , false);
 postsContainer.appendChild(postElement);
  }
};

function loadUserPost(){
  if(!currentUser){
    userPostsContainer.innerHTML = "<p>Please log in to view your posts.</p>";
    return;
  }

  var posts = JSON.parse(localStorage.getItem("posts")) || [];


  var userPosts = [];
  for(var i =0; i < posts.length;i++){
    if(posts[i].authorId === currentUser.id){
      userPosts.push(posts[i]);
    }
  }

  userPosts.sort(function(a,b){
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  userPostsContainer.innerHTML = "";

  if(userPosts.length === 0){
    userPostsContainer.innerHTML = "<p>You haven't created any posts yet.</p>";
    return;
  }

  for(var i =0 ; i < userPosts.length;i++){
    var post = userPosts[i];
    var postElement = createPostElement(post, true);
    userPostsContainer.appendChild(postElement);
  }
}

function createPostElement(post, isEditable){
  var postDiv = document.createElement("div");
  postDiv.className = "post-card";


  var imageElement = document.createElement("img");
  imageElement.className = "post-image";
  imageElement.src = post.imageUrl;
  imageElement.alt = post.title;

  var contentDiv = document.createElement("div");

  contentDiv.className = "post-content";

  var titleElement = document.createElement("h3");
  titleElement.className = "post-title";
  titleElement.textContent = post.title;

  var descriptionElement = document.createElement("p");
  descriptionElement.className = "post-description";
  descriptionElement.textContent = post.description;

  var authorElement = document.createElement("div");
  authorElement.className = "post-author";
  authorElement.textContent = "By " + post.autherUsername;

  contentDiv.appendChild(titleElement);
  contentDiv.appendChild(descriptionElement);
  contentDiv.appendChild(authorElement);


  if(isEditable){
    var actionsDiv = document.createElement("div");
    actionsDiv.classList = "post-actions";

    var editButton = document.createElement("button");
    editButton.className = "btn btn-edit";
    editButton.textContent = "edit";
    editButton.onclick = function(){
      editPost(post.id);
    };


    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-delete";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
      deletePost(post.id);
    }



    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    contentDiv.appendChild(actionsDiv); 

  }

  postDiv.appendChild(imageElement);
  postDiv.appendChild(contentDiv);

  return postDiv;
}

document.addEventListener("DOMContentLoaded" , initApp);



