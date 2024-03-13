<template>
    <main>
        <div class="login-container">
            <h1 class="h1-login">Đăng nhập</h1>
            <form class="form-login" @submit.prevent="login">
                <label for="username" class="label-login">Tên đăng nhập:</label>
                <input class="input-login" type="text" id="username" name="username" required v-model="username">
                <label for="password" class="label-login">Mật khẩu:</label>
                <input class="input-login" type="password" id="password" name="password" required v-model="password">
                <button type="submit" class="button-login">Đăng nhập</button>
            </form>
            <a href="#" class="a-login">Quên mật khẩu?</a>
            <p class="p-login">Chưa có tài khoản? <router-link to="/register">Đăng ký</router-link></p>
            <div v-if="error" class="error-message">{{ error }}</div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    body: JSON.stringify({ username: this.username, password: this.password }),
                    headers: { 'Content-Type': 'application/json' }
                })
                if (response.ok) {
                    // Xác thực thành công, chuyển hướng đến trang khác
                    window.location.href = '/product'
                } else if (response.status === 401) {
                    // Sai thông tin đăng nhập
                    this.error = 'Sai tên đăng nhập hoặc mật khẩu.'
                } else {
                    // Lỗi server
                    this.error = 'Đã có lỗi xảy ra. Vui lòng thử lại sau.'
                }
            } catch (error) {
                // Lỗi kết nối
                this.error = 'Không thể kết nối đến server.'
            }
        }
    }
}
</script>