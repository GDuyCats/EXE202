import axios from 'axios';

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

export const createProduct = (productData, setProducts) => {
    const formData = new FormData();

    Object.keys(productData).forEach(key => {
        if (key === 'images' || key === 'productMaterials') {
            productData[key].forEach((item, index) => {
                if (key === 'images') {
                    if (item.file) {
                        formData.append(`images[${index}].file`, item.file);
                    }
                    formData.append(`images[${index}].thumbnail`, item.thumbnail);
                } else {
                    Object.keys(item).forEach(itemKey => {
                        if (typeof item[itemKey] === 'object' && item[itemKey] !== null) {
                            Object.keys(item[itemKey]).forEach(subKey => {
                                if (typeof item[itemKey][subKey] === 'object' && item[itemKey][subKey] !== null) {
                                    Object.keys(item[itemKey][subKey]).forEach(nestedKey => {
                                        formData.append(`productMaterials[${index}][${itemKey}][${subKey}][${nestedKey}]`, item[itemKey][subKey][nestedKey]);
                                    });
                                } else {
                                    formData.append(`productMaterials[${index}][${itemKey}][${subKey}]`, item[itemKey][subKey]);
                                }
                            });
                        } else {
                            formData.append(`productMaterials[${index}][${itemKey}]`, item[itemKey]);
                        }
                    });
                }
            });
        } else {
            formData.append(key, productData[key]);
        }
    });

    // Log the formData entries for debugging
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    axios.post('https://ohecaa.azurewebsites.net/api/Products/CreateProduct', formData, {
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
        if (error.response) {
            const { data, status, headers } = error.response;
            console.error('Validation Errors:', data.errors || data);
            console.error('Error response data:', data);
            console.error('Error status:', status);
            console.error('Error headers:', headers);

            if (data.errors) {
                Object.keys(data.errors).forEach(key => {
                    console.error(`Error in ${key}: ${data.errors[key].join(', ')}`);
                });
            }
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
    });
};
