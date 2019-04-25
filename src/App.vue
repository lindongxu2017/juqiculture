<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    margin: 0;
    padding: 0;
}
img {
    content: normal !important;
}
html, body, #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
</style>
