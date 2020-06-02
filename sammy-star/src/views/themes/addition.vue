<template>
    <div class="column is-10">
        <div class="md-layout">
            <h1>Sumas</h1>
        </div>
        <div class="md-layout">
            <div class="md-layout-item  column is-2">
                <md-field>
                    <md-input v-model="numbers[0]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item  column is-2">
                <img src="../../assets/figures/plus-sign.png" style="width: 75px;" />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item  column is-2">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <img src="../../assets/figures/equal-sign.png" style="width: 75px;" />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <div v-for="(number, index) in numbers" :key="index">
                    <FigureComponent v-if="number" v-bind:number="number"
                        style="border: 1px solid black;display: inline-block;" />
                </div>
                <FigureComponent v-if="total==0" v-bind:number="0"
                    style="border: 1px solid black;display: inline-block;" />
            </div>
        </div>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figure-component.vue';
    export default {
        name: 'Addition',
        components: { FigureComponent },
        data() {
            return {
                numbers: [2, 4]
            }
        },
        computed: {
            total() {
                var total = 0;
                for (let index = 0; index < this.numbers.length; index++) {
                    if (this.numbers[index] == '') {
                        this.numbers[index] = 0;
                    }
                    total += parseInt(this.numbers[index]);
                }
                return total;
            }
        },
        watch: {
            numbers: {
                immediate: false,
                deep: true,
                handler(newValue, oldValue) {
                    for (let index = 0; index < this.numbers.length; index++) {
                        let value = this.numbers[index];
                        value = value == '' ? 0 : parseInt(value);
                        this.numbers[index] = value > 100 ? 100 : value;
                    }
                },
            }
        }
    }
</script>