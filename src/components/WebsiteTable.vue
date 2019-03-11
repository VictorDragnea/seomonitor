<template>
    <form >
        <div class="row">
                <app-website 
                    v-for="website in websitesList" 
                    :website="website" 
                    :key="website.id"
                    @wasChecked="checked++">
                </app-website>
                {{checked}}
        </div>
    </form>
</template>

<script>
import Website from '../components/Website.vue';

export default {
    data: function() {
        return {
            checked: 0
        }
    },
    props: ['websitesList'],
    components: {
        appWebsite: Website
    },
    methods: {
        handleSubmitEvent() {
            console.log('emite event de submit');
            console.log(this.checked);
            
        }
    }
}
</script>
