import { Listbox } from '@headlessui/react'
import Head from "next/head"
import React, { useContext, useEffect, useState } from "react"

import Image from 'next/image'
import { Context } from '../components/StateProvider'
import  Router  from 'next/router'

const searchfilter = [
  { id: 1, name: 'Select', value: 'select' },
  { id: 2, name: 'Restaurant', value: 'restname' },
  { id: 3, name: 'Place', value: 'place' },
  { id: 4, name: 'cuisine', value: 'name' },

]
const product = [
  {
    "id": 1095702,
    "name": "Grapefruit Ginger Spritzer",
    "image": "https://spoonacular.com/recipeImages/1095702-312x231.jpg",
    "link": "https://spoonacular.com/recipes/grapefruit-ginger-spritzer-1095702",
    "restname": "Restpoint",
    "place": "Bangalore",
    "price": "200"
  },
  {
    "id": 715477,
    "name": "Lemon Bars",
    "image": "https://spoonacular.com/recipeImages/715477-312x231.jpg",
    "link": "https://spoonacular.com/recipes/the-best-lemon-bars-715477",
    "restname": "Restpoint",
    "place": "Chennai",
    "price": "300"
  },
  {
    "id": 1098240,
    "name": "Lemon Fresh Spaghetti, Garden Sauce",
    "image": "https://spoonacular.com/recipeImages/1098240-312x231.jpg",
    "link": "https://spoonacular.com/recipes/lemon-fresh-spaghetti-with-garden-sauce-pumpkin-flowers-1098240",
    "restname": "Restpoint",
    "place": "kasaragod",
    "price": "200"
  },
  {
    "id": 1096247,
    "name": "Grilled Rosemary Lemon Chicken",
    "image": "https://spoonacular.com/recipeImages/1096247-312x231.jpg",
    "link": "https://spoonacular.com/recipes/grilled-rosemary-lemon-chicken-thighs-1096247",
    "restname": "TBee",
    "place": "Bangalore",
    "price": "200"
  },
  {
    "id": 1095832,
    "name": "Traditional Focaccia Bread",
    "image": "https://spoonacular.com/recipeImages/1095832-312x231.jpg",
    "link": "https://spoonacular.com/recipes/traditional-focaccia-bread-1095832",
    "restname": "TBee",
    "place": "Bangalore",
    "price": "200"
  },
  {
    "id": 1095739,
    "name": "Chewy Pistachio Pretzel ",
    "image": "https://spoonacular.com/recipeImages/1095739-312x231.jpg",
    "link": "https://spoonacular.com/recipes/chewy-pistachio-pretzel-chocolate-chip-cookies-1095739",
    "restname": "TBee",
    "place": "Bangalore",
    "price": "100"
  },
  {
    "id": 994607,
    "name": "Kaiserschmarrn",
    "image": "https://spoonacular.com/recipeImages/994607-312x231.jpg",
    "link": "https://spoonacular.com/recipes/kaiserschmarrn-994607",
    "restname": "TBee",
    "place": "Chennai",
    "price": "200"
  },
  {
    "id": 1096195,
    "name": "Peanut Butter Brownie Cheesecake",
    "image": "https://spoonacular.com/recipeImages/1096195-312x231.jpg",
    "link": "https://spoonacular.com/recipes/peanut-butter-brownie-cheesecake-1096195",
    "restname": "Chai",
    "place": "Kollam",
    "price": "200"
  },
  {
    "id": 1096203,
    "name": "Halloumi, Blueberry & Spinach Salad",
    "image": "https://spoonacular.com/recipeImages/1096203-312x231.jpg",
    "link": "https://spoonacular.com/recipes/halloumi-blueberry-spinach-salad-1096203",
    "restname": "Chai",
    "place": "Kollam",
    "price": "200"
  },
  {
    "id": 1492311,
    "name": "Pumpkin Pie Hot Chocolate",
    "image": "https://spoonacular.com/recipeImages/1492311-312x231.jpg",
    "link": "https://spoonacular.com/recipes/boozy-pumpkin-pie-hot-chocolate-1492311",
    "restname": "Chai",
    "place": "Kollam",
    "price": "200"
  },
  {
    "id": 1492311,
    "name": "Pumpkin Pie",
    "image": "https://spoonacular.com/recipeImages/1492311-312x231.jpg",
    "link": "https://spoonacular.com/recipes/boozy-pumpkin-pie-hot-chocolate-1492311",
    "restname": "Chai",
    "place": "Kollam",
    "price": "200"
  }


]
const Product: React.FC = () => {
  const context = useContext(Context)
  const [seletedName, setseletedName] = useState(searchfilter[0])
  const [result, setResult] = useState(product);
  const [search, setsearch] = useState("");
  const sortProduct = () => {
    setResult([])
    result.sort((first, next) => first.price > next.price ? 1 : -1)
      .map((data) => setResult(prevdata => [...prevdata, data]))
  }

  const filteredResult = (name: any, search: any) => {
    setResult([])

    product.filter((food) => {
      if (name === 'Restaurant') food.restname === search
      if (name === 'Place') food.place === search
      if (name === 'cuisine') food.name === search
    })
      .map((data) => setResult(prevdata => [...prevdata, data]))
  }
  const searchItem = (name: any) => {
    setResult([]);
    product.filter((data) => data.name.includes(name) || data.restname.includes(name) || data.place.includes(name))
      .map((data) => setResult(prevdata => [...prevdata, data]))

  }
  useEffect(() => {
    // localStorage.setItem("username", " ");
    seletedName.name !== 'Select' ? filteredResult(seletedName.name, search) : setResult(product);
  }, [seletedName])
  return (

    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-full w-full">
          <div className="sticky bg-pink-500 top-0 z-30">
            <div className="py-6">
              <div className="flex justify-center items-center ">
                <div className="border-2 rounded-full p-1 mr-1">
                  <input type="text" placeholder="Search" className="outline-none w-full bg-pink-500
                  placeholder-black
                  text-blue-500"
                    value={search}
                    onChange={(event) => setsearch(event.target.value)}
                    
                  />
                
                </div>
                <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800" onClick={() => searchItem(search)}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
              </div>
            </div>
            {/* filter */}
            <div className="flex justify-center items-center">
              <div className="bg-yellow-400 my-4">
                <Listbox value={seletedName} onChange={setseletedName} >
                  <Listbox.Button className="flex w-24">{seletedName.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  ><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </Listbox.Button>
                  <Listbox.Options className="z-20 absolute top-16 bg-gray-50 cursor-pointer border-2 p-2 rounded-md" >
                    {searchfilter.map((data) => (
                      <Listbox.Option
                        key={data.id}
                        value={data}
                        disabled={false}
                      >
                        {data.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
              <button className="rounded-md bg-indigo-500 mx-28 w-20 h-8 hover:bg-blue-400 hover:text-gray-50" onClick={() => sortProduct()}>Sort</button>
              <button className="cursor-pointer" onClick={()=>{
                localStorage.setItem("username", " ");
                Router.push("/")
              }}>logout</button>
            </div>
          </div>
          {/* list item */}
          <div className="flex justify-between flex-wrap flex-col lg:flex-row items-center ">

            {result.map((data, index) => (
              <div className="bg-gray-300 rounded-md m-4 p-4 flex justify-center items-center flex-col" key={index}>
                <h1>{data.name}</h1>
                <h1>{data.restname}</h1>
                <Image
                  width={300}
                  height={300}
                  objectFit="cover"
                  src={data.image}
                  alt={data.name}
                />
                <h1>{data.place}</h1>
                <h1> &#8377; {data.price}</h1>

              </div>
            )
            )}

          </div>
        </div>
      </main>
    </div>

  )
};

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//     const result = await fetch("https://api.spoonacular.com/food/search?&apiKey=744ed8b3e1714ca0a74ae6ea8192d04c")
//     const product = await result.json();

//     return {
//         props: {
//             product
//         }
//     }
// };

export default Product