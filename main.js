;const { createApp } = Vue
createApp({
    data() {
        return {
            listaCompleta: false,
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
        .then ((emailResult) => {
            console.log(emailResult.data.response)
            this.emails[2].email = emailResult.data.response

        })
    }, */
    mounted() {
        for ( let i = 0; i < this.emails.length; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((emailResult) => {
                    console.log(emailResult.data.response)
                    this.emails[i].email = emailResult.data.response
                    if (i == this.emails.length - 1){
                        this.listaCompleta = true;
                    }
                })
            
        }
       
    }
        
}).mount(`#app`)




