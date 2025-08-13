<template>
    <div class="Container-wrap">
        <el-row :span="24" class="Container-wrap-statistic">
           <div class="wrap-statistic">
                <el-row :span="24" class="statistic-card">
                    <el-col :xs="24" :sm="8" class="Statistic-Card ">
                        <div class="Content-Card">
                            <h2 class="content-number" data-aos="fade-left" data-aos-duration="20000">
                                
                                50,000+
                            </h2>
                            <p class="content-passage" data-aos="fade-left" data-aos-duration="20000">
                                Người dùng
                            </p>

                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="Statistic-Card">
                         <div class="Content-Card">
                            <h2 class="content-number" data-aos="zoom-in" data-aos-duration="20000">
                                1000+
                            </h2>
                            <p class="content-passage" data-aos="zoom-in" data-aos-duration="20000">
                               Bài học tương tác
                            </p>

                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="8" class="Statistic-Card">
                         <div class="Content-Card">
                            <h2 class="content-number" data-aos="fade-right" data-aos-duration="20000">
                                95%
                            </h2>
                            <p class="content-passage" data-aos="fade-right" data-aos-duration="20000">
                               Người dùng hài lòng
                            </p>

                        </div>
                    </el-col>
                </el-row>
           </div>
        </el-row>
    </div>
</template>

<script>
    export default{
        name:'AppBannerStatistic'
    }
</script>

<style scoped>
.Container-wrap{
    margin-bottom: 100px;
}
.Container-wrap-statistic{
   background-color: #ebe6e9;
   padding: 20px 0;

}

.Statistic-Card{
    
    padding: 20px 0;
   
}

.wrap-statistic{
    width: 1000px;
    margin: 0 auto;

}
.Content-Card{
    height: 100%;
    text-align: center;
    align-content: center;
    justify-content: center;
   
}

.content-number{
    color: #dd0182;
}
.content-passage{
     color:rgb(119,119,119);
     
}
</style>