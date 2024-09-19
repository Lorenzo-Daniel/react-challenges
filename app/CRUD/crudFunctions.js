export const getAllResults = async (  category,
  setIsLoading,
  setCategories,
  setData) => {
  setIsLoading(true);
  try {
    const request = await fetch('https://fakestoreapi.com/products');
    const response = await request.json();
    setData(response);
    setCategories((prevValues) =>
    prevValues.map((item, i) =>
      item.name === category
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    )
  );
    setIsLoading(false);
  } catch (error) {
    console.error(error, 'error en get all products');
    setIsLoading(false);
  }
};

// --------------------------------------------------------

export const getCategoryResults = async (
  category,
  setIsLoading,
  setCategories,
  setData
) => {
  setIsLoading(true);
  try {
    const request = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const response = await request.json();
    setData(response);
    setCategories((prevValues) =>
      prevValues.map((item, i) =>
        item.name === category
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );
    setIsLoading(false);
  } catch (error) {
    console.error(error, 'error en getCategoryResults');
    setIsLoading(false);
  }
};

// --------------------------------------------------------

export const updateProd = async (id, setIsLoading, setData) => {
  setIsLoading(true);
  try {
    const request = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    });
    const response = await request.json();
    setData((prevValues) =>
      prevValues.map((item, i) =>
        item.id === response.id
          ? {
              id: response.id,
              title: 'test product',
              price: 13.5,
              description: 'lorem ipsum set',
              image: 'https://i.pravatar.cc',
              category: 'electronic',
            }
          : item
      )
    );
    setIsLoading(false);
  } catch (error) {
    console.error(error, 'error en updateProd');
    setIsLoading(false);
  }
};

// --------------------------------------------------------

export const deleteProd = async (id, setIsLoading, setData) => {
  setIsLoading(true);
  try {
    const request = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    });
    const response = await request.json();

    setData((prevValues) => prevValues.filter((item) => item.id !== id));

    setIsLoading(false);
  } catch (error) {
    console.error(error, 'error en deleteProd');
    setIsLoading(false);
  }
};

// --------------------------------------------------------

export const addProd = async ( setIsLoading, data,setData) => {
  setIsLoading(true);
  try {
    const request = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test product',
        price: 20.99,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    });
    const response = await request.json();

    setData((prevValues) => [
      {
        id: data.length + 1,
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      },
      ...prevValues,
    ]);

    setIsLoading(false);
  } catch (error) {
    console.error(error, 'error en deleteProd');
    setIsLoading(false);
  }
};
