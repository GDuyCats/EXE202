import React, { useState } from 'react';
import { createProduct } from './ProductService';

const CreateProductForm = ({ setProducts }) => {
    const [formData, setFormData] = useState({
        name: '',
        unitPrice: '',
        priceSold: '',
        quantity: '',
        discountPercent: '',
        description: '',
        quantitySold: '',
        brandId: '',
        country: '',
        status: '',
        productMaterials: [{ 
            detail: '', 
            materialId: '', 
            material: { 
                childCategoryId: '', 
                childCategory: { 
                    parentCategoryId: '' 
                } 
            } 
        }],
        images: [{ 
            file: null, 
            thumbnail: true 
        }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNestedChange = (e, index, key, subKey = null, nestedKey = null) => {
        const { name, value } = e.target;
        const newFormData = { ...formData };
        if (nestedKey) {
            newFormData[key][index][subKey][nestedKey] = value;
        } else if (subKey) {
            newFormData[key][index][subKey] = value;
        } else {
            newFormData[key][index][name] = value;
        }
        setFormData(newFormData);
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        const newImages = [...formData.images];
        newImages[index].file = file;
        setFormData({ ...formData, images: newImages });
    };

    const handleThumbnailChange = (e, index) => {
        const { checked } = e.target;
        const newImages = [...formData.images];
        newImages[index].thumbnail = checked;
        setFormData({ ...formData, images: newImages });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData, setProducts);
    };

    const inputcss = "border p-2 pl-5 w-full mb-5 rounded-3xl";
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <form onSubmit={handleSubmit} className="relative top-1/4 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white mb-64">
                <h1 className="text-xl mb-4">Create New Product</h1>
                <input placeholder="Tên sản phẩm" type="text" name="name" value={formData.name} onChange={handleChange} className={inputcss} />
                <input placeholder="Giá sản phẩm" type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} className={inputcss} />
                <input placeholder="Giá bán" type="number" name="priceSold" value={formData.priceSold} onChange={handleChange} className={inputcss} />
                <input placeholder="Số lượng" type="number" name="quantity" value={formData.quantity} onChange={handleChange} className={inputcss} />
                <input placeholder="Chiết khấu (%)" type="number" name="discountPercent" value={formData.discountPercent} onChange={handleChange} className={inputcss} />
                <input placeholder="Mô tả" name="description" value={formData.description} onChange={handleChange} className={inputcss} />
                <input placeholder="Số lượng đã bán" type="number" name="quantitySold" value={formData.quantitySold} onChange={handleChange} className={inputcss} />
                <input placeholder="Tên Hãng" type="text" name="brandId" value={formData.brandId} onChange={handleChange} className={inputcss} />
                <input placeholder="Quốc Gia" type="text" name="country" value={formData.country} onChange={handleChange} className={inputcss} />
                <input placeholder="Trạng thái" type="text" name="status" value={formData.status} onChange={handleChange} className={inputcss} />

                {/* Product Materials */}
                {formData.productMaterials.map((material, index) => (
                    <div key={index} className="mb-5">
                        <input placeholder="Thành phần sản phẩm" name="detail" value={material.detail} onChange={(e) => handleNestedChange(e, index, 'productMaterials')} className={inputcss} />
                        <input placeholder="ID vật liệu" name="materialId" value={material.materialId} onChange={(e) => handleNestedChange(e, index, 'productMaterials')} className={inputcss} />
                        <input placeholder="ID danh mục con" name="childCategoryId" value={material.material.childCategoryId} onChange={(e) => handleNestedChange(e, index, 'productMaterials', 'material')} className={inputcss} />
                        <input placeholder="ID danh mục cha" name="parentCategoryId" value={material.material.childCategory.parentCategoryId} onChange={(e) => handleNestedChange(e, index, 'productMaterials', 'material', 'childCategory')} className={inputcss} />
                    </div>
                ))}

                {/* Images */}
                {formData.images.map((image, index) => (
                    <div key={index} className="mb-5">
                        <input 
                            type="file" 
                            name="file" 
                            onChange={(e) => handleImageChange(e, index)} 
                            className={inputcss} 
                        />
                        <label>
                            <input 
                                type="checkbox" 
                                name="thumbnail" 
                                checked={image.thumbnail} 
                                onChange={(e) => handleThumbnailChange(e, index)} 
                            />
                            Thumbnail
                        </label>
                    </div>
                ))}

                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-5">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProductForm;
