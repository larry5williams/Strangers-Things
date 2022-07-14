const fetchRequest = async (url, fetchOptions) => {
  try {
    const res = await fetch(url, fetchOptions);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("There was an error with the fetch request");
  }
};

module.exports = {
  fetchRequest,
};
