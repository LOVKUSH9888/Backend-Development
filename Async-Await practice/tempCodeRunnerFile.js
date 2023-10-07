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
