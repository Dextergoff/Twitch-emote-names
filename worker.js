const url = "https://www.twitch.tv"

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onUpdated.addListener(async () => {
  const currtab = getCurrentTab()
  currtab.then(async function (tab) {
    if (tab.url.startsWith(url)) {
      await chrome.scripting.executeScript({
        files: ["reademotes.js"],
        target: { tabId: tab.id },
      });
    }
  })

});