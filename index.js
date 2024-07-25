
const book = {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "genre": "Fiction"
};

try {
  const jsonString = JSON.stringify(book);
  const parsedBook = JSON.parse(jsonString);
  console.log(parsedBook);
} catch (error) {
  console.error("Invalid JSON:", error);
}


const fs = require('fs');

function readStudentsFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const students = JSON.parse(data);
    return students;
  } catch (error) {
    console.error("Error reading or parsing JSON:", error);
  }
}

const students = readStudentsFile('students.json');
console.log(students);

const dishes = [
  {
    "name": "Pasta Carbonara",
    "description": "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    "price": 12.99,
    "ingredients": ["pasta", "eggs", "cheese", "pancetta", "pepper"]
  },
  {
    "name": "Margherita Pizza",
    "description": "Tomato sauce, fresh mozzarella, and basil.",
    "price": 10.99,
    "ingredients": ["tomato sauce", "mozzarella", "basil"]
  }
];

try {
  const jsonString = JSON.stringify(dishes);
  const parsedDishes = JSON.parse(jsonString);
  console.log(parsedDishes);
} catch (error) {
  console.error("Invalid JSON:", error);
}




const movies = [
  {
    "title": "Inception",
    "releaseYear": 2010,
    "director": "Christopher Nolan",
    "genre": "Science Fiction",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    "title": "The Matrix",
    "releaseYear": 1999,
    "director": "The Wachowskis",
    "genre": "Science Fiction",
    "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  }
];


const jsonStringM = JSON.stringify(movies);

const fs = require('fs');
fs.writeFileSync('movies.json', jsonStringM);

try {
  const data = fs.readFileSync('movies.json', 'utf8');
  const parsedMovies = JSON.parse(data);
  console.log(parsedMovies);
} catch (error) {
  console.error("Invalid JSON:", error);
}
