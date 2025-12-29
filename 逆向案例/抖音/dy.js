require("./env")
require("./source")


window.bdms.init({
    "aid": 6383,
    "pageId": 6241,
    "paths": [
        "^/webcast/",
        "^/aweme/v1/",
        "^/aweme/v2/",
        "/v1/message/send",
        "^/live/",
        "^/captcha/",
        "^/ecom/"
    ],
    "boe": false,
    "ddrt": 8.5,
    "ic": 8.5
});

get_a_bogus = function(url){
    xhr = new XMLHttpRequest;
    xhr.bdmsInvokeList = [
        {"args": ["GET", url, true], func: function(){}},
        {"args": ["Accept","application/json, text/plain, */*"], func: function(){}},
        {"args": ["bd-ticket-guard-web-version", 2], func: function(){}},
        {"args": ["bd-ticket-guard-version", 2], func: function(){} },
        {"args": ["bd-ticket-guard-iteration-version", 1], func: function(){}}
    ]
    xhr.send(null)
    return window.a_bogus
}
console.log(get_a_bogus("https://www-hj.douyin.com/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAZ5V0l0Hj-tQ3TKBhPanueTa22jWR8FUiIuvvCGVSApk8nrvl21isXseO4w2jlbRS&max_cursor=1735009253000&locate_query=false&show_live_replay_strategy=1&need_time_list=0&time_list_query=0&whale_cut_token=&cut_version=1&count=18&publish_video_strategy_type=2&from_user_page=1&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&support_h265=1&support_dash=1&version_code=290100&version_name=29.1.0&cookie_enabled=true&screen_width=1560&screen_height=1040&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=135.0.0.0&browser_online=true&engine_name=Blink&engine_version=135.0.0.0&os_name=Windows&os_version=10&cpu_core_num=22&device_memory=8&platform=PC&downlink=1.5&effective_type=3g&round_trip_time=700&webid=7498200846791280182&uifid=4be83ecefa579a300714166db9e569bafd8689fc248d1e190e384db8df203b8169deec21a467df578b07e62b3c8e426987b83cfa8513b75258a086c0053628f2ce772c625f3571380da4bdbccc5dd5a5eb0746e734ddccebef8ff987cbec2e3892d7100bac685d24903675b463e077a576b3cce9911652a62f8d01e64ee54bdaec2657de345dbc10159e7aa75dc02f6e6448ed3149b5b13b1854411f011a6e98a40bed3cf293e0c706eb1f383a05dc7205088da883c8561d60b6b5af5d48cde7&verifyFp=verify_ma0iqxpk_8HgpD5nm_ZFf9_43jH_A9XV_kd81TMOtcmZv&fp=verify_ma0iqxpk_8HgpD5nm_ZFf9_43jH_A9XV_kd81TMOtcmZv&msToken=1Yndy9hUz02_13ouxY6L_Z2zk4SczzHmxv5vhdqzXSH1Talb_bXbv_UOBxtoQIvZFkbGWu2dGfsfwWTblAxsxCE2kI3c6LTSt26XGIV8H5VrhDdKsjWP2XPbAlo3IiywLjEr4WmKtr-2kMWxv476wLnBo0l84M5_A1jIOWm_L1wT"))




