<template>
    <form >
        <div class="row">
                <app-website 
                    v-for="website in websitesList" 
                    :website="website" 
                    :key="website.id"
                    >
                </app-website>
        </div>
    </form>
</template>

<script>
import Website from '../components/Website.vue';

export default {
    props: ['websitesList'],
    components: {
        appWebsite: Website
    }
}
</script>
