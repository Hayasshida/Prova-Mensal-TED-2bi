import * as queue from './fila'
import {Row, Student} from './types'

const students: Student[] = [
    { 
        name: "João" 
    },
    { 
        name: "Felipe" 
    },
    { 
        name: "Maria" 
    },
    { 
        name: "José" 
    },
    { 
        name: "Ana" 
    },
    { 
        name: "Carlos" 
    },
    { 
        name: "Pedro" 
    },
    { 
        name: "Paulo" 
    },
    { 
        name: "Lucas" 
    },
    { 
        name: "Mariana" 
    },
    { 
        name: "Juliana" 
    },
    { 
        name: "Fernanda" 
    },
    { 
        name: "Rafael" 
    },
    { 
        name: "Ricardo" 
    },
    { 
        name: "Jorge" 
    },
    { 
        name: "Miguel" 
    }
]

const rows: Row[] = [
    {
        rowNumber: 1,
        rowSize: 5,
        studentsInRow: queue.create(5)
    },
    {
        rowNumber: 2,
        rowSize: 5,
        studentsInRow: queue.create(5)
    },
    {
        rowNumber: 3,
        rowSize: 5,
        studentsInRow: queue.create(5)
    },
    {
        rowNumber: 4,
        rowSize: 5,
        studentsInRow: queue.create(5)
    },
    {
        rowNumber: 5,
        rowSize: 5,
        studentsInRow: queue.create(5)
    },
]

//Puts students in rows
function queueStudents (students: Student[], rows: Row[]){
    rows.forEach((row) =>{
        for(let i = 0; i < row.rowSize; ++i){
            if(students[0] !== undefined){
                row.studentsInRow[i] = students[0];
                queue.dequeue(students);
            }
        }
    })
    console.log("As suas fileiras ficaram assim:");
    console.log(rows);
}

queueStudents(students, rows)

//Remove students from the rows
function dequeueStudents(rows: Row[]){
    rows.forEach((row) =>{
        console.log(`Fileira ${row.rowNumber}`);
        
        for(let i = 0; i < row.rowSize; ++i){
            if(row.studentsInRow[0] !== undefined){
                console.log(`${row.studentsInRow[0].name} se levantou da cadeira ${i + 1}`);
                console.log(`Até mais ${row.studentsInRow[0].name}!`);
                console.log("---------------------------------------------------------");
                
                queue.dequeue(row.studentsInRow)
            }
            
        }
    })
}

dequeueStudents(rows)

console.log(rows);