document.addEventListener("DOMContentLoaded", () => {
    const downloadBtns = document.querySelectorAll(".downloadCV");
    const filePath = "assets/pdf/Krishna_DevOps_Software_Engineer_Resume.pdf";
    const fileName = "Krishna_DevOps_Software_Engineer_4_Years_Exp_Resume_krishnakumar.2015123@gmail.com.pdf";

    downloadBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Step 1: Prevent the default action. The default action would be:
            // 1. Open new tab (due to target="_blank")
            // 2. Do NOT download (since the 'download' attribute is missing on the HTML link)
            e.preventDefault();

            // Step 2: Open the file in a new tab (The HTML target="_blank" handles this if we don't prevent default,
            // but we'll use window.open() here for explicit control if needed, though it's often better to let the
            // browser handle the first part for better new-tab handling).

            // Use window.open() for the new tab.
            window.open(filePath, '_blank');

            // Step 3: Trigger the download immediately using a more reliable technique
            // like creating a temporary link with the 'download' attribute
            const tempLink = document.createElement("a");
            tempLink.href = filePath;
            tempLink.download = fileName; // IMPORTANT: This triggers the download prompt
            
            // Append and click the link. It's best to do this *after* the window.open()
            // to ensure the new tab is initiated first, but without a timeout.
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            
            // NOTE: If the simple click() is still blocked, you can't reliably force both
            // a new tab AND a download on a single click without user settings interference.
            // The method below is the only way to reliably separate these two actions.
        });
    });
});
