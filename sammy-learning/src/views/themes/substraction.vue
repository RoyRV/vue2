<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Resta</h2>
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field>
                    <md-input v-model="numbers[0]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item">
                <img :src="'/assets/minus.svg'" style="width: 60px;" />
            </div>
        </div>
        <div class="md-layout" style="margin:10px">
            <FigureComponent v-bind:number="numbers[0]" />
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item"><img :src="'/assets/equal.svg'" style="width: 60px;" />
            </div>
        </div>
        <div v-if="numbers[1]<=numbers[0]" class="md-layout" style="margin:10px">
            <FigureComponent :number="numbers[1]" :iconSvg="'/assets/eaten-apple.svg'" />
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item">
                <md-field v-if="numbers[0]>=numbers[1]">
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
                numbers: [10, 3]
            }
        },
        computed: {
            total() {
                return this.numbers[0] - this.numbers[1];
            }
        },
        watch: {
            numbers: {
                immediate: false,
                deep: true,
                handler(newValue, oldValue) {
                    for (let index = 0; index < this.numbers.length; index++) {
                        let value = this.numbers[index];
                        value = value == '' ? 0 : parseInt(this.numbers[index]);
                        this.numbers[index] = value;
                    }
                },
            }
        }
    }
</script>