<template>
        <div class="vocab-card fade-in" data-aos="fade-left" data-aos-duration="20000" >
            <div class="vocab-word" data-aos="fade-left" data-aos-duration="20000">{{ Words.word }}</div>
            <div class="vocab-pronunciation" data-aos="fade-left" data-aos-duration="20000">{{Words.pronunciation}}</div>
            <button class="audio-btn" data-aos="fade-left" data-aos-duration="20000" @click="speakWord"><i class="fa-solid fa-volume-low"></i></button>
        </div>


            

</template>
<script>
export default{
    name:'AppWordcard',
    components:{
        
    },
    props: {
        Words: {
            type: Object,
            required: true
            }
    },
    methods:{
        speakWord(){
            const wordSpeak = this.Words.word
            if(!wordSpeak){
                return
            }
            const speak = new SpeechSynthesisUtterance(wordSpeak)
            speak.lang = "en-US"
            speechSynthesis.speak(speak)
        }
    }
    
}
</script>
<style scoped>
        .vocab-card {
            background:#4a33d9;
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.3);
            text-align: center;
            width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
            margin: 0 auto;
        
        }

        .vocab-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
            border-color: #dd0182;
        }

        .vocab-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: #dd0182;
            transition: left 0.5s;
        }

        .vocab-card:hover::before {
            left: 100%;
        }

        .vocab-word {
            font-size: 1.3rem;
            font-weight: 600;
            color: #dd0182;
            margin-bottom: 8px;
            z-index: 1;
            position: relative;
        }

        .vocab-pronunciation {
            font-size: 0.85rem;
            color: white;
            font-style: italic;
            z-index: 1;
            position: relative;
        }

        .audio-btn {
            background: #dd0182;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto 0;
            font-size: 0.8rem;
            z-index: 1;
            position: relative;
        }

          .audio-btn:hover{
            background: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            color: #dd0182;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto 0;
            font-size: 0.8rem;
            z-index: 1;
            position: relative;
        }

        
@media (max-width:768px)
{
         .vocab-card {
            width: 150px;
         }
         .vocab-word{
            font-size: 1rem;
         }
         .vocab-pronunciation{
            font-size: 0.75rem;
         }
}
</style>