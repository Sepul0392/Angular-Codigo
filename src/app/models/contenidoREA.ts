export class contenidoREAI {

    constructor(id_CREA = 0, tipo_CREA = 0, id_materia = 0, id_grado = 0, en_uso = 0,
                nombre_CREA = '', urlrepositorio = '', descripcion_CREA = ''){
                    this.id_CREA = id_CREA;
                    this.tipo_CREA = tipo_CREA;
                    this.id_materia = id_materia;
                    this.id_grado = id_grado;
                    this.nombre_CREA = nombre_CREA;
                    this.urlrepositorio = urlrepositorio;
                    this.descripcion_CREA = descripcion_CREA;
                    this.en_uso = en_uso;
    }

    id_CREA: number;
    tipo_CREA: number;
    id_materia: number;
    id_grado: number;
    nombre_CREA: string;
    urlrepositorio: string;
    descripcion_CREA: string;
    en_uso: number;
}
