// src/api/userApi.js
export const fetchUser = async (userId) => {
  const response = await fetch('https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/fetch-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const data = await response.json();
  return data;
};
