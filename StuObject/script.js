// Constructor function for Student details

function Student(name, roll_no, classInfo, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classInfo = classInfo;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    
    this.printTop3Subjects = function () {
    
        let sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });

    
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(sortedSubjects[i]);
        }
    };

    
    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log("| Name     -", this.name);
        console.log("| Roll no. -", this.roll_no);
        console.log("| Class    -", this.classInfo);
        console.log("| Section  -", this.section);

        
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  -`, this.marks_of_5_subjects[subject]);
        }

    
        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
        let percentage = (totalMarks / 500) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}


let student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

student1.printTop3Subjects();
console.log(); 
student1.printReportCard();
