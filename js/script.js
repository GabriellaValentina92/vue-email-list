/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = Vue.createApp ({
    data(){
        return{
            emailList: [],
        }
    },

    methods: {
        showEmail (){
            this.emailList = [],
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(emailResponse => (this.emailList = emailResponse.data.response));
        },
    },

    // created() {
    //     this.showEmail()
    // },
});

app.mount('.box');


