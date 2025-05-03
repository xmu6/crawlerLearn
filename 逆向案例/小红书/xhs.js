require('./env')
require('./source')

p = '/api/sns/web/v1/homefeed'
u = {
    "cursor_score": "",
    "num": 18,
    "refresh_type": 1,
    "note_index": 32,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.cosmetics_v3",
    "search_key": "",
    "need_num": 8,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}
function getInfo(p, u){
    return window._webmsxyw(p, u)
}
// console.log(window._webmsxyw(p, u))
