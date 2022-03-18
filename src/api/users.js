const mockUsers = [
  {
    id: 1,
    email: "elena@gmail.com",
    name: "Elena",
    address: {
      country: "Georgia",
      city: "Tbilisi",
      zipCode: "111"
    }
  },
  {
    id: 2,
    name: "Helga",
    email: "helga@gmail.com",
    address: {
      country: "Israel",
      city: "Tel-Aviv",
      zipCode: "222"
    }
  }
];

export const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers.find((user) => user.id === userId));
    }, 1000);
  });
};
