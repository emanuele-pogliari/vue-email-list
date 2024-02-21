const { createApp } = Vue

createApp({
    data() {
        return {
            mails: [

            ]
        }
    },



    methods: {
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                this.mails.push({ success: result.data.success, response: result.data.response });
            })
        }
    },
}).mount('#app')