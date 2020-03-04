var input = document.getElementById("myinput");

setTimeout(() => {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "search_list.json"); // 3 параметр - , true - для кеширования
	ajax.onload = function() {
		var list = JSON.parse(ajax.responseText); // Парсинг JSON

		new Awesomplete(input, {
			list: list,
			minChars:1, // Минимум символов
			autoFirst:true, // Выделить 1 результат

			filter: function (text, input) { // Вывод только по первой букве
				return text.toLowerCase().indexOf(input.toLowerCase()) == 0;
			},
			replace: function(suggestion) { // После выбора из результата
				location.href = suggestion.value;
			}
		});
	};
	ajax.send();
}, 500);