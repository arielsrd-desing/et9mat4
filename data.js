/* Datos estructurados para cada sección del curso */
const secciones = [
{
	id: "b1",
	titulo: "Primer Bimestre",
	contenidos: [
		"Números reales y complejos",
		"Operaciones en forma polar y exponencial",
		"Funciones y curvas en el espacio",
		"Funciones trigonométricas",
		"Límites y continuidad"
	],
	nodales: [
		"Función",
		"Sistemas de ecuaciones y polinomios",
		"Límite"
	],
	evaluaciones: "Del 1 al 10 de mayo",
	trabajos: "10 de mayo",
	video: "https://www.youtube.com/watch?v=ojiMGOqwwCE"
},
{
	id: "b2",
	titulo: "Segundo Bimestre",
	contenidos: [
		"Límites y continuidad",
		"Continuidad de funciones",
		"Asíntotas",
		"Recta tangente"
	],
	nodales: [
		"Límite de funciones",
		"Indeterminaciones",
	],
	evaluaciones: "Del 1 al 15 de julio",
	trabajos: "15 de julio",
	video: "https://www.youtube.com/watch?v=pYVVPqphPS0"
},
{
	id: "b3",
	titulo: "Tercer Bimestre",
	contenidos: [
		"Derivadas",
		"Aplicaciones de la derivada",
	],
	nodales: [
		"Lectura e interpretación de gráficos",
		"Reconocimiento de patrones",
		"Problemas con fórmulas",
		"Conceptos de geometría analítica"
	],
	evaluaciones: "Del 20 al 30 de septiembre",
	trabajos: "30 de septiembre",
	video: "https://www.youtube.com/watch?v=_6-zwdrqD3U"
},
{
	id: "b4",
	titulo: "Cuarto Bimestre",
	contenidos: [
		"Integrales",
		"Aplicaciones de las integrales",
	],
	nodales: [
		"Fórmulas de figuras geométricas y cuerpos",
		"Cálculo de área y volúmen en problemas reales",
		"Ecuaciones de la recta",
		"Ecuación de la circunferencia",
		"Ecuación del plano",
		"Ecuación de la esfera"
	],
	evaluaciones: "Del 10 al 20 de noviembre",
	trabajos: "28 de noviembre",
	video: "https://www.youtube.com/watch?v=Ec-cGjh0Fr0"
},
{
	id: "recuperacion",
	titulo: "Período de Recuperación y criterios de acreditación",
	contenidos: [
		"Si calificó con 5 en el primer cuatrimestre y califica con 6 o más en el segundo promociona la materia",
		"Si calificó con 4 o menos en el primer cuatrimestre recupera el segundo cuatrimestre",
		"Si calificó con 6 o más en el primer cuatrimestre y con menos de 6 en el segundo recupera el segundo cuatrimestre",
		"Si calificó con menos de 5 en ambos cuatrimestres recupera en diciembre-febrero",
		"Todos los trabajos completados"
	],
	nodales: [
		"Límite y continuidad",
		"Derivadas",
		"Integrales"
	],
	evaluaciones: "Período diciemtre-febrero",
	trabajos: "Trabajo final: 10 de diciembre",
	video: "https://www.youtube.com/watch?v=bbbbbb"
}
];


const calificaciones = {
  primer: [
    { nombre: "Alumno 1", nota: 6, obs: "Buen desempeño" },
    { nombre: "Alumno 2", nota: 10, obs: "Excelente trabajo" },
    { nombre: "Alumno 3", nota: 6, obs: "Puede mejorar" }
  ],
  segundo: [
    { nombre: "Alumno 1", nota: 9, obs: "Muy bien" },
    { nombre: "Alumno 2", nota: 7, obs: "Regular" }
  ],
  tercer: [
    { nombre: "Alumno 1", nota: 10, obs: "Excelente" }
  ],
  cuarto: [
    { nombre: "Alumno 1", nota: 5, obs: "Debe reforzar contenidos" }
  ],
  recuperacion: [
    { nombre: "Alumno 3", nota: 8, obs: "Recuperó satisfactoriamente" }
  ]
};
