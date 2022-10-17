let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count > 0 ? count -= 1 : 0
    countEl.textContent = count
}

function save() {
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    countEl.textContent = 0
    count = 0
}

function del() {
    let deleteEntries = "Are you sure you want to delete entries?"
    if (confirm(deleteEntries) == true) {
        deleteEntries = "Previous entries: ";
        countEl.textContent = 0
        count = 0
      } else {
        deleteEntries = saveEl.textContent
      }
    saveEl.textContent = deleteEntries
}

