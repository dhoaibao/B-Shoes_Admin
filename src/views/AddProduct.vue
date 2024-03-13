<template>
    <div class="add-product-form">
  <h2 style="text-align: center;">Thêm sản phẩm</h2>
  <form @submit.prevent="addProduct">
    <div>
      <label for="name">Tên sản phẩm:</label>
      <input type="text" id="name" v-model="product.name">
    </div>
    <div>
      <label for="image">URL ảnh sản phẩm:</label>
      <input type="text" id="image" v-model="product.image">
    </div>
    <div>
      <label for="type">Loại:</label>
      <select id="type" v-model="product.type">
        <option value="men">Nam</option>
        <option value="women">Nữ</option>
        <option value="kids">Trẻ em</option>
      </select>
    </div>
    <div>
      <label for="description">Mô tả:</label>
      <textarea id="description" v-model="product.description"></textarea>
    </div>
    <div>
      <label for="brand">Thương hiệu:</label>
      <select id="brand" v-model="product.brand">
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
      </select>
    </div>
    <div>
      <label for="price">Giá:</label>
      <input type="number" id="price" v-model="product.price">
    </div>
    <div>
      <label for="size">Kích cỡ:</label>
      <input type="text" id="size" v-model="product.size">
    </div>
    <div>
      <label for="quantity">Số lượng:</label>
      <input type="number" id="quantity" v-model="product.quantity">
    </div>
    <div style="display: flex;">
      <label for="featured">Nổi bật:</label>
      <input type="checkbox" id="featured" v-model="product.featured">
    </div>
    <button type="submit">Thêm</button>
  </form>
</div>

</template>
  
<script>
import ProductService from '/src/services/product.service';

export default {
    data() {
        return {
            product: {
                name: '',
                description: '',
                brand: '',
                price: null,
                sizes: '',
                featured: false,
                image: '',
                quantity: 0,
                type: ''
            },
        };
    },

    methods: {
        async addProduct() {
            try {
                await ProductService.create(this.product);
                // Clear the form
                this.product = {
                    name: '',
                    description: '',
                    brand: '',
                    price: null,
                    sizes: '',
                    featured: false,
                    image: '',
                    quantity: 0,
                    type: ''
                };
                alert('Thêm sản phẩm thành công');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
  