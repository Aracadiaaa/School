let userPoints = 50;
let isColorEquipped = false;
let isBackgroundEquipped = false;
let equippedBackground = null;

function buyItem(itemCost, button) {
    if (userPoints >= itemCost) {
        userPoints -= itemCost;
        updatePointsDisplay();
        updatePageStyles(); // Call a function to update the page styles
        alert("Item purchased!");
        button.style.display = 'none'; // Hide the buy button after purchase
    } else {
        alert("Not enough points to buy this item!");
    }
}

function updatePointsDisplay() {
    document.getElementById("user-points").innerText = userPoints;
}

function updatePageStyles() {
    // Example: Change the background color of the entire body
    document.body.style.backgroundColor = '#f0f0f0';
}

function equipColor(itemClass) {
    if (isColorEquipped) {
        document.body.style.backgroundColor = '#f8f8f8'; // Original background color
        alert("Color unequipped!");
    } else {
        // Set background color based on the item's class
        let itemElement = document.querySelector(`.${itemClass}`);
        let itemColor = window.getComputedStyle(itemElement).backgroundColor;
        document.body.style.backgroundColor = itemColor || '#f8f8f8'; // Use the item color if available, otherwise revert to original color
        alert("Color equipped!");
    }
    isColorEquipped = !isColorEquipped;
}

//////notepad////////

function openNotepad() {
    isNotepadOpen = true;
    const notepadPopup = document.getElementById('notepadPopup');
    notepadPopup.style.display = 'block';

    // Make notepad draggable
    dragElement(notepadPopup);
}

function closeNotepad() {
    isNotepadOpen = false;
    const notepadPopup = document.getElementById('notepadPopup');
    notepadPopup.style.display = 'none';
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


/////////////////////////

function unequipColor() {
    document.body.style.backgroundColor = '#f8f8f8'; // Revert to original background color
    alert("Color unequipped!");
    isColorEquipped = false;
}

function equipBackground(itemId) {
    if (isBackgroundEquipped) {
        document.body.style.backgroundImage = 'none'; // Remove background image
        alert("Background unequipped!");
    } else {
        // Set background image based on the item's id
        let itemElement = document.getElementById(itemId);
        let backgroundImageUrl = itemElement.dataset.imageUrl;
        document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
        alert("Background equipped!");
    }
    isBackgroundEquipped = !isBackgroundEquipped;
}

function equipBackground(itemId) {
    if (equippedBackground === itemId) {
        document.body.style.backgroundImage = 'none'; // Remove background image
        alert("Background unequipped!");
        equippedBackground = null;
    } else {
        // Set background image based on the item's id
        let itemElement = document.getElementById(itemId);
        let backgroundImageUrl = itemElement.dataset.imageUrl;
        document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;
        alert("Background equipped!");
        equippedBackground = itemId;
    }
}

function unequipBackground(itemId) {
    document.body.style.backgroundImage = 'none'; // Remove background image
    alert("Background unequipped!");
    equippedBackground = null;
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos >= currentScrollPos) {
        document.getElementById("navbar").style.bottom = "0px";
    } else {
        document.getElementById("navbar").style.bottom = "-65px";
    }
    prevScrollpos = currentScrollPos;
}