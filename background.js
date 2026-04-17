chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.type === "OPEN_CSS_POPUP") {
        const popupUrl = chrome.runtime.getURL(`popup.html?tabId=${sender.tab.id}`);

        chrome.windows.create({
            url: popupUrl,
            type: "popup",
            width: 500,
            height: 600
        });
    }
});