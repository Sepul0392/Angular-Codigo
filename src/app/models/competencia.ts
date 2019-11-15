export class CompetenciaI {
    
  constructor(id_competencia = 0, nombre_competencia = '', id_areaMateria = 0, gradoInicial = 0,
              gradoFinal = 0) {
    this.id_competencia = id_competencia;
    this.nombre_competencia = nombre_competencia;
    this.id_areaMateria = id_areaMateria;
    this.gradoInicial = gradoInicial;
    this.gradoFinal = gradoFinal;
  }
  
  
  
  id_competencia: number;
  nombre_competencia: string;
  id_areaMateria: number;
  gradoInicial: number;
  gradoFinal: number;
}