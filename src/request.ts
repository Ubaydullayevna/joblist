export async function getData(url: string) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

getData('http://localhost:3000/jobs')