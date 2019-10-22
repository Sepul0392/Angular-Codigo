export interface JwtResponseI {
    dataDocente:{
        id_docente: number,
        tipo_usuario: number,
        nombre_docente: string,
        apellido_docente: string,
        id_colegio: number,
        nombre_usuario: string,
        contrasena: string,
        correo_electronico: string
        accessToken: string,
        expiresIn: string
    }

    dataContenidoREA:{
        id_CREA: number,
        tipo_CREA: number,
        id_materia: number,
        grado10: number,
        grado11: number,
        nombre_CREA: string,
        urlrepositorio: string,
        descripcion_CREA: string
    }
}
