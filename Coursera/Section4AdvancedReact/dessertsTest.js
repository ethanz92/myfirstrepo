const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
];
  
function dessertsList(desserts) {
    const sortedDesserts = desserts.filter(dessert => dessert.calories <= 500)
      .sort((dessert1, dessert2) => dessert1.calories - dessert2.calories)
        .map(dessert => `${dessert.name} - ${dessert.calories} cal`)
    console.log(sortedDesserts);
};

dessertsList(desserts);