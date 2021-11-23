export const GetParams = (quiry) => {

    if (quiry) {
        const quiryString = quiry.split("?")[1];
        if (quiryString.length > 0) {
            const params = quiryString.split("&");
            const paramObj = {};
            params.forEach(element => {
                const keyValue = element.split("=");
                paramObj[keyValue[0]] = keyValue[1];
            });

            return paramObj
        }

    }

    return {};
}