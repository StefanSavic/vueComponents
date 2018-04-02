Vue.component('steps-content',{
	template:'#steps-content-template',
	props:['contentlist']
});
Vue.component('steps-heading',{
	template:'#steps-heading-template',
	props:['heading']
});

new Vue({
	el:"#steps",

	data:{
		plan:[
			{text: 'research'},
			{text: 'observe'},
			{text: 'understand'},
			{text: 'analyze'}
		],
		planHeading:['Plan'],
		design:[
			{text: 'use case'},
			{text: 'wireframes'},
			{text: 'design layout'},
			{text: 'concepts'}
		],
		designHeading:['design'],
		develop:[
			{text: 'comunicate'},
			{text: 'visual design'},
			{text: 'coding'},
		],
		developHeading:['develop'],

		deploy:[
			{text: 'usability'},
			{text: 'testing'},
			{text: 'verification'},
		],
		deployHeading:['deploy'],
		src:{
			plan:'/img/plan.png',
			design:'/img/design.png',
			develop:'/img/develop.png',
			deploy:'/img/deploy.png'
			
		}
	},
});