//1.Map- discount the price from 2 dollars.


// let display=async()=>{
//     let data= await fetch('https://dummyjson.com/products');
//     let fetched=await data.json();
//     let product=fetched.products;
//     let value =product.map((e)=>{
//         e.price = e.price - 2
//         return product.push(e)
        
//     })
//     console.log(product)
// }
// display()



// 2. Filter - apply a filter with a product above 10 or below 10 dollars.


// let display=async()=>{
//         let result=[]
//         let data= await fetch('https://dummyjson.com/products');
//         let fetched=await data.json();
//         let product=fetched.products;
//         let above= product.filter(e=>e.price>10);
//         let below= product.filter(e=>e.price<10)

//         console.log(above);
//         console.log(below);
// // 4.Concat- concat the output of 2nd task.

//     let add=above.concat(below);
//     console.log(add);       
// }
// display()


//5. Every- check every object has a discount in the fetched data

// let display=async()=>{
//         let result=[]
//         let data= await fetch('https://dummyjson.com/products');
//         let fetched=await data.json();
//         let product=fetched.products;

//         let Available=product.every((e)=>{
//             if(e.discountPercentage)
//             {
//                 return product.push(e)
//             }
//         })
//         console.log(product);  
// }
// display()


//5. map- delete the repeated elements.



// let display=async()=>{
//     let result=[]
//     let data= await fetch('https://dummyjson.com/products');
//     let fetched=await data.json();
//     let product=fetched.products;
//     let mapped= product.map((e)=>{
//         categories=e.category
//         if(!result.includes(categories))
//         {
//             return result.push(categories)
//         }
//     }) 
//     console.log(result); 
// }

// display()


//3. For each- delete the repeated elements.

// let display=async()=>{
//     let result=[]
//     let data= await fetch('https://dummyjson.com/products');
//     let fetched= await data.json();
//     let product=fetched.products;

//     product.forEach((e)=> {
//         let indexFinder= result.findIndex(val => val == e.category)
//         if(indexFinder == -1){
//             result.push(e.category)
//         }
//     });
//     console.log(result);
    
// }
// display()



// 1.Fetch recipe API, extract cushion from that, and then remove the duplicate.

// let display=async()=>{
//     let result=[]
//     let data= await fetch('https://dummyjson.com/recipes');
//     let fetched=await data.json();
//     let Recipe= fetched.recipes;

//     // console.log(Recipe);
//     let mapped= Recipe.map((e)=>{
//         if(!result.includes(e.cuisine))
//         {
//             return result.push(e.cuisine)
//         }
//     })

//     console.log(result)
// }
//  display() 

// 2. Food which contains above 5 ingredients and below 5 ingredients.


// let display=async()=>{
//         let result=[]
//         let data= await fetch('https://dummyjson.com/recipes');
//         let fetched=await data.json();
//         let Recipe= fetched.recipes;
//     let Ingredients=Recipe.map(e=>e.ingredients)
//     let above=Ingredients.filter(val=>val.length>=10);
//     let below=Ingredients.filter(val=>val.length<10)

//         console.log(Ingredients);
//         // console.log("Dish contain ten or more than ten Ingredients",above);
//         // console.log("Dish contain less than ten Ingredients",below);
// }

// display()



// 3. Separate the array by Meal Type.

// let display=async()=>{
//     let DINNER=[];
//     let LUNCH=[];
//     let BREAKFAST=[];
//         let data= await fetch('https://dummyjson.com/recipes');
//         let fetched=await data.json();
//         let Recipe= fetched.recipes;
//         console.log(Recipe)
//         let mapped= Recipe.map((e)=>{
//             if(e.mealType.includes('Dinner'))
//             {
//                 DINNER.push(e)
//             }
//             if(e.mealType.includes('Lunch'))
//             {
//                 LUNCH.push(e)
//             }
//             if(e.mealType.includes('Breakfast'))
//             {
//                 BREAKFAST.push(e)
//             }
//         })
        
console.log(DINNER);
console.log(LUNCH);
console.log(BREAKFAST);
// Dinner Lunch Snack Dessert Side Dish Appertizer Breakfast Beverage        
// }
display()


const dummy = ()=>{
    return "DUMMY"
}