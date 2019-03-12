<template>
<!-- NextButton: Start -->
        <div class="col-sm-2 offset-sm-8 text-right">
            <button @click='goToNextStep' class="btn btn-primary px-4" :disabled="checkedItems < 5">Next Step</button>
        </div>
<!-- NextButton: END -->    
</template>

<script>
import { eventBus } from "../main";

export default {
    data: function() {
        return {
            checkedItems: 0
        }
    },
    methods: {
        goToNextStep() {
            this.$router.push({ path: '/step5'});
        }
    },
    created() {
        eventBus.$on('inputTrue', () => { 
            this.checkedItems++
        });
        eventBus.$on('inputFalse', () => { 
            this.checkedItems--
        });
    }
}
</script>

