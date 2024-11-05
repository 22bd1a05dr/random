// a) Function to swap the case of each character in a string
function swapCase(inputString) {
    return inputString.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}

// b) Function to find the most frequent item in an array
function mostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequentItem;

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequentItem = item;
        }
    });
    return mostFrequentItem;
}

// c) Function to remove duplicate items from an array (ignore case sensitivity)
function removeDuplicates(arr) {
    const uniqueItems = new Set(arr.map(item => item.toLowerCase()));
    return Array.from(uniqueItems);
}

// d) Function to perform binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right
        } else {
            right = mid - 1; // Search left
        }
    }
    return -1; // Target not found
}

// e) Function to list the properties of a JavaScript object
function listProperties(obj) {
    return Object.keys(obj);
}

// f) Function to check whether an object contains a given property
function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

// g) Function to sort a list of elements using Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// h) Function to implement Bubble Sort
function bubbleSort(arr) {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    return sortedArr;
}

// i) Function to read from a JSON object and display the data in a table
function displayDataInTable(jsonData) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create table headers
    Object.keys(jsonData[0]).forEach(key => {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create table rows
    jsonData.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

// j) Function to take user input from a form and display it in a table
function createFormAndDisplayTable() {
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <label for="rollno">Roll No:</label>
        <input type="text" id="rollno" required>
        <label for="marks">Marks:</label>
        <input type="number" id="marks" required>
        <button type="submit">Submit</button>
    `;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rollno = document.getElementById('rollno').value;
        const marks = document.getElementById('marks').value;

        const gpa = (marks / 100) * 4; // Assuming GPA is out of 4 based on marks
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${name}</td><td>${rollno}</td><td>${marks}</td><td>${gpa.toFixed(2)}</td>`;

        document.querySelector('table').appendChild(tableRow); // Append to existing table
    });

    document.body.appendChild(form);
}

// Example Usage
console.log(swapCase('The Quick Brown Fox')); // tHEqUICKbROWNfOX
console.log(mostFrequent([1, 2, 3, 1, 2, 1])); // 1
console.log(removeDuplicates(['a', 'A', 'b', 'B', 'c'])); // ['a', 'b', 'c']
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(listProperties({ name: 'Alice', age: 25 })); // ['name', 'age']
console.log(hasProperty({ name: 'Alice', age: 25 }, 'name')); // true
console.log(quickSort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
console.log(bubbleSort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]

// Example JSON data for display
const jsonData = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
displayDataInTable(jsonData);

// Create form and display table for user input
createFormAndDisplayTable();
