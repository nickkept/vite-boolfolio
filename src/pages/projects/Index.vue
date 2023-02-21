<template>
    <AppHeader/>
    <section class="mt-5">
        <div class="container">
            <div class="row">

                <div v-for="element in projects" class="col-3">
                    <SingleCard :backUrl="backUrl" :element="element"/>
                </div>

            </div>
        </div>
    </section>    
    
</template>

<script>
import AppHeader from '../../components/AppHeader.vue';
import axios from "axios";
import SingleCard from '../../components/SingleCard.vue';
export default {
    components: { AppHeader, SingleCard },
    name: "ProjectsIndex",
    data(){
        return{
            backUrl: "http://127.0.0.1:8000",
            projects: []
        }
    },
    methods: {
        fetchProjects(){
            axios.get(this.backUrl + "/api/projects").then((resp) => {
                this.projects = resp.data.data;
            })
        }
    },
    mounted() {
        this.fetchProjects();
    },
}
</script>

<style lang="scss">
    
</style>