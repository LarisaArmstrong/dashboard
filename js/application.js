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
    title: "Hello, VueJS",
    users: users,
    templates: templates,
    default_template: 2,
    current_template: templates[0]
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
    }
  }
});










