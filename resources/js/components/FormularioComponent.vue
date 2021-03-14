<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><strong>Formulario</strong></div>
                    <div class="card-body">
                        <b-form-group label="Imagen:" label-cols-sm="2">
                            <b-form-file
                                v-model="file"
                                :state="Boolean(file)"
                                label="Imagen:"
                                placeholder="Elija un archivo o suéltelo aquí..."
                                drop-placeholder="Suelta el archivo aquí..."
                                accept="image/jpeg"
                            ></b-form-file>
                        </b-form-group>
                        <div class="mt-3">Imágen seleccionada: {{ file ? file.name : '' }}</div>
                        <b-row v-if="imageUrl != null">
                            <b-col>
                                <b-img thumbnail fluid :src="imageUrl" alt="Image 2"></b-img>
                            </b-col>
                        </b-row>
                        <b-row class="text-center">
                            <b-col lg="12" class="pb-2">
                                <b-button @click="enviar">Subir</b-button>
                            </b-col>
                        </b-row>

                        <b-row class="text-justify" v-if="response != null">
                            <b-col lg="12" class="pb-2">
                                <h5><strong>Hoja</strong></h5>
                                <p><strong><strong>Ancho: </strong></strong>{{ response.hoja.width }} px</p>
                                <p><strong><strong>Alto: </strong></strong>{{ response.hoja.width }} px</p>
                                <p><strong><strong>Orientación: </strong></strong>{{ response.hoja.orientacion }}</p>
                                <h5><strong>Dimensiones iniciales de la imagen</strong></h5>
                                <p><strong><strong>Ancho: </strong></strong>{{ response.inicial.width }} px</p>
                                <p><strong><strong>Alto: </strong></strong>{{ response.inicial.width }} px</p>
                                <h5><strong>Dimensiones final de la imagen</strong></h5>
                                <p><strong><strong>Ancho: </strong></strong>{{ response.final.width }} px</p>
                                <p><strong><strong>Alto: </strong></strong>{{ response.final.width }} px</p>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Services from "../scripts/Services";

export default {
    data() {
        return {
            file: null,
            imageUrl: null,
            img: new Image(),
            response: null
        }
    },
    mounted() {
    },
    watch: {
        file: function (nuevoValor) {
            this.response = null;
            if (nuevoValor instanceof File && nuevoValor.type === "image/jpeg") {
                this.imageUrl = window.URL.createObjectURL(nuevoValor);
            } else {
                this.imageUrl = null;
                this.makeToast('error', 'Formato no válido');
            }
        },
        imageUrl: function (nuevoValor) {
            if (nuevoValor !== null) {
                this.img.src = this.imageUrl;
            } else {
                this.img.src = '';
            }
        },
    },
    methods: {
        enviar(e) {
            e.preventDefault();
            const config = {
                headers: {'content-type': 'multipart/form-data'}
            }

            let formData = new FormData();
            formData.append('file', this.file);

            Services.doPost('subir/imagen', formData, config).then((response) => {
                this.response = response.data;
            })
        },
    }
}
</script>
