let books =[{

    title: "Speaking Javascript",
    author: "Axel Rauschmayer",
    pages: "460"
},

{
    title: "Programming Javascript",
    author: "Eric Elliot",
    pages: "254"
},

{
    title: "Understanding ECMAScript",
    author: "Nicholas C. Zaka",
    pages: "352"
}];

let newBook = {
    title: "Javascript Design Patterns",
    author: "Addy Osmani",
    pages: "254"
}

books.push(newBook);

let selectedBooks = books.slice(-2);

books.shift();

console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let sum = books[0].pages +  books[1].pages +  books[2].pages; 
console.log(`pages: ${sum}`);
