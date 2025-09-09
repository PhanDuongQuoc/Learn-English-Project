<template>
    <div class="word-detail-wrap">
        <p class="button-new-word">
            Từ mới
        </p>

        <div v-if="showEnglish" key="en" class="word-detail">
            <div class="word-detail-content-1">
                <h1>từ vựng # <i class="fa-solid fa-volume-high"></i></h1>
                <p>(loại từ) /.phát âm/</p>
            </div>
        </div>

        <div v-else key="vi" class="word-detail-2">
            <div class="word-detail-content-2">
                <p><b>Định nghĩa:</b> {-------------}</p>
                <p><b>Ví dụ:</b> {------------------------}</p>
            </div>
        </div>

        <a  @click="functionShowMean">
            <i class="fa-solid fa-arrows-rotate"></i>
        </a>
    </div>
</template>
<script>
export default{
    name:'AppWordDetailCard',
    components:{

    },
    data(){
        return{
            showEnglish:true
        }
    },
    methods:{
        functionShowMean(){
            this.showEnglish = !this.showEnglish

        }
    }
}
</script>
<style scoped>
.word-detail-wrap{
    width: 800px;
    height: 400px;
    background-color: white;
    border: 1px solid #d4d8db;
    box-shadow: 10px 15px 10px rgba(15, 15, 15, 0.1);
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
}
.button-new-word{
    position: absolute;
    background-color: #4a33d9;
    box-shadow: 10px 15px 10px rgba(15, 15, 15, 0.1);
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 10px;
    right: 10px;
    top: 10px;
    cursor:not-allowed;
}

.fa-arrows-rotate{
    color: #4a33d9;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    font-size: 20px;
    cursor: none;
}
.fa-arrows-rotate:hover{
   color:#dd0182;
}


.word-detail , .word-detail-2{
    height: 150px;
    width: 500px;
    position: absolute;
    left: 18%;
    top: 30%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    
  
}

.word-detail h1 {
    font-size: 25px;
    font-weight: bold;
    color: #dd0182;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.word-detail p {
    font-size: 15px;

}

.word-detail-2 p {
    font-size: 15px;

    margin: 8px 0;
}

.word-detail-2 b {
    color: #4a33d9;
}

.fa-volume-high {
    color: #4a33d9;
    cursor: pointer;
    transition: 0.3s;
}
.fa-volume-high:hover {
    color: #dd0182;
}


.word-detail-2 img {
    width: 80px;
    height: auto;
    border-radius: 10px;
    margin-left: 15px;
    vertical-align: middle;
}

@media(max-width:768px){
    .word-detail-wrap{
        width: 90%;
    }

    .word-detail,.word-detail-2{
        height: 150px;
        width:65%;
        position: absolute;
        left: 18%;
        top: 30%;
        background-color: white;
        /* border-radius: 20px; */
    }

}

</style>