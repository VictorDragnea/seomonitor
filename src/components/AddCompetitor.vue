<template>
<!-- AddCompetitor: Start -->
    <div id="AddCompetitor" class="col-sm-10 offset-sm-2 no-gutters pt-5">
        <div class="col-sm-4 addCompetitor-wrapper">
            <p><b>Add a competitor</b></p>
            <form @submit.prevent="validateWebsite">
                <div class="input-group mb-3" :class="{invalid: $v.websiteURL.$error}">
                    <label for="AddCompetitorInput" class="pr-2 my-auto">Website</label>
                    <input 
                        type="text" 
                        class="form-group"
                        id="AddCompetitorInput" 
                        placeholder="Add website" 
                        v-model="$v.websiteURL.$model">   
                    <div class="input-group-append form-group">
                        <button 
                            class="btn btn-primary" 
                            type="submit" 
                            :disabled="submitStatus === 'PENDING'" 
                            @click.prevent="validateWebsite">
                            +</button>
                    </div>
                </div> 
                <p v-if="$v.websiteURL.error">Please provide a valid URL</p>
            </form>
               {{websiteURL}}
        </div>
    </div>
<!-- AddCompetitor: END -->
</template>

<script>
import { required, url } from 'vuelidate/lib/validators';

export default {
    data: function() {
        return {
            websiteURL: '',
            submitStatus: null
        }
    },
    validations: {
        websiteURL: {
            required,
            url
        }
    },
    methods: {
        validateWebsite(e) {
            
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
               
                let randomNumber = () => {
                    let random = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
                    return random;
                }

                const temp = {"id": randomNumber(), "domain_name": this.websiteURL};
                
                this.$emit('urlWasAdded', temp);
                this.websiteURL = '';

                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.input-group.invalid label {
    color: red;
}

.input-group.invalid input {
    border: 1px solid red;
    background-color: #FFC9AA
}
</style>

