function solve(args) {
    "use strict";
    let selectors = [];
    let current = null;

    for (let line of args) {
        if (isSelector(line)) {
            line = line.trim();
            let selector = line.substr(0, line.length - 1)
                .trim()
                .replace(/\s\s+/, " ");

            if (current) {
                let between = " ";
                if (selector[0] === "$") {
                    between = "";
                    selector = selector.substr(1);
                }

                selector = `${current.selector}${between}${selector}`;
            }

            selectors.push({
                "selector": selector,
                "parent": current,
                "properties": []
            });

            current = selectors[selectors.length - 1];
        } else if (isPropertyValue(line)) {
            line = line.trim();
            line = line.substr(0, line.length - 1)
                .trim();

            let propertyValueArray = line.split(":")
                .map(x => x.trim());

            current.properties.push({
                "property": propertyValueArray[0],
                "value": propertyValueArray[1]
            });
        } else {
            current = current.parent;
        }
    }

    for (let selector of selectors) {
        console.log(`${selector.selector} {`);

        for (let propertyValuePair of selector.properties) {
            console.log(`  ${propertyValuePair.property}: ${propertyValuePair.value};`);
        }

        console.log("}");
    }

    function isSelector(line) {
        return 0 <= line.indexOf("{");
    }

    function isPropertyValue(line) {
        return 0 <= line.indexOf(":");
    }
}

module.exports = solve;