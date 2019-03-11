<template>
<!-- AddCompetitor: Start -->
    <div id="AddCompetitor" class="col-sm-10 offset-sm-2 no-gutters pt-5">
        <div class="col-sm-4 addCompetitor-wrapper">
            <p><b>Add a competitor</b></p>
            <div class="input-group mb-3">
                <span class="pr-2 my-auto">Website</span>
                <input type="text" class="form-control" id="AddCompetitorInput" placeholder="Add website" v-model="website">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" @click="validateWebsite">+</button>
                </div>
            </div>        
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>      
        </div>
    </div>
<!-- AddCompetitor: END -->
</template>

<script>
export default {
    data: function() {
        return {
            website: null,
            errors: []
        }
    },
    methods: {
        validateWebsite() {
            console.log('dsfds', this.website);
            if(!this.website) {
                this.errors.push('Please submit a website!');
            }
        }
    }
}
</script>


<style lang="scss">

</style>

