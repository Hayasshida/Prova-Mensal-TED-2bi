"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue = __importStar(require("./fila"));
const students = [
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
];
const rows = [
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
];
function queueStudents(students, rows) {
    rows.forEach((row) => {
        for (let i = 0; i < row.rowSize; ++i) {
            if (students[0] !== undefined) {
                row.studentsInRow[i] = students[0];
                queue.dequeue(students);
            }
        }
    });
    console.log("As suas fileiras ficaram assim:");
    console.log(rows);
}
queueStudents(students, rows);
function dequeueStudents(rows) {
    rows.forEach((row) => {
        console.log(`Fileira ${row.rowNumber}`);
        for (let i = 0; i < row.rowSize; ++i) {
            if (row.studentsInRow[0] !== undefined) {
                console.log(`${row.studentsInRow[0].name} se levantou da cadeira ${i + 1}`);
                console.log(`Até mais ${row.studentsInRow[0].name}!`);
                console.log("---------------------------------------------------------");
                queue.dequeue(row.studentsInRow);
            }
        }
    });
}
dequeueStudents(rows);
console.log(rows);
