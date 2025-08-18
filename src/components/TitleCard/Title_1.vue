<template>
    <div class="Title-Card">
        <div class="Title-wrap">
            <h3 class="Tilte" data-aos="fade-right" data-aos-duration="20000">
                {{ Title.title }}
            </h3>
        </div>

    </div>
</template>

<script>
export default{
    name:'AppTitleCard',
    components:{

    },
    props:{
        Title:{
            type:String,
            default:'Empty'
        }
    }
}
</script>
<style scoped>
.Title-Card{
    margin:50px 0;
    text-align: center;
    
}
.Tilte{
    color: #dd0182;
    font-size: 40px;
    font-weight: bold;
}
@media(max-width:768px){
    .Tilte{
        color: #dd0182;
        font-size: 25px;
    }
}
</style>