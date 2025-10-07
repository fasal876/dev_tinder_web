export const sumbitForm = async (URL, METHOD, body) => {
  const response = await fetch(URL, {
    method: METHOD,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include",
  });
  if (!response.ok) {
    const err = new Error(response.statusText);
    err.message = "Invalid credentials";
    err.status = response.status;
    throw err;
  }
  const json = await response.json();
  return json;
};
