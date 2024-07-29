import axios from 'axios';

const handleApiError = (error) => {
  console.error('API Error:', error);
  if (error.response && error.response.data) {
    console.error('Response data:', error.response.data);
  }
};

export const createProduct = (data, setProducts) => {
  axios.post('https://ohecaa.azurewebsites.net/api/Products/CreateProduct', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => {
    if (response.data.success) {
      console.log('Create Response:', response.data);
      setProducts(prevProducts => [...prevProducts, response.data.data]);
    } else {
      console.error('Failed to create product:', response.data.message);
    }
  })
  .catch(error => {
    handleApiError(error);
  });
};



export const deleteProduct = (productId, products, setProducts) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
        axios.delete(`https://ohecaa.azurewebsites.net/api/Products/DeleteProduct?productId=${productId}`)
            .then(response => {
                console.log('Delete Response:', response.data);
                setProducts(products.filter(product => product.id !== productId));
            })
            .catch(error => {
                console.error('Error deleting the product:', error);
            });
    }
};

export const updateProduct = (productId, data, setProducts) => {
  // Log the form data to check its content
  for (let pair of data.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  axios.put(`https://ohecaa.azurewebsites.net/api/Products/UpdateProduct/${productId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => {
    if (response.data.success) {
      console.log('Update Response:', response.data);
      setProducts(prevProducts => prevProducts.map(product => 
        product.id === productId ? response.data.data : product
      ));
    } else {
      console.error('Failed to update product:', response.data.message);
    }
  })
  .catch(error => {
    handleApiError(error);
    console.error('Error status:', error.response.status);
    console.error('Error headers:', error.response.headers);
  });
};