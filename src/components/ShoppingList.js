import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    // event.target.value will be the value selected by the user
    setSelectedCategory(event.target.value);
    return selectedCategory;
  }

  // we want to filter the items to only display the ones based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
    return true;
    }else {
     return item.category === selectedCategory;
    }
  });

  // const groceryItemList = itemsToDisplay.map((item) =>(
  //   <Item name={item.name} category={item.category} key={item.id}></Item>
  // ));

  return(
    <div className="ShoppingLIst">
      <div className="Filter">      
          <select name="filter" onChange={handleFilterChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
       
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
