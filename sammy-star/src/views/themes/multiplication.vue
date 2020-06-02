<template>
    <div class="column is-10">
        <div class="md-layout">
            <h2>Multiplicación</h2>
        </div>
        <div class="md-layout" style="margin:10px">
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[0]" type="number" min="0"></md-input>
                </md-field>
            </div>
            <div class="md-layout-item column is-2" style="text-align: center;">
                <img src="../../assets/figures/multiplication-sign.png" style="width: 75px;" />
            </div>
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
        </div>
        <div v-if="numbers[0]==0 || numbers[1]==0" class="md-layout">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="0" />
            </div>
        </div>
        <div v-if="numbers[0]!=0 && numbers[1]!=0">
            <div v-for="(number,index) in numbers[0]" :key="index" class="md-layout">
                <div class="md-layout-item">
                    <FigureComponent v-bind:number="numbers[1]" />
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
                numbers: [2, 3]
            }
        },
        watch: {
            numbers: {
                immediate: false,
                deep: true,
                handler(newValue, oldValue) {
                    for (let index = 0; index < this.numbers.length; index++) {
                        if (this.numbers[index] == '') {
                            this.numbers[index] = 0;
                        }
                        else {
                            this.numbers[index] = parseInt(this.numbers[index]);
                        }
                    }
                },
            }
        }
    }
</script>