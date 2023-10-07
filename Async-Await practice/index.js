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

demo().then((d) => {
    console.log(d);
}).catch((e) => {
    console.log(e);
})