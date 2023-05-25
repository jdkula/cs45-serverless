export default function handler(request, response) {
  let name = request.query.name;
  if (name === undefined) {
    name = 'World';
  }

  return response.send("Good night " + name);
}


// cs45-serverless.vercel.app/api/hello?name=Jonathan
