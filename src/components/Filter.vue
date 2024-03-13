<template>
    <div class="filter">
        <div>
            <div class="button-container">
                <button @click="goToAddProduct">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button @click="removeAllProducts">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <h2>Bộ lọc</h2>
        <div class="filter-brand">
            <h3>Thương hiệu</h3>
            <label><input type="checkbox" name="brand" value="Nike" v-model="selectedBrands">Nike</label>
            <label><input type="checkbox" name="brand" value="Adidas" v-model="selectedBrands">Adidas</label>
            <label><input type="checkbox" name="brand" value="Puma" v-model="selectedBrands">Puma</label>
        </div>
        <div class="filter-price">
            <h3>Mức giá</h3>
            <label><input type="radio" name="price" value="0-500000" v-model="selectedPriceRange">0 - 500.000đ</label>
            <label><input type="radio" name="price" value="500000-1000000" v-model="selectedPriceRange">500.000 -
                1.000.000đ</label>
            <label><input type="radio" name="price" value="1000000-1500000" v-model="selectedPriceRange">1.000.000 -
                1.500.000đ</label>
            <label><input type="radio" name="price" value="1500000-1000000000000" v-model="selectedPriceRange">Trên
                1.500.000đ</label>
        </div>
        <div class="filter-size">
            <h3>Size</h3>
            <label><input type="checkbox" name="size" value="38" v-model="selectedSizes">38</label>
            <label><input type="checkbox" name="size" value="39" v-model="selectedSizes">39</label>
            <label><input type="checkbox" name="size" value="40" v-model="selectedSizes">40</label>
            <label><input type="checkbox" name="size" value="41" v-model="selectedSizes">41</label>
            <label><input type="checkbox" name="size" value="42" v-model="selectedSizes">42</label>
        </div>
    </div>
</template>

<script>
import ProductService from '/src/services/product.service';
export default {
    props: {
        products: { type: Array, default: [] },
    },
    data() {
        return {
            selectedBrands: [],
            selectedPriceRange: '',
            selectedSizes: [],
        }
    },
    watch: {
        selectedBrands: function () {
            this.filterProducts();
        },
        selectedPriceRange: function () {
            this.filterProducts();
        },
        selectedSizes: function () {
            this.filterProducts();
        },
    },
    methods: {
        filterProducts() {
            // this.$parent.products = this.products;

            const filteredProducts = this.$parent.products.filter(product => {
                // Filter by selected brands
                if (this.selectedBrands.length > 0 && !this.selectedBrands.includes(product.brand)) {
                    return false;
                }

                // Filter by selected price range
                if (this.selectedPriceRange !== '') {
                    const [minPrice, maxPrice] = this.selectedPriceRange.split('-');
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                }

                // Filter by selected sizes
                if (this.selectedSizes.length > 0 && !product.sizes.some(size => this.selectedSizes.includes(size))) {
                    return false;
                }

                return true;
            });

            // Update the products list
            this.$parent.products = filteredProducts;
        },

        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Sản phẩm")) {
                try {
                    await ProductService.deleteAll();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddProduct() {
            this.$router.push(`/addproduct`);
        },
    },
};
</script>