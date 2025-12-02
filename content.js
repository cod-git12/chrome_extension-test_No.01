chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "changeBackground") {
    document.body.style.backgroundImage = `url('${msg.url}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
});

// ページ読み込み時に設定された背景を適用
chrome.storage.sync.get("bgUrl", (data) => {
  if (data.bgUrl) {
    document.body.style.backgroundImage = `url('${data.bgUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
});
