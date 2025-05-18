import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string; // Added explanation optional field
}

interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}

export const generateQuizPDF = (quiz: Quiz) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.setTextColor("#2563eb"); // blue-600
  doc.text(quiz.title, 14, 22);

  // Description
  doc.setFontSize(13);
  doc.setTextColor("#374151"); // gray-700
  doc.text(quiz.description, 14, 32);

  let currentY = 42; // start below description

  quiz.questions.forEach((q, i) => {
    // Question text
    doc.setFontSize(14);
    doc.setTextColor("#1e3a8a"); // blue-900
    const splitQuestion = doc.splitTextToSize(`${i + 1}. ${q.question}`, 180);
    doc.text(splitQuestion, 14, currentY);
    currentY += splitQuestion.length * 7 + 4;

    // Options table
    autoTable(doc, {
      startY: currentY,
      head: [["Options"]],
      body: q.options.map((opt) => [opt]),
      theme: "striped",
      styles: { fontSize: 12, cellPadding: 4 },
      headStyles: { fillColor: "#3b82f6", textColor: "#fff" },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        // update currentY after table draw
        currentY = data.cursor.y + 6;
      },
    });

    // Correct answer below options
    doc.setFontSize(13);
    doc.setTextColor("#059669"); // green-600
    doc.setFont("helvetica", "bold");
    const correctAnswerText = `Correct Answer: ${q.correctAnswer}`;
    const splitCorrect = doc.splitTextToSize(correctAnswerText, 180);
    doc.text(splitCorrect, 14, currentY);
    currentY += splitCorrect.length * 7 + 4;

    // Explanation (optional)
    if (q.explanation) {
      doc.setFontSize(12);
      doc.setTextColor("#4b5563"); // gray-600
      doc.setFont("helvetica", "normal");
      const explanationText = `Explanation: ${q.explanation}`;
      const splitExplanation = doc.splitTextToSize(explanationText, 180);
      doc.text(splitExplanation, 14, currentY);
      currentY += splitExplanation.length * 7 + 8;
    } else {
      currentY += 8; // space after question block if no explanation
    }

    // Add page if space is low
    if (currentY > 270 && i < quiz.questions.length - 1) {
      doc.addPage();
      currentY = 20;
    }
  });

  // Save PDF
  doc.save(`${quiz.title.replace(/\s+/g, "_")}_quiz.pdf`);
};
