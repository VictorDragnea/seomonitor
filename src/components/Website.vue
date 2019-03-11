<template>
    <div class="col-sm-3 py-2">
        <div class="form-check">
            <input 
                class="form-check-input" 
                type="checkbox" 
                :id="website.id" 
                :name="website.id"
                v-on:click="addCheckedCount">
            <img :src='"//www.google.com/s2/favicons?domain=" + website.domain_name' />
            <label class="form-check-label" :for="website.id">{{ website.domain_name = website.domain_name.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0] }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        website: Object
    },
    methods: {
        addCheckedCount($event) {
            console.log(typeof $event.target.value);
            if($event.target.value === 'on') {
                this.$emit('wasChecked')
            } else {
                $event.preventDefault;
                $event.stopPropagation;
            }
        }
    }
}

</script>

