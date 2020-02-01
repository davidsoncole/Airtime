<template>

</template>

<script>
    export default {
        created() {
            this.$store.dispatch('destroyToken')
            .then(Response => {
                this.$router.push('/signin')
            })
        }
    }
</script>