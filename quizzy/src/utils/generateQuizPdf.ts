import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}

export const generateQuizPDF = (quiz: Quiz) => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text(quiz.title, 14, 22);
  
  doc.setFontSize(12);
  doc.text(quiz.description, 14, 30);

  quiz.questions.forEach((q, i) => {
    doc.setFontSize(12);
    doc.text(`${i + 1}. ${q.question}`, 14, doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 40);

    autoTable(doc, {
      startY: doc.lastAutoTable ? doc.lastAutoTable.finalY + 15 : 45,
      body: q.options.map((opt, idx) => [
        opt,
        opt === q.correctAnswer ? "✅" : "",
      ]), 
      head: [["Option", "Correct"]],
      theme: "striped",
      styles: { fontSize: 10 },
    });
  });

  doc.save(`${quiz.title.replace(/\s+/g, "_")}_quiz.pdf`);
};
