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