<template>
<!-- Header: Start -->
    <div class="row">
        <div class="stepwizard col-xs-12 col-sm-8 offset-sm-2">
            <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step">
                    <router-link to="/step1" tag="button" class="btn btn-default btn-circle">1</router-link>
                    <p>AddWebsite</p>
                </div>
                <div class="stepwizard-step">
                    <router-link to="/step2" tag="button" class="btn btn-default btn-circle">2</router-link>
                    <p>Analytics</p>
                </div>
                <div class="stepwizard-step">
                    <router-link to="/" tag="button" class="btn btn-default btn-circle" exact>3</router-link>
                    <p>Competitors</p>
                </div>
                <div class="stepwizard-step">
                    <router-link to="/step4" tag="button" class="btn btn-default btn-circle">4</router-link>
                    <p>Keywords</p>
                </div>
                <div class="stepwizard-step">
                    <router-link to="/step5" tag="button" class="btn btn-default btn-circle">5</router-link>
                    <p>FinishStep</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Header: END -->
</template>

<style scoped>

.stepwizard {
    margin-top: 20px;
}

.stepwizard-step p {
    margin-top: 10px;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 50%;
    position: relative;
}
.stepwizard-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-order: 0;
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}
.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}
</style>
