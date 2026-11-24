/* Biblioteca de ejercicios: datos y figuras animadas (vectores, sin imágenes externas) */
const EX=[
{id:'sq',n:'Sentadilla goblet',g:'Pierna',eq:'Mancuerna',lv:'Principiante',m:'Cuádriceps y glúteos',fig:'sq',
 pasos:['Sostén una mancuerna pegada al pecho con ambas manos.','Separa los pies al ancho de los hombros, con las puntas ligeramente hacia afuera.','Baja llevando la cadera hacia atrás y abajo, con el pecho erguido.','Sube empujando el piso con todo el pie hasta estirar las piernas.'],
 tips:['Mantén los talones apoyados en el piso.','Las rodillas siguen la dirección de los pies, sin juntarse.','Baja hasta donde puedas sin encorvar la espalda.']},
{id:'sl',n:'Sentadilla libre',g:'Pierna',eq:'Sin equipo',lv:'Principiante',m:'Cuádriceps y glúteos',fig:'sl',
 pasos:['Separa los pies al ancho de los hombros y estira los brazos al frente.','Baja llevando la cadera hacia atrás, como si te sentaras en una silla.','Sube empujando el piso hasta quedar de pie.'],
 tips:['Pecho arriba y mirada al frente.','Las rodillas no se juntan al bajar.','Empieza con 10 repeticiones bien hechas.']},
{id:'rdl',n:'Peso muerto rumano',g:'Pierna',eq:'Mancuernas',lv:'Intermedio',m:'Isquiotibiales, glúteos y espalda baja',fig:'rdl',
 pasos:['De pie, sostén las mancuernas frente a los muslos y flexiona un poco las rodillas.','Lleva la cadera hacia atrás y baja las mancuernas pegadas a las piernas.','Baja hasta sentir el estiramiento en la parte de atrás del muslo.','Sube empujando la cadera hacia adelante.'],
 tips:['La espalda siempre recta, nunca redondeada.','Las mancuernas viajan cerca del cuerpo.','El movimiento sale de la cadera, no de la espalda.']},
{id:'ht',n:'Hip thrust con barra',g:'Glúteo',eq:'Barra y banco',lv:'Intermedio',m:'Glúteos e isquiotibiales',fig:'ht',
 pasos:['Apoya la parte alta de la espalda en el banco, con la barra sobre la cadera.','Pies al ancho de la cadera y rodillas dobladas.','Sube la cadera empujando con los talones hasta formar una línea recta de hombros a rodillas.','Aprieta los glúteos un segundo arriba y baja con control.'],
 tips:['Mentón hacia el pecho durante todo el movimiento.','No arquees la zona lumbar al subir.','Usa una almohadilla en la barra para mayor comodidad.']},
{id:'lg',n:'Zancadas caminando',g:'Pierna',eq:'Mancuernas',lv:'Intermedio',m:'Cuádriceps y glúteos',fig:'lg',
 pasos:['De pie, con una mancuerna en cada mano.','Da un paso largo al frente.','Baja hasta que ambas rodillas formen un ángulo de 90 grados.','Empuja con el pie delantero y da el siguiente paso con la otra pierna.'],
 tips:['Torso erguido durante todo el movimiento.','La rodilla de adelante no debe pasar mucho la punta del pie.','Pasos largos y controlados.']},
{id:'bp',n:'Press de banca',g:'Pecho',eq:'Barra y banco',lv:'Intermedio',m:'Pecho, hombros y tríceps',fig:'bp',
 pasos:['Acuéstate con los ojos bajo la barra y los pies firmes en el piso.','Agarra la barra un poco más ancho que los hombros.','Baja la barra de forma controlada hasta rozar el pecho.','Empuja hasta estirar los brazos.'],
 tips:['Omóplatos juntos y hacia abajo.','Muñecas rectas, sobre los codos.','Pide ayuda a alguien cuando uses cargas altas.']},
{id:'fl',n:'Flexiones',g:'Pecho',eq:'Sin equipo',lv:'Principiante',m:'Pecho, hombros, tríceps y core',fig:'fl',
 pasos:['Apoya las manos bajo los hombros y forma una línea recta de cabeza a talones.','Baja el pecho doblando los codos.','Empuja el piso hasta estirar los brazos.'],
 tips:['Abdomen y glúteos apretados.','Si cuesta, apoya las rodillas en el piso.','Los codos van a unos 45 grados del cuerpo.']},
{id:'rm',n:'Remo con mancuerna',g:'Espalda',eq:'Mancuerna',lv:'Principiante',m:'Dorsales, espalda media y bíceps',fig:'rm',
 pasos:['Inclina el torso hacia adelante con la espalda recta y las rodillas ligeramente dobladas.','Deja colgar la mancuerna con el brazo estirado.','Lleva el codo hacia atrás y arriba, junto al cuerpo.','Baja despacio hasta estirar el brazo.'],
 tips:['No gires el torso al subir.','Piensa en llevar el codo, no la mano.','Cuello alineado con la columna.']},
{id:'pm',n:'Press militar',g:'Hombro',eq:'Mancuernas',lv:'Intermedio',m:'Hombros y tríceps',fig:'pm',
 pasos:['De pie, con las mancuernas a la altura de los hombros.','Aprieta el abdomen para sostener el torso.','Empuja hacia arriba hasta estirar los brazos.','Baja con control hasta los hombros.'],
 tips:['No arquees la espalda al empujar.','Costillas hacia adentro.','No encojas los hombros hacia las orejas.']},
{id:'cu',n:'Curl de bíceps',g:'Brazos',eq:'Mancuernas',lv:'Principiante',m:'Bíceps',fig:'cu',
 pasos:['De pie, con las mancuernas a los lados y las palmas al frente.','Flexiona los codos subiendo las mancuernas hacia los hombros.','Baja despacio hasta estirar los brazos.'],
 tips:['Codos pegados al cuerpo.','Sin balancear el torso.','Baja en unos 3 segundos.']},
{id:'pl',n:'Plancha',g:'Core',eq:'Sin equipo',lv:'Principiante',m:'Abdomen, hombros y glúteos',fig:'pl',
 pasos:['Apoya los antebrazos y las puntas de los pies en el piso.','Coloca los codos justo bajo los hombros.','Mantén el cuerpo recto de cabeza a talones.','Sostén la posición respirando con normalidad.'],
 tips:['No dejes caer la cadera.','Mira hacia el piso, con el cuello relajado.','Empieza con 20 a 30 segundos.']},
{id:'ab',n:'Abdominales',g:'Core',eq:'Sin equipo',lv:'Principiante',m:'Abdomen',fig:'ab',
 pasos:['Acuéstate boca arriba con las rodillas dobladas y los pies en el piso.','Coloca las manos detrás de la cabeza, sin jalar el cuello.','Sube el torso contrayendo el abdomen.','Baja controlando el movimiento.'],
 tips:['La fuerza sale del abdomen, no del cuello.','Exhala al subir.','Movimiento corto y firme.']},
{id:'es',n:'Escaladores',g:'Cardio',eq:'Sin equipo',lv:'Intermedio',m:'Core, hombros y piernas',fig:'es',
 pasos:['Empieza en posición de plancha alta, con las manos bajo los hombros.','Lleva una rodilla hacia el pecho.','Cambia de pierna rápido, como si corrieras.','Mantén la cadera baja y el abdomen firme.'],
 tips:['Espalda recta, sin subir la cadera.','Respira de forma constante.','Empieza lento y sube el ritmo poco a poco.']}
];
const EXD=id=>EX.find(e=>e.id===id);
const EXN=Object.fromEntries(EX.map(e=>[e.n,e.id]));
const EXG=['Todos','Pierna','Glúteo','Pecho','Espalda','Hombro','Brazos','Core','Cardio'];

