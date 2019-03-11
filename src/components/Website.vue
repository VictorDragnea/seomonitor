<template>
    <div class="col-sm-3 py-2">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="website.id">
            <img :src='"//www.google.com/s2/favicons?domain=" + website.domain_name' />
            <label class="form-check-label" :for="website.id">{{ website.domain_name }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        website: Object
    }
}

</script>

<style lang="scss" scoped>
.custom-control {

}
</style>
