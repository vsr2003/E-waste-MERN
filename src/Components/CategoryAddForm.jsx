import React, { useState } from 'react';

const CategoryForm = () => {

  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!categoryName) {
      setError('Category Name is required');
      return;
    }
    
    // send it to database
    sendCategoryToDatabase(categoryName);
    
    // Reset form
    setCategoryName('');
    setError('');
  };

  const sendCategoryToDatabase = async(categoryName) => {

    const response = await fetch("http://localhost:4000/admin/addCategory",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify(
          {
            categoryName : categoryName
          }
        ),
    });

    if(!response.ok){
        console.log("not ok in addCategory frontend");
    }
    else{
        const data = await response.json();
        
        if(data.success)
        {
          console.log("category added to db",data.category);
        }
        else {
          console.log("success is not true in CategoryAddForm frontend")
        }
          
    }
  }


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white drop-shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter category name"
            required
          />
        </div>
        <p className="text-gray-600 text-sm italic mb-4">Category Name will be stored in first letter uppercase</p>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
