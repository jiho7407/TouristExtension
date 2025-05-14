function shouldSkip(node) {
    return ["SCRIPT", "STYLE", "TEXTAREA", "NOSCRIPT"].includes(node.parentNode?.nodeName);
}

function walk(node) {
    console.log(node);
    if (node.nodeType === Node.TEXT_NODE && !shouldSkip(node)) {
        const regex = /tourist/gi;
        if (regex.test(node.textContent)) {
            const span = document.createElement('span');
            span.innerHTML = node.textContent.replace(regex, (match) => {
                return `<span style="color:black;">t</span><span style="color:red;">ourist</span>`;
            });
            node.parentNode.replaceChild(span, node);
        }
    } else if(node.nodeType === Node.ELEMENT_NODE && !shouldSkip(node)) {
        node.childNodes.forEach(child => walk(child));
    }
}

function walk2(node) {
    if (node.nodeType === Node.TEXT_NODE && !shouldSkip(node)) {
        const regex = /도리/gi;
        if (regex.test(node.textContent)) {
            const span = document.createElement('span');
            span.innerHTML = node.textContent.replace(regex, (match) => {
                return `<span style="font-size:1.5em;">김도현</span>`;
            });
            node.parentNode.replaceChild(span, node);
        }
    } else if(node.nodeType === Node.ELEMENT_NODE && !shouldSkip(node)) {
        node.childNodes.forEach(child => walk2(child));
    }
}

walk(document.body);
walk2(document.body);