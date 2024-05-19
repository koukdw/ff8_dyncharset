const charset_jp1C = require('./dyncharset.js');


function isEvenCharsetBiggerOrEqualOddCharset(a, b) {
    if(a.length >= b.length) {
        return true;
    }
    else {
        return false;
    }
}

function isCharsetLengthDifferenceLessEqualToOne(a, b) {
    if(Math.abs(a.length - b.length) <= 1) {
        return true;
    }
    else {
        return false;
    }
}


function testCharset() {
    for(let charset in charset_jp1C) {
        //console.log("processing charset ", charset);
        const evn_charset = charset_jp1C[charset][0];
        const odd_charset = charset_jp1C[charset][1];
        let result = isEvenCharsetBiggerOrEqualOddCharset(evn_charset, odd_charset);
        if(!result) {
            console.warn(`\x1b[34m[ODD BIGGER THAN EVEN] \x1b[32m${charset}_odd\x1b[0m length (\x1b[35m${odd_charset.length}\x1b[0m) is bigger than \x1b[32m${charset}_evn\x1b[0m length (\x1b[35m${evn_charset.length}\x1b[0m) ❌\x1b[0m`);
        }
        result = isCharsetLengthDifferenceLessEqualToOne(evn_charset, odd_charset);
        if(!result) {
            console.warn(`\x1b[34m[CHARSET LENGTH DIFFERENCE BIGGER THAN ONE]\x1b[0m ID: \x1b[32m${charset} \x1b[0mThe length difference between evn and odd charset is bigger than one (\x1b[35m${Math.abs(evn_charset.length - odd_charset.length)}\x1b[0m)❌\x1b[0m`);
        }
    }
}

testCharset();
