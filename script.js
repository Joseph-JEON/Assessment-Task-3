function highlightButton(button) {
    button.classList.add('highlighted');
}

function removeHighlight(button) {
    button.classList.remove('highlighted');
}

function Cat(){
    var displayField = document.getElementById("display");
      displayField.value = "User clicks Cat";
    var messageField = document.getElementById("message");
      messageField.textContent = "Cat is clicked";
    var image = document.getElementById("image");
      image.src = "cat.png"; //image from Adobe stock free image
    var imageSourceField = document.getElementById("image-source");
    imageSourceField.textContent = "https://stock.adobe.com/au/search?k=cat&search_type=usertyped&asset_id=303624505";
}

function Dog(){
    var displayField = document.getElementById("display");
      displayField.value = "User clicks Dog";
    var messageField = document.getElementById("message");
    messageField.textContent = "Dog is clicked";
    var image = document.getElementById("image");
    image.src = "dog.png"; //image from Adobe stock free image
    var imageSourceField = document.getElementById("image-source");
    imageSourceField.textContent = "https://stock.adobe.com/au/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&k=dog&search_page=1&search_type=usertyped&acp=&aco=dog&get_facets=0&asset_id=273162497";
}

function Frog(){
    var displayField = document.getElementById("display");
      displayField.value = "User clicks Frog";
    var messageField = document.getElementById("message");
      messageField.textContent = "Frog is clicked";
    var image = document.getElementById("image");
      image.src = "frog.png" //image from Adobe stock free image
    var imageSourceField = document.getElementById("image-source");
    imageSourceField.textContent = "https://stock.adobe.com/au/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&k=frog&search_type=usertyped&acp=&aco=frog&get_facets=0&asset_id=180285804";
}