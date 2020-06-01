<template>
    <div class="content-container">
        <div>
            <h2>Sumas</h2>
        </div>
        <div>
            <input v-model="numbers[0].value" type="number" min="0" />
            <FigureComponent v-bind:number="numbers[0].value" />
            <div>+</div>
            <input v-model="numbers[1].value" type="number" />
            <FigureComponent v-bind:number="numbers[1].value" />
            <div>=</div>
            <input v-model="total" />
            <FigureComponent v-bind:number="total" />
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
                ]
            }
        },
        computed: {
            total() {
                var total = 0;
                for (let index = 0; index < this.numbers.length; index++) {
                    total += parseInt(this.numbers[index].value);
                }
                return total;
            }
        },
        watch: {
            numbers: {
                immediate: true,
                deep: true,
                handler(newValue, oldValue) {
                    for (let index = 0; index < this.numbers.length; index++) {
                        if (this.numbers[index].value == '') {
                            console.log("a")
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