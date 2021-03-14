
export default {
    resetError(event) {
        if (event.target.nextElementSibling != null && event.target.nextElementSibling.classList.contains('invalid-feedback')){
            event.target.nextElementSibling.remove();
            event.target.classList.remove('is-invalid');
        }
        event.target.classList.add('is-valid');
    },
    loadErrors(errores){
        for (let temp in errores){
            this.errors[temp] = errores[temp][0];

            if (this.$refs[temp] !== undefined){
                if (this.$refs[temp].$el.nodeName === 'DIV'){
                    this.$refs[temp] = this.$refs[temp].referenciaInterna()
                }

                this.$refs[temp].$el.classList.remove('is-valid');
                this.$refs[temp].$el.classList.add('is-invalid');

                if (this.$refs[temp].$el.nextElementSibling != null){
                    this.$refs[temp].$el.nextElementSibling.remove();
                }

                let newDiv = document.createElement("div")
                let newContent = document.createTextNode(errores[temp][0]);

                newDiv.setAttribute("tabindex", "-1");
                newDiv.setAttribute("role", "alert");
                newDiv.setAttribute("aria-live", "assertive");
                newDiv.setAttribute("aria-atomic", "true");
                newDiv.classList.add("invalid-feedback");
                newDiv.appendChild(newContent);

                this.$refs[temp].$el.after(newDiv);
            }
        }
    },
    makeToast: function (variant, message) {
        if (variant === 'error'){
            variant = 'danger';
        }
        let titles = {
            'primary': 'Mensaje Primario',
            'secondary': 'Mensaje Secundario',
            'danger': 'Mensaje de Error',
            'success': 'Mensaje de Éxito',
            'info': 'Mensaje Informativo',
            'warning': 'Mensaje alerta',
        };

        this.$bvToast.toast(message, {
            title: titles[variant],
            toaster: 'b-toaster-top-right',
            autoHideDelay: 5000,
            variant: variant,
            appendToast: true
        })
    },
    csrf_field: function () {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    },
};
