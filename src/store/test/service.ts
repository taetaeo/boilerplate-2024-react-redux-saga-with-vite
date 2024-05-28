export const GetTests = async (): Promise<any> => {
  console.log("4.TestService---GetTests");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};
export const GetTest = async <T>(id: T): Promise<any> => {
  console.log("4.TestService---GetTest");
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
};
