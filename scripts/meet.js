let promise = fetch(
  "https://cyaojkcxfuyuxiivrlen.supabase.co/rest/v1/dogs?select=*",
  {
    mode: "no-cors",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5YW9qa2N4ZnV5dXhpaXZybGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5NzQwOTYsImV4cCI6MTk3MjU1MDA5Nn0.9ajPACwu-jAPlzvjWBqfNdqItqJdWJLnk8tQIV3xxH0",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5YW9qa2N4ZnV5dXhpaXZybGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5NzQwOTYsImV4cCI6MTk3MjU1MDA5Nn0.9ajPACwu-jAPlzvjWBqfNdqItqJdWJLnk8tQIV3xxH0",
  }
);

promise.then((response) => {
  console.log(
    response.text().then((data) => {
      console.log(data);
    })
  );
});
