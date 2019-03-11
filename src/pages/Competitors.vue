<template>
    <div id="competitors">
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <p><b>Competitors</b></p>
            </div>
        </div>
        <div class="row competitors-body py-4">
            <div class="col-sm-8 offset-sm-2 competitors-title">
                <p><b>Choose your competitors</b></p>
            </div>
            <div class="col-sm-8 offset-sm-2 py-3">
                <div class="row no-gutters">
                    <div class="col-sm-5">
                        <span><b>Please select up to 5 competitors:</b></span>
                    </div>
                    <div class="col-sm-7">    
                        <span>Don't worry, we monitor all of your competitors from day 1,
                            so you'll be able to add more and change them later without losing any historical data.</span>

                    </div>
                </div>
            </div>
            <div class="col-sm-8 offset-sm-2">
                <app-website-table :websitesList="websites"></app-website-table>
            </div>
            <app-add-competitor></app-add-competitor>
            <app-next></app-next>
        </div>  
    </div>
</template>

<script>
import NextButton from '../components/NextButton.vue';
import AddCompetitor from '../components/AddCompetitor.vue';
import WebsiteTable from '../components/WebsiteTable.vue';

export default {
      data: function() {
    return {
      websites: [
        {"id": 272, "domain_name": "emag.ro"},
        {"id": 7277, "domain_name": "altex.ro"},
        {"id": 280, "domain_name": "cel.ro"},
        {"id": 12095, "domain_name": "ideall.ro"},
        {"id": 407, "domain_name": "compari.ro"},
        {"id": 6452, "domain_name": "flanco.ro"},
        {"id": 357, "domain_name": "olx.ro"},
        {"id": 285, "domain_name": "ro.wikipedia.org"},
        {"id": 28679, "domain_name": "retete.unica.ro"},
        {"id": 56477, "domain_name": "badabum.ro"},
        {"id": 25022, "domain_name": "foodstory.stirileprotv.ro"},
        {"id": 12118, "domain_name": "domo.ro"},
        {"id": 337, "domain_name": "antena3.ro"}
      ]
    }
  },
    components: {
        appNext: NextButton,
        appAddCompetitor: AddCompetitor,
        appWebsiteTable: WebsiteTable
    }
}
</script>


<style lang="scss" scoped>
#competitors {
    .competitors-body {
        background: #F9F9F9;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        -webkit-box-shadow: 0px -2px 11px -1px rgba(128,128,128,1);
        -moz-box-shadow: 0px -2px 11px -1px rgba(128,128,128,1);
        box-shadow: 0px -2px 11px -1px rgba(128,128,128,1);
        .competitors-title {
            border-bottom: 1px solid #D3D3D3;
        }
    }
}
</style>
