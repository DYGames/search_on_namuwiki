searchNamu = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://namu.wiki/w/" + query });
};
chrome.contextMenus.create({
    title: "나무위키에 '%s' 검색",
    contexts: ["selection"],
    onclick: searchNamu
});