/* Poses (vista lateral, mirando a la derecha): H cabeza, N hombro, P cadera, E codo, W muñeca, K rodilla, A tobillo; K2/A2 = pierna de atrás */
const _st={H:[50,14],N:[50,22],P:[50,46],K:[50,68],A:[50,90]};
const FIG={
 sq:{obj:'db',a:{..._st,E:[55,34],W:[58,26]},b:{H:[55,34],N:[52,42],P:[40,66],K:[62,72],A:[48,90],E:[58,52],W:[62,44]}},
 sl:{a:{..._st,E:[62,23],W:[74,23]},b:{H:[55,34],N:[52,42],P:[40,66],K:[62,72],A:[48,90],E:[64,42],W:[76,42]}},
 rdl:{obj:'db',a:{..._st,E:[51,36],W:[52,49]},b:{H:[71,37],N:[64,40],P:[40,48],K:[52,68],A:[50,90],E:[64,54],W:[63,68]}},
 ht:{bench:'ht',obj:'plate',at:'P',a:{H:[21,62],N:[28,66],P:[50,82],K:[64,64],A:[66,88],E:[38,76],W:[50,78]},b:{H:[21,62],N:[28,66],P:[50,60],K:[70,66],A:[70,88],E:[41,70],W:[51,60]}},
 lg:{obj:'db',a:{..._st,E:[51,36],W:[52,48]},b:{H:[46,28],N:[46,36],P:[46,62],K:[68,64],A:[68,86],E:[47,49],W:[47,62],K2:[34,82],A2:[14,86]}},
 bp:{bench:'bp',obj:'plate',a:{H:[26,62],N:[34,62],P:[60,62],K:[78,64],A:[80,88],E:[47,60],W:[36,54]},b:{H:[26,62],N:[34,62],P:[60,62],K:[78,64],A:[80,88],E:[34,48],W:[34,34]}},
 fl:{a:{H:[15,59],N:[22,62],P:[46,72],K:[66,80],A:[86,88],E:[23,75],W:[22,88]},b:{H:[9,79],N:[17,80],P:[43,83],K:[65,85.5],A:[86,88],E:[27,76],W:[17,88]}},
 rm:{obj:'db',a:{H:[72,42],N:[64,44],P:[40,50],K:[46,70],A:[40,90],E:[64,58],W:[63,72]},b:{H:[72,42],N:[64,44],P:[40,50],K:[46,70],A:[40,90],E:[52,46],W:[58,57]}},
 pm:{obj:'db',a:{..._st,E:[58,30],W:[56,20]},b:{..._st,E:[52,10],W:[51,-2]}},
 cu:{obj:'db',a:{..._st,E:[52,37],W:[53,50]},b:{..._st,E:[52,37],W:[62,28]}},
 pl:{a:{H:[12,70],N:[20,72],P:[45.3,78],K:[66.7,83],A:[88,88],E:[21,86],W:[34,87]},b:{H:[12,69],N:[20,71],P:[45,76.5],K:[66.5,82],A:[88,88],E:[21,86],W:[34,87]}},
 ab:{a:{H:[17,82],N:[24,84],P:[50,84],K:[64,67],A:[76,87],E:[27,76],W:[19,79]},b:{H:[29.6,56.8],N:[34.4,63.2],P:[50,84],K:[64,67],A:[76,87],E:[44,54],W:[31,57]}},
 es:{a:{H:[15,59],N:[22,62],P:[46,72],K:[66,80],A:[86,88],E:[23,75],W:[22,88],K2:[30,78],A2:[42,88]},b:{H:[15,59],N:[22,62],P:[46,72],K:[30,78],A:[42,88],E:[23,75],W:[22,88],K2:[66,80],A2:[86,88]}}
};
function fig(id,size,mode){
 const f=FIG[id];if(!f)return '';
 const still=mode||((typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion:reduce)').matches)?'a':null);
 const A=f.a,B=f.b;
 const g=(p,k)=>{const v=p[k]||(k==='K2'?p.K:k==='A2'?p.A:null);return v};
 const r=n=>Math.round(n*10)/10;
 const pa=(p,ks)=>'M'+ks.map(k=>{const v=g(p,k);return r(v[0])+' '+r(v[1])}).join('L');
 const dur='2.6s',anim=(attr,va,vb)=>still?'':`<animate attributeName="${attr}" dur="${dur}" repeatCount="indefinite" values="${va};${vb};${va}" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1"/>`;
 const cur=(va,vb)=>still==='b'?vb:va;
 const path=(ks,st,w,op)=>`<path d="${cur(pa(A,ks),pa(B,ks))}" fill="none" stroke="${st}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" opacity="${op}">${anim('d',pa(A,ks),pa(B,ks))}</path>`;
 const G='#39FF14';
 let o='<line x1="4" y1="91" x2="96" y2="91" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linecap="round"/>';
 if(f.bench==='ht')o+='<rect x="6" y="68" width="30" height="6" rx="2" fill="#4A4F57"/><path d="M12 74V91M30 74V91" stroke="#4A4F57" stroke-width="3"/>';
 if(f.bench==='bp')o+='<rect x="20" y="68" width="52" height="6" rx="2" fill="#4A4F57"/><path d="M26 74V91M66 74V91" stroke="#4A4F57" stroke-width="3"/>';
 o+=path(['P','K2','A2'],G,5.5,.45);
 o+=path(['N','P'],G,6,1);
 o+=path(['P','K','A'],G,5.5,1);
 o+=path(['N','E','W'],G,5,1);
 const hx=(p)=>r(p.H[0]),hy=(p)=>r(p.H[1]);
 o+=`<circle cx="${cur(hx(A),hx(B))}" cy="${cur(hy(A),hy(B))}" r="6.5" fill="#fff">${anim('cx',hx(A),hx(B))}${anim('cy',hy(A),hy(B))}</circle>`;
 if(f.obj){const k=f.at||'W',pt=p=>p[k];
  if(f.obj==='db'){const x=p=>r(pt(p)[0]-6),y=p=>r(pt(p)[1]-2.5);o+=`<rect x="${cur(x(A),x(B))}" y="${cur(y(A),y(B))}" width="12" height="5" rx="2" fill="#fff" stroke="#1A1A1A" stroke-width="1">${anim('x',x(A),x(B))}${anim('y',y(A),y(B))}</rect>`}
  else{const x=p=>r(pt(p)[0]),y=p=>r(pt(p)[1]);o+=`<circle cx="${cur(x(A),x(B))}" cy="${cur(y(A),y(B))}" r="6" fill="#DDE2E8" stroke="#1A1A1A" stroke-width="1.2">${anim('cx',x(A),x(B))}${anim('cy',y(A),y(B))}</circle>`}}
 return `<svg width="${size}" height="${size}" viewBox="0 -12 100 112" role="img" aria-label="Animación del ejercicio" style="display:block">${o}</svg>`}
