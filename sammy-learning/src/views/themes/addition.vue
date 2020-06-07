<template>
    <div class="column is-10">
        <div class="md-layout">
            <h1>Sumas</h1>
        </div>
        <div class="md-layout">
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[0]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2">
                <img :src="'/assets/plus.svg'" style="width: 60px;" />

            </div>
            <div class="md-layout-item  column is-2">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2">
                <img :src="'/assets/equal.svg'" style="width: 60px;" />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <div v-for="(number, index) in numbers" :key="index" style="display: inline-block;margin :0px 10px;">
                    <FigureComponent v-if="number" v-bind:number="number"
                        style="border: 1px solid black;display: inline-block;margin:5px 0px" />
                </div>
                <FigureComponent v-if="total==0" v-bind:number="0"
                    style="border: 1px solid black;display: inline-block; " />
            </div>
        </div>
        <!-- <div class="md-layout">
            <div class="show-area">
                <CanvasDraw :width="480" :height="480" :outputName="'example'" />
            </div>
        </div> -->
    </div>
</template>
<script>
    import FigureComponent from '../../components/figure-component.vue';
    import CanvasDraw from '../../components/CanvasDraw.vue';
    export default {
        name: 'Addition',
        components: { FigureComponent, CanvasDraw },
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