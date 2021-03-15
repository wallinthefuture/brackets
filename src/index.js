module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;

    let strLength = Math.floor(str.length / 2);
    let bracketsLength = bracketsConfig.length;

    for (let pos = 0; pos < strLength; pos++) {
        for (let config = 0; config < bracketsLength; config++) {
            let strConfig = bracketsConfig[config].join("");
            str = str.replace(strConfig, "");
        }
    }

    if (str.length > 0) return false;
    else return true;
};
