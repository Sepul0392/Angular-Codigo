export class ActividadI {

    constructor(id_actividad = 0, id_colegio = 0, id_docente = 0, id_materia = 0, id_grado = 0, id_competencia = 0, titulo_actividad = '', 
                descripcion_actividad = '',id_contenidoREA = 0, video = 0, urlvideo = '', lectura = 0, urllectura = '', html = 0, urlhtml = '', descripcion_test = '',
                Q1 = '', A11 = '', A12 = '', A13 = '', A14 = '', CA1 = 0, Q2 = '', A21 = '', A22 = '', A23 = '', A24 = '', CA2 = 0,
                Q3 = '', A31 = '', A32 = '', A33 = '', A34 = '', CA3 = 0, audio = 0, urlaudio = ''){
                    this.id_actividad = id_actividad;
                    this.id_colegio = id_colegio;
                    this.id_docente = id_docente;
                    this.id_materia = id_materia;
                    this.id_grado = id_grado;
                    this.id_competencia = id_competencia;
                    this.titulo_actividad = titulo_actividad;
                    this.descripcion_actividad = descripcion_actividad;
                    this.id_contenidoREA = id_contenidoREA;
                    this.video = video;
                    this.urlvideo = urlvideo;
                    this.documento = lectura;
                    this.urldocumento = urllectura;
                    this.audio = audio;
                    this.urlaudio = urlaudio;
                    this.html = html;
                    this.urlhtml = urlhtml;
                    this.descripcion_test = descripcion_test;
                    this.Q1 = Q1;
                    this.A11 = A11;
                    this.A12 = A12;
                    this.A13 = A13;
                    this.A14 = A14;
                    this.CA1 = CA1;
                    this.Q2 = Q2;
                    this.A21 = A21;
                    this.A22 = A22;
                    this.A23 = A23;
                    this.A24 = A24;
                    this.CA2 = CA2;
                    this.Q3 = Q3;
                    this.A31 = A31;
                    this.A32 = A32;
                    this.A33 = A33;
                    this.A34 = A34;
                    this.CA3 = CA3;
    }

    id_actividad: number;
    id_colegio: number;
    id_docente: number;
    id_materia: number;
    id_grado: number;
    id_competencia: number;
    titulo_actividad: string;
    descripcion_actividad: string;
    id_contenidoREA: number;
    video: number;
    urlvideo: string;
    documento: number;
    urldocumento: string;
    audio: number;
    urlaudio: string;
    html: number;
    urlhtml: string;
    descripcion_test: string;
    Q1: string;
    A11: string;
    A12: string;
    A13: string;
    A14: string;
    CA1: number;
    Q2: string;
    A21: string;
    A22: string;
    A23: string;
    A24: string;
    CA2: number;
    Q3: string;
    A31: string;
    A32: string;
    A33: string;
    A34: string;
    CA3: number
}