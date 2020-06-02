<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Division</h2>
        </div>
        <div class="md-layout">
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[0]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2" style="text-align: center;">
                <img src="../../assets/figures/division-sign.png" style="width: 75px;" />
            </div>
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
        </div>
        <div v-if="numbers[0]==0 && numbers[1]!=0" class="md-layout">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="0" />
            </div>
        </div>
        <div v-if="numbers[0]!=0 && numbers[1]==0" class="md-layout">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="-1" />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                {{numbers[0] / numbers[1]}}
            </div>
        </div>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figure-component.vue';
    export default {
        name: 'Division',
        components: { FigureComponent },
        data() {
            return {
                numbers: [6, 3]
            }
        },
    }
</script>