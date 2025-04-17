import React from 'react'

function List() {
    const items = ['Apple', 'Banana','Cherry'];
    const fruits = ['wood apple', 'Longan','orange'];
    const users = [
      {id: 1, name: 'Geeks', age: 30},
      {id: 2, name: 'For', age: 25},
      {id: 3, name: 'Geeks', age: 20},
    ];

    const products = [
      {id: 1, name: 'coca', price:1500},
      {id: 2, name: 'sting', price:1500},
      {id: 3, name: 'champoin', price:3500},
    ];

    const Company = ["Hello", "Company","Cambodia"];
    const handleClick = (Company) => {
      alert(`You clicked on ${Company}`);
    }
  return (
    <div>
      <h1>My Fruit List</h1>
      <ul>
        {items.map((item,index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul> {fruits.map((fruit,index)=> (
          <li key={index}>{fruit}</li>
      ))}
      </ul>
     
     {/* List with object */}
      <ul> 
        {users.map((user) =>(
          <li key={user.id}>{user.name} is {user.age} years old.</li>
        ))}
      </ul>

      {/* conditional rendering in list */}
        <ul>
          {products.map((product) =>(
            product.price > 1500 ? (
              <li key={product.id}>{product.name} is over 1500</li>
            ):(
              <li key={product.id}>{product.name} is under 1500</li>
            )
          ))}
        </ul>

        {/* List with a click event */}
          <ul>
            {Company.map((Company,index) =>(
              <button key={index} onClick={() => handleClick(Company)}>{Company}</button>
            ))}
          </ul>
    </div>
  )
}
export default List;
