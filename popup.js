document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("imgUrl");
  const btn = document.getElementById("changeBtn");

  chrome.storage.sync.get("bgUrl", (data) => {
    if (data.bgUrl) input.value = data.bgUrl;
  });

  btn.addEventListener("click", () => {
    const url = input.value.trim();
    if (!url) return;

    chrome.storage.sync.set({ bgUrl: url });

    // アクティブタブのページにメッセージを送る
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "changeBackground", url });
    });
  });
});
