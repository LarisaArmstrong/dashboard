$(document).ready(function() {
	$('#fullpage').fullpage({
        verticalCentered: false, 
        css3: true,
        autoScrolling: true,
		    fitToSection: true,

  });
    
    
    
});  



// login fake database

var users = [
  {id: 1, first_name: 'Joe', last_name: 'Tudor', email: 'jtudor@fuck.it'},
  {id: 2, first_name: 'John', last_name: 'Doe', email: 'jdoe@fuck.it'},
  {id: 3, first_name: 'Kim', last_name: 'Smith', email: 'ksmith@fuck.it'},
  {id: 4, first_name: 'Amy', last_name: 'Green', email: 'agreen@fuck.it'},
];

// templates methods

var templates = [
  { id: 1, name: 'night mode', value: 'css/dark.css', icon: 'fa fa-moon-o fa-2x'},
  { id: 2, name: 'day mode', value: 'css/light.css', icon: 'fa fa-sun-o fa-2x'}
];


// VUE.JS APP
// ---------------------


var app = new Vue({
  el: '#app',
  data: {
    users_name: null,
    title: "Lazy Surf",
    users: users,
//    userName: 'Joel Tudor',  
    templates: templates,
    default_template: 2,
    current_template: templates[0],
     tasks: [
         {body: 'Crantock, Cornwall', completed: false},
         {body: 'South Bay, Scarborough', completed: false},
         {body: 'Saunton Sands, Devon', completed: false},
         {body: 'Skaill Bay, Orkney, Scotland', completed: false},
         {body: 'Inch, Co Kerry, Ireland', completed: false},
         {body: 'Brandon Bay, Ireland', completed: false},
    ],
      
   
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
        keys.push(key);
      }
      return keys;
    },
      
    userName: function() {
       return this.users_name;
         
  },
    
//    logIn: function(){
//      this.userName = this.userName.split('').join('')
//    }  
      
      
}  
    

});







// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}














