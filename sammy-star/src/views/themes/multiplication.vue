<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Multiplicación</h2>
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[0].value" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2" style="text-align: center;">
                <img src="../../assets/figures/multiplication-sign.png" style="width: 75px;" />
            </div>
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[1].value" type="number" min="0"></md-input>
                </md-field>
            </div>
        </div>
        <div v-if="numbers[0].value==0 || numbers[1].value==0" class="md-layout">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="0" />
            </div>
        </div>
        <div v-if="numbers[0].value!=0 && numbers[1].value!=0">
            <div v-for="index in numbers[0].value" :key="index" class="md-layout">
                <div class="md-layout-item">
                    <FigureComponent v-bind:number="numbers[1].value" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figure-component.vue';
    export default {
        name: 'Multiplication',
        components: { FigureComponent },
        data() {
            return {
                numbers: [
                    { numberIndex: 0, value: 2 },
                    { numberIndex: 1, value: 3 },
                ]
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