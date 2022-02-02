'use strict';

// Generic Listeners to await for user interface

// Listener for add item button
const addItem = document.getElementById("additem")
addItem.addEventListener("click", event => {
    makeItem();
})

// Listener for delete item, deletes the last input item.
const deleteButton = document.getElementById("deleteitem");
deleteButton.addEventListener("click", event => {
    deleteItem();
})

//  Listener for delete ALL, deletes the entire list.
const deleteAllButton = document.getElementById("deleteAll");
deleteAllButton.addEventListener("click", event => {
    let answer = window.confirm("Are you sure you want to Delete All items on your list?");
    if (answer) {
        deleteAll()
    }
})

// Global Declarations

let list = document.getElementById("list")

async function deleteAll() {
    // let list = document.getElementById("list")
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

// Function to Delete the last input item.

async function deleteItem() {
    
    // let list = document.getElementById("list")
    list.removeChild(list.firstElementChild)
}

// Function to add item

async function makeItem() {
    let inputText = document.getElementById("toadd").value
    let newItem = document.createElement("li");
    newItem.textContent = inputText
    list.appendChild(newItem)

}