<template>
<div>
    <router-view />
</div>
</template>

<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'App',
    /*-------------------------Load Component---------------------------------------*/
    components: {},
    /*-------------------------Set Component---------------------------------------*/
    props: {},
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {};
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        await this.load();
    },
    async created() {

    },
    watch: {

    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {

        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {

        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
