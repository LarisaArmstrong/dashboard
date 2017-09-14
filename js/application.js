var templates = [
	{name: 'Dark', value: 'css/dark.css'},
// {name: 'Light', value: 'css/light.css'}
]

var app = new Vue ({
	el: '#app',
	data: {
		title: "Title",
		templates: {
			list: templates,
			count: templates.length,
		}
	}
})







