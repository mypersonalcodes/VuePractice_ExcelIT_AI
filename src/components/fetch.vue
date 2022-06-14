<template>

<ul>
    <li v-for="item in data">{{item.name}}</li>
</ul>
</template>



<script>
import axios from 'axios'

export default {
    name:'Fetch',
    data(){
        return {
            data:[],
        }
    },
    methods:{
        getItem(){
            axios.get("https://localhost:7187/api/Students")
            .then((response)=>{
                this.data=response.data;
                console.log(response);
                th

            })
        }
    },
    created(){
        this.getItem();
    }

}
</script>