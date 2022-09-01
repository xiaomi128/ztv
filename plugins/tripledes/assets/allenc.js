function hide_pwd() { $("#p_div").hide(); }
function show_pwd() { $("#p_div").show(); }

function hashecjson(type) {
    try {
        switch (type) {
            case "SHA1":
                hide_pwd();
                $("#result").val(CryptoJS.SHA1($("#source").val()));
                break;
            case "SHA224":
                hide_pwd();
                $("#result").val(CryptoJS.SHA224($("#source").val()));
                break;
            case "SHA256":
                hide_pwd();
                $("#result").val(CryptoJS.SHA256($("#source").val()));
                break;
            case "SHA384":
                hide_pwd();
                $("#result").val(CryptoJS.SHA384($("#source").val()));
                break;
            case "SHA512":
                hide_pwd();
                $("#result").val(CryptoJS.SHA512($("#source").val()));
                break;
            case "MD5":
                hide_pwd();
                $("#result").val(CryptoJS.MD5($("#source").val()));
                break;
            case "HmacSHA1":
                show_pwd();
                $("#result").val(CryptoJS.HmacSHA1($("#source").val(), $("#pwd").val()));
                break;
            case "HmacSHA224":
                show_pwd();
                $("#result").val(CryptoJS.HmacSHA224($("#source").val(), $("#pwd").val()));
                break;
            case "HmacSHA256":
                show_pwd();
                $("#result").val(CryptoJS.HmacSHA256($("#source").val(), $("#pwd").val()));
                break;
            case "HmacSHA384":
                show_pwd();
                $("#result").val(CryptoJS.HmacSHA384($("#source").val(), $("#pwd").val()));
                break;
            case "HmacSHA512":
                show_pwd();
                $("#result").val(CryptoJS.HmacSHA512($("#source").val(), $("#pwd").val()));
                break;
            case "HmacMD5":
                show_pwd();
                $("#result").val(CryptoJS.HmacMD5($("#source").val(), $("#pwd").val()));
                break;
            case "base64加密":
                hide_pwd();
                var str = CryptoJS.enc.Utf8.parse($("#source").val());
                $("#result").val(CryptoJS.enc.Base64.stringify(str));
                break;
            case "base64解密":
                hide_pwd();
                $("#result").val(CryptoJS.enc.Base64.parse($("#source").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "AES加密":
                show_pwd();
                $("#result").val(CryptoJS.AES.encrypt($("#source").val(), $("#pwd").val()));
                break;
            case "AES解密":
                show_pwd();
                $("#result").val(CryptoJS.AES.decrypt($("#source").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "DES加密":
                show_pwd();
                $("#result").val(CryptoJS.DES.encrypt($("#source").val(), $("#pwd").val()));
                break;
            case "DES解密":
                show_pwd();
                $("#result").val(CryptoJS.DES.decrypt($("#source").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "Rabbit加密":
                show_pwd();
                $("#result").val(CryptoJS.Rabbit.encrypt($("#source").val(), $("#pwd").val()));
                break;
            case "Rabbit解密":
                show_pwd();
                $("#result").val(CryptoJS.Rabbit.decrypt($("#source").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "RC4加密":
                show_pwd();
                $("#result").val(CryptoJS.RC4.encrypt($("#source").val(), $("#pwd").val()));
                break;
            case "RC4解密":
                show_pwd();
                $("#result").val(CryptoJS.RC4.decrypt($("#source").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "TripleDES加密":
                show_pwd();
                $("#result").val(CryptoJS.TripleDES.encrypt($("#source").val(), $("#pwd").val()));
                break;
            case "TripleDES解密":
                show_pwd();
                $("#result").val(CryptoJS.TripleDES.decrypt($("#source").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
                break;
            case "UrlEncode":
                hide_pwd();
                UrlEncode($("#source").val());
                break;
            case "UrlDecode":
                hide_pwd();
                UrlDecode($("#source").val());
                break;
        }
    }
    catch (err) {
        $("#result").val(err);
    }
}
function UrlEncode(str) {
    $.ajax({
        url: "/ApiTools/Common.ashx?action=UrlEncode",    //请求的url地址
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: { "str": str },    //参数值
        type: "GET",   //请求方式
        success: function (result) {
            //请求成功时处理
            $("#result").val(result.msg);
        }

    });
}
function UrlDecode(str) {
    $.ajax({
        url: "/ApiTools/Common.ashx?action=UrlDecode",    //请求的url地址
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        data: { "str": str },    //参数值
        type: "GET",   //请求方式
        success: function (result) {
            //请求成功时处理
            $("#result").val(result.msg);
        }

    });
}
function empty() {
    $("#result").val("");
    $("#source").val("");
    $("#source").select();
}