document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadCV1");
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const filePath = "assets/pdf/Krishna_DevOps_Software_Engineer_3.4" +
      " Exp_Resume_krishnakumar.2015123@gmail.com.pdf";
    const link = document.createElement("a");
    link.download = "Krishna_Kumar_Resume.pdf";
    link.href = filePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});