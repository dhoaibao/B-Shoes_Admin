<template>
    <div class="add-product-form">
        <h2 style="text-align: center;">Chỉnh sửa sản phẩm</h2>
        <form @submit.prevent="updateProduct">
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
            <div>
                <label for="featured">Nổi bật:</label>
                <input type="checkbox" id="featured" v-model="product.featured">
            </div>
            <button type="submit">Lưu</button>
            <p>{{ message }}</p>
        </form>
    </div>
</template>
  
<script>
import ProductService from '/src/services/product.service';

export default {
    data() {
        return {
            productId: '',
            product: {},
            message: '',
        };
    },

    async created() {
        this.productId = this.$route.params.id;
        this.product = await ProductService.get(this.productId);
    },

    methods: {
        async updateProduct() {
            try {
                await ProductService.update(this.product._id, this.product);
                // this.message = 'Sản phẩm được cập nhật thành công.';
                alert('Sản phẩm được cập nhật thành công.');
                this.$router.push(`/productdetail/${this.product._id}`);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
  