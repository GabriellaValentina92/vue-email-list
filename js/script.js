/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = Vue.createApp({
    data(){
        return{
            email: '',
        }
    },

    methods: {
        showEmail (){
            this.email = '',
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(emailResponse => this.email = emailResponse.data.response);
        }
    }
});

app.mount('.box')



