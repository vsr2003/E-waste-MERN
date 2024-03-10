import React, { useState } from 'react';

const NotGotProductForm = () => {

  const [formData, setFormData] = useState({
    deviceName: '',
    modelNumber: '',
    category: '',
    company: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.deviceName.trim()) {
      newErrors.deviceName = 'Device Name is required';
    }
    if (!formData.modelNumber.trim()) {
      newErrors.modelNumber = 'Model Number is required';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // You can send the data to backend, reset the form, or any other actions

    //   reset
      setFormData({
        deviceName: '',
        modelNumber: '',
        category: '',
        company: ''
      });
    }
  };

  return (
    <form className=" w-full h-full p-8 bg-white rounded-lg drop-shadow-2xl ">

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="deviceName" className="text-sm font-medium text-gray-700 mb-1">Device Name</label>
          <input type="text" id="deviceName" name="deviceName" value={formData.deviceName} placeholder='Device Name' onChange={handleChange} className="input-field" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="modelNumber" className="text-sm font-medium text-gray-700 mb-1">Model Number</label>
          <input type="text" id="modelNumber" name="modelNumber" value={formData.modelNumber} placeholder='Model Number' onChange={handleChange} className="input-field" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">Category</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} placeholder='Category' className="input-field" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder='Company' className="input-field" />
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </div>
    </form>
  );
};

export default NotGotProductForm;
