import React, { useState } from 'react';
import { createProduct } from './ProductService'; // Adjust the path as necessary

const CreateProductModal = ({ setProducts, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    unitPrice: '',
    priceSold: '',
    quantity: '',
    description: '',
    quantitySold: '',
    country: '',
    status: '',
    brandName: '',
    discountPercent: '',
    productMaterials: [
      {
        detail: '',
        materialId: '',
        material: {
          childCategoryId: '',
          childCategory: {
            name: '',
            parentCategoryId: '',
            parentCategory: {
              id: '',
              name: ''
            }
          }
        }
      }
    ],
    images: [
      {
        file: null,
        thumbnail: false
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMaterialChange = (index, e) => {
    const { name, value } = e.target;
    const materials = [...formData.productMaterials];
    const keys = name.split('.');
    if (keys.length === 2) {
      materials[index][keys[0]][keys[1]] = value;
    } else if (keys.length === 3) {
      materials[index][keys[0]][keys[1]][keys[2]] = value;
    } else if (keys.length === 4) {
      materials[index][keys[0]][keys[1]][keys[2]][keys[3]] = value;
    } else {
      materials[index][name] = value;
    }
    setFormData({ ...formData, productMaterials: materials });
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const images = [...formData.images];
    images[index].file = file;
    setFormData({ ...formData, images: images });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const data = new FormData();
    for (const key in formData) {
      if (key === 'productMaterials') {
        formData.productMaterials.forEach((material, index) => {
          data.append(`productMaterials[${index}].detail`, material.detail);
          data.append(`productMaterials[${index}].materialId`, material.materialId);
          data.append(`productMaterials[${index}].material.childCategoryId`, material.material.childCategoryId);
          data.append(`productMaterials[${index}].material.childCategory.name`, material.material.childCategory.name);
          data.append(`productMaterials[${index}].material.childCategory.parentCategoryId`, material.material.childCategory.parentCategoryId);
          data.append(`productMaterials[${index}].material.childCategory.parentCategory.id`, material.material.childCategory.parentCategory.id);
          data.append(`productMaterials[${index}].material.childCategory.parentCategory.name`, material.material.childCategory.parentCategory.name);
        });
      } else if (key === 'images') {
        formData.images.forEach((image, index) => {
          if (image.file) {
            data.append(`images[${index}].file`, image.file);
          }
          data.append(`images[${index}].thumbnail`, image.thumbnail);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    // Send the form data to the server
    createProduct(data, setProducts);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-30">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full max-w-4xl">
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Create New Product</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium leading-6 text-gray-900">Basic Information</h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="unitPrice"
                    placeholder="Unit Price"
                    value={formData.unitPrice}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="priceSold"
                    placeholder="Price Sold"
                    value={formData.priceSold}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="quantitySold"
                    placeholder="Quantity Sold"
                    value={formData.quantitySold}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Brand Name"
                    value={formData.brandName}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="discountPercent"
                    placeholder="Discount Percent"
                    value={formData.discountPercent}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium leading-6 text-gray-900">Product Materials</h4>
                {formData.productMaterials.map((material, index) => (
                  <div key={index} className="space-y-2">
                    <input
                      type="text"
                      name="detail"
                      placeholder="Detail"
                      value={material.detail}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      name="materialId"
                      placeholder="Material ID"
                      value={material.materialId}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      name="material.childCategoryId"
                      placeholder="Child Category ID"
                      value={material.material.childCategoryId}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      name="material.childCategory.name"
                      placeholder="Child Category Name"
                      value={material.material.childCategory.name}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      name="material.childCategory.parentCategoryId"
                      placeholder="Parent Category ID"
                      value={material.material.childCategory.parentCategoryId}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      name="material.childCategory.parentCategory.id"
                      placeholder="Parent Category ID"
                      value={material.material.childCategory.parentCategory.id}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      name="material.childCategory.parentCategory.name"
                      placeholder="Parent Category Name"
                      value={material.material.childCategory.parentCategory.name}
                      onChange={(e) => handleMaterialChange(index, e)}
                      className="border p-2 rounded w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium leading-6 text-gray-900">Images</h4>
              {formData.images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="file"
                    name={`images[${index}].file`}
                    onChange={(e) => handleFileChange(index, e)}
                    className="border p-2 rounded w-full"
                  />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name={`images[${index}].thumbnail`}
                      checked={image.thumbnail}
                      onChange={(e) => {
                        const images = [...formData.images];
                        images[index].thumbnail = e.target.checked;
                        setFormData({ ...formData, images: images });
                      }}
                      className="form-checkbox"
                    />
                    <span className="ml-2">Thumbnail</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Create Product
              </button>
            </div>
          </form>
          <div className="mt-4">
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded w-full"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
