exports.response = function (req, res) {
  return {
    "code": "0",
    "msg": "OK",
    "resultData": {
      "page": {
        "pageSize": 100,
        "curPageNum": 2,
        "totalPageNum": 3,
        "totalRecordNum": 7150
      },
      "resultList": [
        {
          "id": "666600983047",
          "name": "孙伟斌孙",
          "money": "1000",
          "date": "2015/03/27"
        },
        {
          "id": "666600983048",
          "name": "孙伟斌孙",
          "money": "1000",
          "date": "2015/03/27"
        },
        {
          "id": "666600983049",
          "name": "孙伟斌孙",
          "money": "1000",
          "date": "2015/03/27"
        }
      ]
    }
  } 
}
