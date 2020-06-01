<template>
    <div v-if="number">
        <div v-for="index in number" :key="index" style="display: inline-block;">
            <img src="../assets/figures/apple.png" style="width: 50px;" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FigureComponent',
        props: {
            number: {
                type: Number
            }
        }
    }
</script>