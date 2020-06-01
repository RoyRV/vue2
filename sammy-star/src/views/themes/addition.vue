<template>
    <div>
        <div class="md-layout">
            <h2>Sumas</h2>
        </div>
        <div class="md-layout" v-for="(number, index) in numbers" :key="index">
            <div class="md-layout-item">
                <md-field>
                    <md-input v-model="number.value" type="number" min="0"></md-input>
                </md-field>
                <FigureComponent v-bind:number="number.value" />
            </div>
            <div class="md-layout-item">
                <img v-if="index+1<numbers.length" src="../../assets/figures/plus-sign.png" style="width: 75px;" />
                <img v-if="index+1==numbers.length" src="../../assets/figures/equal-sign.png" style="width: 75px;" />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-field>
                    <md-input :value="total" readonly type="number" min="0"></md-input>
                </md-field>
                <FigureComponent v-bind:number="total" />
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
                numbers: [
                    { numberIndex: 0, value: 2 },
                    { numberIndex: 1, value: 4 },
                    { numberIndex: 2, value: 0 },
                ]
            }
        },
        computed: {
            total() {
                var total = 0;
                for (let index = 0; index < this.numbers.length; index++) {
                    if (this.numbers[index].value == '') {
                        this.numbers[index].value = 0;
                    }
                    total += parseInt(this.numbers[index].value);
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