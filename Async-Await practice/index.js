//1st code :-
async function love() {
  return "lovkush yadav";
}

// console.log(love());

//It means we can access it  : -
love()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//2nd code :-
const getData = async () => {
  return "student name ";
};

getData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error); // Removed the redundant console.log statement
  });

//3rd : code :-
async function demo() {
  // const link = await fetch(`https://jsonplaceholder.typicode.com/users`)
  // const apiResponse = await response.json()
  // return apiResponse;
  return (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
}

console.log(demo());

demo()
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });

//#taking it to a level up again :-
async function fun1() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

fun1().then(function (d) {
  console.log(d);
});

//4th further
async function imp() {
  try {
    const apiLink = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const apiResponse = await apiLink.json();
    // Returning the response here
    return apiResponse;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error or return a rejected Promise
  }
}

// Calling the api function
imp()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // Handle the error here if needed
    console.error("Error:", error);
  });
