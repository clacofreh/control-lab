const KEYS ={
    maquetas:'maqueta',
    maquetasId:'maquetaId'
}

//funciones que insertan un registro

export const insertMaqueta= (data)=>{
    let maquetas=getAllMaquetas();
    data['id'] = generateMaquetasId()
    maquetas.push(data)
    localStorage.setItem(KEYS.Maquetas,JSON.stringify(maquetas))
}

export const generateMaquetasId = ()=>{
    if (localStorage.getItem(KEYS.maquetaId) == null)
        localStorage.setItem(KEYS.maquetaId, '0')
    var id = parseInt(localStorage.getItem(KEYS.maquetaId))
    localStorage.setItem(KEYS.maquetaId, (++id).toString())
    return id;
}

export const getAllMaquetas= ()=> {
    if (localStorage.getItem(KEYS.maquetas) == null)
        localStorage.setItem(KEYS.maquetas, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.maquetas));
}