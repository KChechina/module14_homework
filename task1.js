const xmlString = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
</list>`;

function parseXML(strXML) {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(strXML, "text/xml");
    const studentNodes = xmlDOM.querySelectorAll("student");
    const list = []

    studentNodes.forEach((element) => list.push({
        name: `${element.querySelector("first").textContent} ${element.querySelector("second").textContent}`,
        age: Number(element.querySelector("age").textContent),
        prof: element.querySelector("prof").textContent,
        lang: element.querySelector("name").getAttribute("lang")
    }));
    return {list: list}
}

console.log(parseXML(xmlString))
