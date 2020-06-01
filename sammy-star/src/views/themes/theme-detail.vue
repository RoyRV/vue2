<template>
    <div>
        <div class="section content-title-group">
            <h2 class="title">Detalles sobre : {{themeTitle}}</h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ThemeDetail',
        props: {
            id: {
                type: Number,
                default: 0
            }
        }
    }
</script>