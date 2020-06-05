<template>
    <div>
        <div v-if="number">
            <div v-if="number>0">
                <div v-for="index in number" :key="index" style="display: inline-block;">
                    <img src="../assets/figures/apple.png" style="width: 50px;" />
                </div>
            </div>
            <div v-if="number<0" style="display: flex;align-items: center;">
                <img src="../assets/figures/not_allowed.png" style="width: 50px;" />
                <div style="display: inline-block;width: 210px;margin:10px;">
                    <small>{{errormsg}}</small>
                </div>
            </div>
        </div>
        <div v-if="!number">
            <img src="../assets/figures/empty-sign.png" style="width: 50px;" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FigureComponent',
        props: {
            number: {
                type: Number
            },
            errormsg: {
                type: String,
                default: 'Lo sentimos, no puedes quitarte menos de lo que tenias originalmente'
            }
        }
    }
</script>