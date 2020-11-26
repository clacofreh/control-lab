import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from '../../useForm';
import * as maquetasService from "../../../services/MaquetasService";



const initialFValues = {
    id: 0,
    nombre: '',
    serie: '',  
    modelo: '',
    ubicacion: '',

}

export default function MaquetasForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nombre' in fieldValues)
            temp.nombre = fieldValues.nombre ? "" : "Este elemento es requerido."
        if ('serie' in fieldValues)
            temp.serie = (fieldValues.serie) ? "" : "Este elemento es requerido"
        if ('modelo' in fieldValues)
            temp.modelo = fieldValues.modelo  ? "" : "Este elemento es requerido"
        if ('ubicacion' in fieldValues)
            temp.ubicacion = fieldValues.ubicacion ? "" : "Este elemento es requerido"
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            maquetasService.insertMaqueta(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="nombre"
                        label="Ingrese Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        error={errors.nombre}
                    />
                    <Controls.Input
                        label="Ingrese Serie"
                        name="serie"
                        value={values.serie}
                        onChange={handleInputChange}
                        error={errors.serie}
                    />
                    
                    <Controls.Input
                        label="Ingrese Modelo"
                        name="modelo"
                        value={values.modelo}
                        onChange={handleInputChange}
                        error={errors.modelo}
                    />
                    <Controls.Input
                        label="Ingrese Ubicacion"
                        name="ubicacion"
                        value={values.ubicacion}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                   
                
                 
                  

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Enviar" color="secondary" />
                        <Controls.Button
                            text="Limpiar"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

