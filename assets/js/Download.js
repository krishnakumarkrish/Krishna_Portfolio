document.addEventListener("DOMContentLoaded", () => {
    const downloadBtns = document.querySelectorAll(".downloadCV");
    const filePath = "assets/pdf/Krishna_DevOps_Software_Engineer_3.4 Exp_Resume_krishnakumar.2015123@gmail.com.pdf";
    const fileName = "Krishna_Kumar_M_CV.pdf"; // The name you want the downloaded file to have

    downloadBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Step 1: Prevent the default link action (which would only navigate to the PDF)
            e.preventDefault();

            // Step 2: Open the file in a new tab (This satisfies the 'open in next browser tab' requirement)
            window.open(filePath, '_blank');

            // Step 3: Wait a moment, then trigger the forced download (This satisfies the 'download to local' requirement)
            // We use a small delay (100ms) to ensure the new window command executes first.
            setTimeout(() => {
                const link = document.createElement("a");
                link.href = filePath;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 100);
        });
    });
});
