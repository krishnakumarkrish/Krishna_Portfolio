document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadCV");
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const filePath = "assets/pdf/Krishna_DevOps_Software_Engineer_3.4 Exp_Resume_krishnakumar.2015123@gmail.com.pdf";

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Krishna_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.open(filePath, "_blank");
  });
});
