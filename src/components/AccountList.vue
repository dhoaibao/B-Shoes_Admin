<script>
import AccountService from '/src/services/account.service.js';
export default {
    props: {
        accounts: { type: Array, default: [] },
    },
    methods: {
        editAccount(id) {
            this.$router.push(`/editaccount/${id}`);
        },
        async deleteAccount(id) {
            if (confirm("Bạn muốn xóa Tài khoản này?")) {
                try {
                    await AccountService.delete(id);
                    this.$router.push(`/account`);
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
}
</script>

<template>
        <div v-if="accounts.length > 0" class="accounts-list">
            <div v-for="(account, index) in accounts" :key="account._id">
                <h3>{{ account.name }}</h3>
                <p>Email: {{ account.email }}</p>
                <p>SĐT: {{ account.phone }}</p>
                <p>Địa chỉ: {{ account.address }}</p>
                <p>Giới tính: {{ account.gender }}</p>
                <p>Username: {{ account.username }}</p>
                <p>Mật khẩu: {{ account.password }}</p>
                <button type="submit" @click.prevent="deleteAccount(account._id)" style="border-radius: 10px; cursor: pointer;"><i
                        class="fas fa-trash"></i></button>
            </div>
        </div>
        <div v-else class="accounts-list">Không có tài khoản nào.</div>
</template>

<style scoped>
button[type="submit"]:hover {
  background-color: red;
}
</style>
