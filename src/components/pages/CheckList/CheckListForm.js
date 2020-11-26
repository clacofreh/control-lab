import React from 'react'
import SiNo from './SiNo'
import { useForm, Form } from '../../useForm';
import { Grid, Typography,TextField } from '@material-ui/core';
import Controls from "../../controls/Controls";



function CheckListForm() {
    
    return (
        <>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h4'>Informe de Novedades</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label=" Nombre del Equipo Estándar"
                            name="nombreDelEquipoEstandar"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Marca"
                            name="Marca"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Modelo"
                            name="Modelo"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Serie"
                            name="Serie"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Codigo de Inventario PeopleSoft"
                            name="codigoInventarioPeopleSoft"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Codigo Inventario Activo Fijo"
                            name="codigoInventarioActivoFijo"
                        />
                    </Grid>
                    <Typography variant='h4'>Revisión del estado general de equipo, instrumento, cable o insumo (REV-A)</Typography>
                    <Grid item xs={6}>
                        <Typography>Revisión de carcasas </Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>Revisión de conectores </Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>Revisión de las piezas plásticas </Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>Revisión de indicadores y todos aquellos de carácter funcional básico</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>Limpieza general</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>Se detecta Falla   </Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Descripción de la falla"
                            multiline
                            helperText="Escriba aquí"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Reparación con los medios propios</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <Typography>  Enviado a servicios técnicos externos  </Typography>
                        <SiNo />
                    </Grid>
                    <Typography variant='h4'>Revisión del estado eléctrico de los equipos e instrumentos (REV-B)</Typography>
                    <Grid item xs={6}>
                        <Typography>Chequear el estado del sistema de alimentación</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <Typography>Chequear el estado del sistema de poder</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <Typography>Se verifica que se energicen de forma correcta</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <Typography>Se revisa si presentan deficiencias que pongan en riesgo la seguridad de quienes los operen </Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <Typography>Fallas involucran reemplazos de fusibles - Reparación con los medios propios</Typography>
                        <SiNo />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <Typography>Fallas involucran reemplazos de cables - Reparación con los medios propios </Typography>
                        <SiNo />
                    </Grid>
                    


                </Grid>

            </Form>
            <div>
                        <Controls.Button
                            type="submit"
                            text="Enviar" color="secondary" />
                        <Controls.Button
                            text="Limpiar"
                            color="default"
                           />
                    </div>
        </>
    )
}

export default CheckListForm
