<template>
        <div class="col-12 col-md-4 card-testimonial" data-aos="fade-left" data-aos-duration="4000">
            <div class="card border-0 border-primary shadow-sm">
                    <div class="card-body p-4 p-xxl-5">
                        <figure>
                            <img class="img-fluid mb-4 " :src="Testiminials.image" >
                            <figcaption>
                                
                                <blockquote class="bsb-blockquote-icon mb-4">{{Testiminials.content}}</blockquote>
                                <h4 class="mb-2 name-card">{{ Testiminials.name }}</h4>
                                <h5 class="fs-6 text-secondary mb-0">{{ Testiminials.major }}</h5>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="button-level"  :class="{ 'btn-vip': Testiminials.level === 'VIP', 
                        'btn-Premium': Testiminials.level === 'Premium'
                        ,'btn-basic': Testiminials.level==='Basic' ,'btn-Standard':Testiminials.level==='Standard'}">
                        <p class="title-level"> {{ Testiminials.level }}</p>
                    </div>
                </div>
            </div>
        
</template>

<script>
export default{
    name:'AppTestimonialCard_1',
    components:{},
    props:{
        Testiminials:{
             type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.border-primary{
    box-shadow: 5px 5px 5px 10px  rgba(15, 15, 15, 0.1) !important;
    height: 400px;
    width: 300px;
    border-top:5px solid #4a33d9 !important;
    border-bottom:5px solid #dd0182 !important;
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
    transition: transform 0.6s;
}

.border-primary:hover{
    opacity: 0.6;
    transform: rotate(-5deg);
}

.img-fluid{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #dd0182;
}
.name-card{
    color: #4a33d9;
    font-size: 18px;
}

.bsb-blockquote-icon{
    font-size: 15px;
    color: rgb(119, 119, 119);

}
.button-level{
    position: absolute;
   
    color: white;
    right: 10px;
    top: 10px;
    border-radius: 20px;
    width: 25%;
    height: 25px;
    
    
}

.btn-vip{
     background-color: #FFB800;
}
.btn-Premium{
    background-color: #dd0182;
}
.btn-basic{
    background-color: #4a33d9;
}
.btn-Standard{
    background-color: #ff0000;
}
.title-level{
    font-size: 12px;
    padding-top: 4px;

    
}
@media(max-width:768px){
    .img-fluid{
       margin-top: 30px;
    }
    .bsb-blockquote-icon{
        margin-top: 30px;
    }
    .name-card{
        margin-top: 20px;
    
    }
}

</style>
