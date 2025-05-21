function openWebsite() {
  const input = document.getElementById("siteInput").value.toLowerCase();

  if (input === "instagram") {
    window.open("https://www.instagram.com", "_blank");
  } else if (input === "facebook") {
    window.open("https://www.facebook.com", "_blank");
  } else if (input === "google") {
    window.open("https://www.google.com", "_blank");
  } else {
    alert("Website not recognized. Try: instagram, facebook, or google.");
  }
}
