const urlParams = new URLSearchParams(window.location.search);
const targetTabId = parseInt(urlParams.get('tabId'), 10);

if (isNaN(targetTabId)) {
    console.error("No tabId provided. Make sure to open this from the extension.");
}

self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        let workerPath = 'vs/editor/editor.worker.js';
        if (label === 'css' || label === 'scss' || label === 'less') {
            workerPath = 'vs/language/css/css.worker.js';
        }

        const workerUrl = chrome.runtime.getURL(workerPath);
        const blob = new Blob([`importScripts('${workerUrl}');`], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }
};

require.config({
    paths: {
        vs: chrome.runtime.getURL("vs")
    }
});

if (targetTabId) {
    chrome.tabs.sendMessage(targetTabId, { type: "GET_CURRENT_CSS" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("Error communicating with tab:", chrome.runtime.lastError.message);
            return;
        }

        const initialCSS = response && response.css ? response.css : "/* Custom CSS */";

        require(["vs/editor/editor.main"], function () {
            const editor = monaco.editor.create(document.getElementById("editor"), {
                value: initialCSS,
                language: "css",
                theme: "vs-dark",
                automaticLayout: true,
                minimap: { enabled: false }
            });

            // auto update on change
            editor.onDidChangeModelContent(() => {
                chrome.tabs.sendMessage(targetTabId, {
                    type: "UPDATE_CSS",
                    css: editor.getValue()
                });
            });
        });
    });
}
