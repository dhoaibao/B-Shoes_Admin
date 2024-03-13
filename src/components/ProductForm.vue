<template>
    <Form @submit="submitProduct" :validation-schema="productFormSchema">
        <div class="form-group">
            <label for="name">Tên sản phẩm</label>
            <Field name="name" type="text" class="form-control" v-model="productLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="image">Ảnh sản phẩm</label>
            <Field name="image" type="text" class="form-control" v-model="productLocal.image" />
            <ErrorMessage name="image" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="description">Mô tả</label>
            <Field name="description" type="text" class="form-control" v-model="productLocal.description" />
            <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="brand">Thương hiệu</label>
            <Field name="brand" type="text" class="form-control" v-model="productLocal.brand" />
            <ErrorMessage name="brand" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="size">Size</label>
            <Field name="size" type="number" class="form-control" v-model="productLocal.size" />
            <ErrorMessage name="size" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="quantity">Số lượng</label>
            <Field name="quantity" type="number" class="form-control" v-model="productLocal.quantity" />
            <ErrorMessage name="quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Giá</label>
            <Field name="price" type="number" class="form-control" v-model="productLocal.price" />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="faetured" type="checkbox" class="form-check-input" v-model="productLocal.faetured" />
            <label for="faetured" class="form-check-label">
                <strong>Sản phẩm nổi bật</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="productLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteProduct">
                Xóa
            </button>
        </div>
    </Form>
</template>
<script>
export default {
    components: {
        Form,
    },
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        return {
            productLocal: this.product,
        };
    },
    methods: {
        submitProduct() {
            this.$emit("submit:product", this.productLocal);
        },
        deleteProduct() {
            this.$emit("delete:product", this.productLocal.id);
        },
    },
};
</script>