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
    { id: 1, name: 'john', value: '', logo: ''},]


var templates = [
  { id: 1, name: 'Dark', value: 'css/dark.css', logo: 'css/dark.css'},
  { id: 2, name: 'Light', value: 'css/light.css', logo: 'css/light.css'}
];


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










