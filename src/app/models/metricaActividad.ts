export class MetricaActividadI {
    
    constructor(id_metrica = 0, actividad = '', id_actividad = 0,
                nota_quiz = 0, nota_evaluacion = 0, nota_final = 0, inicio = '', 
                contenido = '', quiz = '', taller = '', evaluacion = '') {

        this.id_metrica = id_metrica;
        this.id_actividad = id_actividad;
        this.actividad = actividad;
        this.nota_quiz = nota_quiz;
        this.nota_evaluacion = nota_evaluacion;
        this.nota_final = nota_final;
        this.inicio = inicio;
        this.contenido = contenido;
        this.quiz = quiz;
        this.taller = taller;
        this.evaluacion = evaluacion;
    }


    id_metrica: number;
    id_actividad: number;
    actividad: string;
    nota_quiz: number;
    nota_evaluacion: number;
    nota_final: number;
    inicio: string;
    contenido: string;
    quiz: string;
    taller: string;
    evaluacion: string;
}