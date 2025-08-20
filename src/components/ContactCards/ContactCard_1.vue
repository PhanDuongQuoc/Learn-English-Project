<template>
    <div class="Title-container">
        <div class="title-wrap">
            <Title_1 :Title="title"/>
        </div>
    </div>
    <div class="Container-wrap-contact">
        <div class="container-contact">
            <div class="first-content-contact">
                <el-row  class="wrap-card">
                    <el-col :xs="24" :sm="12" class="wrap-card-contact">
                        <div class="card-inner blue-card">
                                <div class="content-title">
                                    <h4  data-aos="fade-left" data-aos-duration="4000" class="title">Chúng tôi luôn ở đây để giúp bạn.</h4>
                                    <p  data-aos="fade-left" data-aos-duration="4000" class="content">
                                    Hãy cho chúng tôi biết cách mà chúng tôi có thể hỗ trợ bạn tốt nhất. Gửi tin nhắn qua mẫu liên hệ hoặc chọn một chủ đề bên dưới phù hợp với nhu cầu của bạn. Chúng tôi rất vinh dự được đồng hành cùng bạn trên hành trình hướng đến một sức khỏe tốt hơn.
                                    </p>
                                </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" class="wrap-card-contact-form">
                        <div class="contact-form-container">
                            <div class="contact-form-inner">

                                
                                <form class="contact-form">
                                    <div class="form-row" data-aos="fade-up" data-aos-duration="4000" >
                                        <div class="form-group">
                                            <input 
                                                type="text" 
                                               
                                                class="form-control"
                                                placeholder="Họ *"
                                                required
                                            >
                                        </div>
                                        <div class="form-group">
                                            <input 
                                                type="text" 
                                            
                                                class="form-control"
                                                placeholder="Tên *"
                                                required
                                            >
                                        </div>
                                    </div>
                                    
                                    <div class="form-group" data-aos="fade-up" data-aos-duration="4000" >
                                        <input 
                                            type="email" 
                                         
                                            class="form-control"
                                            placeholder="Email *"
                                            required
                                        >
                                    </div>
                                    
                                    <div class="form-group" data-aos="fade-up" data-aos-duration="4000">
                                        <input 
                                            type="tel" 
                                         
                                            class="form-control"
                                            placeholder="Số điện thoại *"
                                        >
                                    </div>
                                    
                                 
                                    
                                    <div class="form-group" data-aos="fade-up" data-aos-duration="4000" >
                                        <textarea 
                                          
                                            class="form-control textarea"
                                            placeholder="Nội dung tin nhắn *"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <div class="form-group button-submit" data-aos="fade-up" data-aos-duration="4000" >
                                        <button type="submit" class="btn-submit">
                                          
                                            <span>
                                                <i class="fa-solid fa-envelope"></i>
                                                Gửi Tin Nhắn
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import Title_1 from '../TitleCard/Title_1.vue';
export default{
    name:'AppContactCard_1',
    components:{
        Title_1
    },
    data(){
        return{
            title:{title:'Liên Hệ Hỗ Trợ'},
        }
    },

}
</script>

<style scoped>
.container-contact{
    width: 1200px;
    margin: 0 auto;
    
}
.blue-card{
    text-align: start;
    margin-top: auto;
    margin-bottom: auto;
    padding: 30px;
}
.fa-solid{
    margin-right: 10px;
    font-size: 15px;
}
.input-name{
    width: 280px;
}

.wrap-card-contact-form{

    position: relative;
    overflow: hidden;
    
}

.contact-form-container {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 40px 30px;
    position: relative;
}

.contact-form-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}



.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.form-group {
    position: relative;
}

.form-control {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;
    background: #f8f9fa;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
}

.form-control:focus {
    outline: none;
    border-color: #dd0182;
    background: white;
    box-shadow: 0 0 0 4px rgba(74, 51, 217, 0.1);
    transform: translateY(-2px);
}

.form-control::placeholder {
    color: #8e9aaf;
    font-weight: 400;
}



.textarea {
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
}

.btn-submit {
    background: #dd0182;
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;
}

.btn-submit:hover{
    background-color: white;
    color: #dd0182;
    border:1px solid #dd0182;
}



.send-icon, .loading-icon {
    font-size: 18px;
}

.button-submit{
    padding: 20px 0;
}

.title{
    font-size: 30px;
    padding: 20px 0;
    color: #4a33d9;
    font-weight: bold;
}

.content{
    font-size: 16px;
    color: rgb(119,119,119);
}

.wrap-card-contact{
    height: 500px;
    display: flex;
}

@media(max-width:768px){
    .card-inner {
        margin-bottom: 40px;
        width: 31%;
        margin-left: 20px;
    }

    .contact-form-container{
        width: 35%;
    }


    .blue-card{
        text-align: start;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding: 30px;
    }

    
    .contact-form-inner {
      

    }
    
    .form-title {
        font-size: 24px;
        margin-bottom: 25px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .form-control {
     
        font-size: 14px;
    }
    
    .btn-submit {

        font-size: 10px;
        
    }
    
    .wrap-card-contact {
        height: auto;
        min-height: 400px;
    }
    
    .wrap-card-contact-form {
        margin-top: 20px;
    }
}


</style>