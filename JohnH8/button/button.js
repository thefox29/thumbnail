document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Show confirmation dialog
    const confirmation = confirm("Do you want to send this?");
    if (confirmation) {
        // Send data to Discord webhook
        fetch("https://discord.com/api/webhooks/1281958439928725536/a-nMS-guOzZUpqeIzcMpPjK1zug6Uep-gZzhRK7H2iES-qyGMbYxQZpIjKIfiS-PRAyd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `**New Form Submission**\n\n**Discord & YouTube Channel:** ${data.discordYoutube}\n**Thumbnail Title:** ${data.thumbnailTitle}\n**Video Description:** ${data.videoDescription}\n**Thumbnail Description:** ${data.thumbnailDescription}\n**Information about Background:** ${data.backgroundInfo}\n**How many Growtopians, what sets?:** ${data.growtopians}\n**Others:** ${data.others}`
            })
        }).then(response => {
            if (response.ok) {
                alert("Your submission has been sent successfully!");
                // Optionally, clear the form
                this.reset();
            } else {
                alert("There was an error sending your submission.");
            }
        }).catch(error => {
            alert("There was an error sending your submission.");
            console.error(error);
        });
    }
});
