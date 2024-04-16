const BASE_URL = 'https://verificado-back-end-smpa.onrender.com';

export const getArticle = async (url) => {
  const response = await fetch(`${BASE_URL}/news/fetch-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: url,
    }),
  });
  console.log(response);
  return response;
};
