
/* ITEM CAPTURE */
$('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    // Capture item from user input by getting the value of the text box
    const itemText = $(this).find("input[name='shopping-list-entry']").val();
    console.log(itemText);
    // Create a template for a shopping item using string literals and add captured value 
    const newItem = 
    `
    <li>
    <span class="shopping-item">${itemText}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `
    // Add item to shopping list
    $(".shopping-list").append(newItem)
});

/* CHECK/UNCHECK ITEM */
$('.shopping-list').on('click', ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .find(".shopping-item")
    .toggleClass("shopping-item__checked")
})

/* DELETE ITEM */
$('.shopping-list').on('click', ".shopping-item-delete", function(event) {
  $(this)
    .closest("li")
    .remove()
})