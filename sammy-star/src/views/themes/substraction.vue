<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Resta</h2>
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field>
                    <md-input v-model="numbers[0].value" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <img src="../../assets/figures/substraction-sign.png" style="width: 75px;" />
            </div>
        </div>
        <div class="md-layout" style="margin:10px">
            <FigureComponent v-bind:number="numbers[0].value" />
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field>
                    <md-input v-model="numbers[1].value" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <img src="../../assets/figures/equal-sign.png" style="width: 75px;" />
            </div>
        </div>
        <div class="md-layout" style="margin:10px">
            <FigureComponent v-bind:number="numbers[1].value" />
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field>
                    <md-input :value="total" readonly type="number"></md-input>
                </md-field>
                <FigureComponent v-bind:number="total" />
            </div>
        </div>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figure-component.vue';
    export default {
        name: 'Substraction',
        components: { FigureComponent },
        data() {
            return {
                numbers: [
                    { numberIndex: 0, value: 10 },
                    { numberIndex: 1, value: 3 },
                ]
            }
        },
        computed: {
            total() {
                var total = 0;
                total = this.numbers[0].value - this.numbers[1].value
                // for (let index = 0; index < this.numbers.length; index++) {
                //     if (this.numbers[index].value == '') {
                //         this.numbers[index].value = 0;
                //     }
                //     total -= parseInt(this.numbers[index].value);
                // }
                return total;
            }
        },
        watch: {
            numbers: {
                immediate: false,
                deep: true,
                handler(newValue, oldValue) {
                    for (let index = 0; index < this.numbers.length; index++) {
                        if (this.numbers[index].value == '') {
                            this.numbers[index].value = 0;
                        }
                        else {
                            this.numbers[index].value = parseInt(this.numbers[index].value);
                        }
                    }
                },
            }
        }
    }
</script>