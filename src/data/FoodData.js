export const seedData = [
	{
		name: 'Cheese Pizza',
		img: './img/pizza.png',
		section: 'Pizza'
	},
	{
		name: 'Pepperoni Pizza',
		img: './img/pizza2.jpeg',
		section: 'Pizza'
	},
	{
		name: 'Chicken Pizza',
		img: './img/chicken-pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'Veggie Pizza',
		img: '/img/healthy-pizza.jpeg',
		section: 'Pizza'
	},
	{
		name: 'Burger',
		img: '/img/burger.jpeg',
		section: 'Sandwich'
	},
	{
		name: 'Shrimp PoBoy',
		img: '/img/sandwich.jpeg',
		section: 'Sandwich'
	},
	{
		name: 'Fries',
		img: '/img/fries.jpeg',
		section: 'Side'
	},
	{
		name: 'Gyro',
		img: './img/gyro.jpeg',
		section: 'Sandwich'
	}
];

//TODO: add in function toUpperCase for first letter with a helper function in utils folder @ project root or folder inside the component lib?!

export const foods = seedData.reduce((result, food) => {
	if (!result[food.section]) {
		result[food.section] = [];
	}
	result[food.section].push(food);
	return result;
}, {});

// take the seedData Array and turn it into an object.
// if the result doesn't have a food.section make an empty array
// push the food into the food.section for the given result (sections)
// then return the result back from the function
// TODO: make the function reusable, think of a name that makes sence!
// TODO: this function should not be in the data seed file, make it a helper function in the utils folder
