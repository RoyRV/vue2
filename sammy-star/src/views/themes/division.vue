<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Division</h2>
        </div>
        <div class="md-layout">
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[0].value" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2" style="text-align: center;">
                <img src="../../assets/figures/division-sign.png" style="width: 75px;" />
            </div>
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[1].value" type="number" min="0"></md-input>
                </md-field>
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
                numbers: [
                    { numberIndex: 0, value: 2 },
                    { numberIndex: 1, value: 3 },
                ]
            }
        },
    }
</script>