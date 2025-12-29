from curl_cffi import requests

cookies = {}

headers = {}

params = {
    'appid': 'search-pc-java',
    'functionId': 'pc_search_s_new',
    'client': 'pc',
    'clientVersion': '1.0.0',
    't': '1746409630087',
    'body': '{"keyword":"手机","wq":"手机","stock":"1","pvid":"92045d20dbb447769ae537286166b213","isList":0,"page":"3","s":"57","click":"0","log_id":"1746409608150.6861","show_items":""}',
    'loginType': '3',
    'uuid': '143920055.1746364793174711823733.1746364793.1746371014.1746409581.4',
    'area': '4_48202_48363_0',
    'h5st': '20250505094711117;pww3zw9i3p2jqqh8;f06cc;tk03wc6961ca318nCurSiuRWrc5UpEeEHSzm5-D6gsqFihsWFuaBwq3mr99r_5HhJ802qbFFkjWU2AcimRvMjSO4u2tf;5bcd069833d3dad6d7c0e8b5153d6e2b;5.1;1746409630117;t6HsMOrU9pHU8u3iFJ7R0h7R3tHmOGLm_VImOuMsCmLiOGLmAh4WMusmk_Mm_eIi5OLhMRLiKpLi1SriMloh8m4WIRbiMh4W3iLi_WLmOGLm_VqTHlYV3lsmOGujMWIW3W4hKlIiJpIWNtrVIhLW9mYh8Wbi1qIh8eLW4u7WMuMgMiXW41YWLlsmOGuj_uMgMebRMlsmOGujMmLj92ch4xZVCJIVPZrUMuMgMWHmOuMsCmMa62KY8mLiIVoTilsm0mcT-dITNlHmOuMsCmMi72YUXlsm0mMV_lsmOGujxtsmkmrm0mci9aHWMusmOuMsCKrm0msi9aHWMusmOuMsCObjOGLm8qbRMlsmOusmk_MmWF6i3WIinxKc-BImOGLmBxoVApISMusmOuMsCurm0msg5lImOusmOGuj_uMgMSbRMlsmOusmk_sh7uMgMWbRMlsmOusmk_siOGLm5aHWMusmOuMsCurm0msh5lImOusmOGuj4irm0m8i5lImOusmOGujMWLj92siMuMgMqbRMlsmOusmk_siOGLmDRHmOusmOGuj5uMgMinTMusmOuMsCurm0msTMusmOuMsCurm0msV3lsmOusmkCnm0msVAZoR2ZImOuMsC6nmOGOmGxKZZRZdJF3cjRIYPdIUMuMgMmrSMusmOuMsztMgMunSMusmk_Mm6WrQOCrh42YUXt8g_2si9usZgt8S3xoVAJ4ZMuMgMqYR7lsmOG_Q;91845d75c000d4ca330b125055e1eeec',
    'x-api-eid-token': 'jdd03HLFE3WUQS4SDBSIF4XLI2VR55KYHLT4VW6HNFST6BVHZDWGUVKLCPEYSMPS7XHOLXACBE6KIHPL4WOUMNW3OUAYMUIAAAAMWTYPW7NAAAAAAC4QIMQZMJCBDO4X',
}

response = requests.get('https://api.m.jd.com/', params=params, cookies=cookies, headers=headers)
print(response)
print(response.text)