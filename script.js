var menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Piza"];

function getmenu(){
    var htmlData;
    htmlData = "<ol class='menulist'>"
    menu_list_array.sort();
    for(var i = 0; i < menu_list_array.length; i++){
        htmlData = htmlData + '<li>' + menu_list_array + '</li>';
    }
    htmlData = htmlData + "</ol>";
    document.getElementById("display_menu").innerHTML = htmlData;
}
function add_item(){
    var htmlData;
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();
    htmlData = "<section class='cards'>";
    for(var i=0; i<menu_list_array.length; i++){
        htmlData = htmlData + "<div class='card'>" +
        "<img src='pizzaImg.png'>" + 
        menu_list_array[i] +
         "</div>";
    }
    htmlData = htmlData + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmlData;
}
function add_top(){
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}
