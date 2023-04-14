const btn = document.querySelector("#btnGenerator");

btn.addEventListener("click", () => {
  const content = document.querySelector(".content");

  const options = {
    margin: [10, 10, 10, 10],
    fileName: "teste.pdf",
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };
  html2pdf().set(options).from(content).save();
});
