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
                <img :src="'/assets/division.svg'" style="width: 60px;" />
            </div>
            <div class="md-layout-item column is-2">
                <md-field>
                    <md-input v-model="numbers[1]" type="number" min="0"></md-input>
                </md-field>
            </div>
        </div>
        <div class="md-layout" v-if="numbers[1]==0">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="-1" errormsg='Operación no permitida' />
            </div>
        </div>
        <div class="md-layout" v-if="numbers[0]==0 && numbers[1]!=0">
            <div class="md-layout-item">
                <FigureComponent v-bind:number="0" />
            </div>
        </div>
        <div class="md-layout" v-if="numbers[0]!=0 && numbers[1]!=0">
            <div class="md-layout-item column is-5">
                <div class="md-layout">
                    <div v-if="numbers[0]<numbers[1]" class="md-layout-item">
                        <FigureComponent v-bind:number="0" />
                    </div>
                    <div v-if="numbers[0]>=numbers[1]" class="md-layout-item">
                        <div v-for="(number,index) in numbers[1]">
                            <span>Grupo {{index+1}}</span>
                            <FigureComponent v-bind:number="quotient" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="residue!=0" class="md-layout-item column is-2">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <h4>Residuo</h4>
                        <FigureComponent v-bind:number="residue" />
                    </div>
                </div>
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
        },
        computed: {
            quotient() {
                return Math.floor(this.numbers[0] / this.numbers[1]);
            },
            residue() {
                return (this.numbers[0] % this.numbers[1]);
            }
        },
    }
</script>