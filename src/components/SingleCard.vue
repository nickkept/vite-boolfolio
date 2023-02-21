<template >
    <div class="card">
        <img :src="backUrl + '/storage/' + element.cover_img" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{element.name}}</h5>
            <p class="card-text">{{element.description}}</p>
            <router-link :to="'/projects/' + element.id" class="btn btn-primary">Info</router-link>
            <router-link to="/" class="btn btn-secondary ms-3">Home Page</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backUrl: String,
        element: Object
    },
}
</script>

<style lang="scss"></style>