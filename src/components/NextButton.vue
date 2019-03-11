<template>
<!-- NextButton: Start -->
        <div class="col-sm-2 offset-sm-8 text-right">
            <button @click='goToNextStep' class="btn btn-primary px-4">Next Step</button>
        </div>
<!-- NextButton: END -->    
</template>

<script>
export default {
    methods: {
        goToNextStep() {
            this.$router.push({ path: '/step5'});
        }
    }
}
</script>

