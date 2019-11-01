export class ActividadI {

    constructor(id_actividad = 0, id_colegio = 0, id_docente = 0, id_materia = 0,
        id_competencia = 0, titulo_actividad = '', descripcion_actividad = '', 
        contenido = 0, id_tipoContenido = 0, urlContenido = ''){
                    this.id_actividad = id_actividad;
                    this.id_colegio = id_colegio;
                    this.id_docente = id_docente;
                    this.id_materia = id_materia;
                    this.id_competencia = id_competencia;
                    this.titulo_actividad = titulo_actividad;
                    this.descripcion_actividad = descripcion_actividad;
                    this.contenido = contenido;
                    this.id_tipoContenido = id_tipoContenido;
                    this.urlContenido = urlContenido;
    }

    id_actividad: number;
    id_colegio: number;
    id_docente: number;
    id_materia: number;
    id_competencia: number;
    titulo_actividad: string;
    descripcion_actividad: string;
    contenido: number;
    id_tipoContenido: number;
    urlContenido: string;
}