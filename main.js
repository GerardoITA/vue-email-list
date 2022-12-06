const { createApp } = Vue
createApp({
    data() {
        return {
            emails: [
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
                { email: 0 },
            ],

        }
    },
    methods: {
    
    },
    /* mounted(){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(function (emailResult) {
            const emailRisultato = emailResult.data.response;
        }
        
        
        )
    } */
}).mount(`#app`)




