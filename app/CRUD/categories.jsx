
import {
    getAllResults,
    getCategoryResults,
  } from './crudFunctions';
  
  export const categoriesList = [
    { 
      name: 'all products', 
      isSelected: false, 
      handleOnclick: (setIsLoading, setData,setCategories) => getAllResults('all products',setIsLoading, setData,setCategories) 
    },
    { 
      name: 'electronics', 
      isSelected: false, 
      handleOnclick: (setIsLoading, setCategories, setData) => 
        getCategoryResults('electronics', setIsLoading, setCategories, setData) 
    },
    { 
      name: 'jewelery', 
      isSelected: false, 
      handleOnclick: (setIsLoading, setCategories, setData) => 
        getCategoryResults('jewelery', setIsLoading, setCategories, setData) 
    },
    { 
      name: "men's clothing", 
      isSelected: false, 
      handleOnclick: (setIsLoading, setCategories, setData) => 
        getCategoryResults("men's clothing", setIsLoading, setCategories, setData) 
    },
    { 
      name: "women's clothing", 
      isSelected: false, 
      handleOnclick: (setIsLoading, setCategories, setData) => 
        getCategoryResults("women's clothing", setIsLoading, setCategories, setData) 
    }
  ];