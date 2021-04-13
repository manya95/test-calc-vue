Vue.filter('currency', 
		function (value) {
    return  value+ ' ккал';}
	);

var demo = new Vue({
    el: '#main',
    data: {
	    elements: [
        	{
        		name: 'Гречневая каша',
        		calories: 132,
        		active:true
        	},
			{
        		name: 'Рис белый отварной',
        		calories: 116,
        		active:false
        	},
			{
        		name: 'Рисовая каша на молоке',
        		calories: 90,
        		active:false
        	},
			{
        		name: 'Пшенка на воде',
        		calories: 90,
        		active:false
        	},
			{
        		name: 'Овсянка на молоке',
        		calories: 102,
        		active:false
        	},
			{
        		name: 'Овсянка на воде',
        		calories: 88,
        		active:false
        	},
			{
        		name: 'Отварной картофель',
        		calories: 82,
        		active:false
        	},
			{
        		name: 'Лапша из твердых сортов пшеницы',
        		calories: 112,
        		active:false
        	},
			{
        		name: 'Куриная грудка отварная',
        		calories: 137,
        		active:false
        	},
			{
        		name: 'Вареный минтай',
        		calories: 79,
        		active:false
        	},
			{
        		name: 'Свежий лосось',
        		calories: 142,
        		active:false
        	},
			{
        		name: 'Икра лосося',
        		calories: 263,
        		active:false
        	},
			{
        		name: 'Креветки отварные',
        		calories: 95,
        		active:false
        	}
        ]
    },
    methods: {
    	toggleActive: function(s){
            s.active = !s.active;
    	},
    	total: function(){
        	var total = 0;
        	this.elements.forEach(function(s){
        		if (s.active){
        			total+= s.calories;
        		}
        	});
    	return total;
        }
    }
});