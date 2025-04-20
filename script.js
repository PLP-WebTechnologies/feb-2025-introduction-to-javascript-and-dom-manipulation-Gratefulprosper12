
document.addEventListener('DOMContentLoaded', function() {
   
    const textChangerBtn = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');

    textChangerBtn.addEventListener('click', function() {
        dynamicText.textContent = "The text has been changed successfully!";
    });

    // Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');
    let isColorChanged = false;

    styleChangerBtn.addEventListener('click', function() {
        if (isColorChanged) {
            styleBox.style.backgroundColor = 'lightblue';
        } else {
            styleBox.style.backgroundColor = 'salmon';
        }
        isColorChanged = !isColorChanged;
    });

    // Add or remove an element when a button is clicked
    const elementTogglerBtn = document.getElementById('element-toggler');
    const toggleElement = document.getElementById('toggle-element');

    elementTogglerBtn.addEventListener('click', function() {
        toggleElement.classList.toggle('visible');
        toggleElement.classList.toggle('hidden');
    });
});