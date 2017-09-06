var add_btn = document.getElementById('add_new_submit');

add_btn.addEventListener('click',add_Content)


// this functions will add content to the list

function add_Content(){
	var list = document.getElementById('Thelist');
	var new_content = document.getElementById('new_list_item_text').value;

	var new_list = document.createElement('l')
	new_list.innerHTML =
						'<div class="draggerTab"></div>' +
						'<div class="colorTab"></div>' +
						'<span>'+ new_content+'</span>' +
						'<div class="deleteTab"></div>'+
						'<div class="doneTab"></div>'

	new_list.className = 'colorRed'
					
	list.appendChild(new_list);
}

function delete_content() {
	if (id) {}
}