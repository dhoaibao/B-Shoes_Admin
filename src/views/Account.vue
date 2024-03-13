<template>
    <div class="container-main">
        <AccountList :accounts="accounts" />
    </div>
</template>

<script>
import AccountList from "/src/components/AccountList.vue";
import AccountService from '/src/services/account.service.js';

export default {
    components: {
        AccountList,
    },
    data() {
        return {
            accounts: [],
        };
    },
    methods: {
        async retrieveAccounts() {
            try {
                const response = await AccountService.getAll();
                if (response !== null && response.length > 0) {
                    this.accounts = response;
                }
                console.log(this.accounts);
            } catch (error) {
                console.log(error);
            }
        },

    },
    created() {
        this.retrieveAccounts();
    },
};
</script>