// 1 REQUERIMIENTO
let radiografia=[{
  hora:"11:00",
  especialista:"IGNACIO SCHULZ",
  paciente: "FRANCISCA ROJAS",
  rut:"9878782-1",
  prevision:"FONASA"
},{
  hora:"11:30",
  especialista:"FEDERICO SUBERCASEAUX",
  paciente:"PAMELA ESTRADA",
  rut:"15345241-3",
  prevision:"ISAPRE",
},{
  hora:"15:00",
  especialista:"FERNANDO WURTHZ",
  paciente:"ARMANDO LUNA",
  rut:"16445345-9",
  prevision:"ISAPRE"
},{
  hora:"15:30",
  especialista:"ANA MARIA GODOY",
  paciente:"MANUEL GODOY",
  rut:"17666419-0",
  prevision:"FONASA"
},{
  hora:"16:00",
  especialista:"PATRICIA SUAZO",
  paciente:"RAMON ULLOA",
  rut:"14989389-K",
  prevision:"FONASA"
}];
let traumatologia =[{
    Hora: "8:30",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut:"15554774-5",
    prevision:"FONASA",
},{
    Hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut:"15444147-9",
    prevision:"ISAPRE",
},{
    Hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut:"17879423-9",
    prevision:"ISAPRE",
},{
    Hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut:"1547423-6",
    prevision:"ISAPRE",
},{
    Hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut:"16554741-K",
    prevision:"FONASA",
},{
    Hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut:"9747535-8",
    prevision:"ISAPRE",
},{
    Hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut:"11254785-5",
    prevision:"ISAPRE",
}];
let dental =[{
    Hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut:"11123425-6",
    prevision:"ISAPRE",
},{
    Hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut:"9878789-2",
    prevision:"ISAPRE",
},{
    Hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut:"7998789-5",
    prevision:"FONASA",
},{
    Hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut:"18887662-K",
    prevision:"FONASA",
},{
    Hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut:"17665461-4",
    prevision:"FONASA",
},{
    Hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut:"14441281-0",
    prevision:"ISAPRE",
}];

// 2 REQUERIMIENTO

document.getElementById("radiografia").textContent=`Primera atención: ${radiografia[0].paciente} - ${radiografia[0].prevision} | Última atención: ${radiografia[radiografia.length-1].paciente} - ${radiografia[radiografia.length-1].prevision}`;

document.getElementById("traumatologia").textContent=`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision}`;

document.getElementById("dental").textContent=`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prevision}`;

// 3 REQUERIMIENTO
let tablaRadiografia="", tablaTraumatologia="",tablaDental="";
//radiografias
for (let i = 0; i < radiografia.length; i++) {
    if(i===0){
        tablaRadiografia+=`<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>paciente</th>
                <th>rut</th>
                <th>prevision</th>
            </tr>`;
    }
    tablaRadiografia+=`<tr>
                <th>${radiografia[i].hora}</th>
                <th>${radiografia[i].especialista}</th>
                <th>${radiografia[i].paciente}</th>
                <th>${radiografia[i].rut}</th>
                <th>${radiografia[i].prevision}</th>
            </tr>`;

}
document.getElementById("tablaRadiografia").innerHTML=tablaRadiografia;
//traumatologia
for (let i = 0; i < traumatologia.length; i++) {
    if(i===0){
        tablaTraumatologia+=`<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>paciente</th>
                <th>rut</th>
                <th>prevision</th>
            </tr>`;
    }
    tablaTraumatologia+=`<tr>
                <th>${traumatologia[i].Hora}</th>
                <th>${traumatologia[i].especialista}</th>
                <th>${traumatologia[i].paciente}</th>
                <th>${traumatologia[i].rut}</th>
                <th>${traumatologia[i].prevision}</th>
            </tr>`;

}
document.getElementById("tablaTraumatologia").innerHTML=tablaTraumatologia;
//dental
for (let i = 0; i < dental.length; i++) {
    if(i===0){
        tablaDental+=`<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>paciente</th>
                <th>rut</th>
                <th>prevision</th>
            </tr>`;
    }
    tablaDental+=`<tr>
                <th>${dental[i].Hora}</th>
                <th>${dental[i].especialista}</th>
                <th>${dental[i].paciente}</th>
                <th>${dental[i].rut}</th>
                <th>${dental[i].prevision}</th>
            </tr>`;

}
document.getElementById("tablaDental").innerHTML=tablaDental;