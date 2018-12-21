define({ "api": [
  {
    "type": "get",
    "url": "/v1/users/checkUsername/:username",
    "title": "检查用户名是否可用",
    "description": "<p>检查用户名是否可用</p>",
    "name": "checkUsername",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>要检查的用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"succMsg\": \"用户名可用!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/checkUsername/:username"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "get",
    "url": "/v1/users/getVCode",
    "title": "获取验证码",
    "description": "<p>获取验证码</p>",
    "name": "getVCode",
    "group": "1_Users_Sign",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "svg",
            "optional": false,
            "field": "svg",
            "description": "<p>图片验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"50\" viewBox=\"0,0,100,50\"><path d=\"M1 39 C54 38,32 41,94 30\" stroke=\"#444\" fill=\"none\"/><path d=\"M9 37 C42 8,42 36,94 18\" stroke=\"#222\" fill=\"none\"/></svg>",
          "type": "string"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getVCode"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "post",
    "url": "/v1/users/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"nickname\": \"ltc\",\n      \"username\": \"ltc\",\n      \"id\": 1,\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n  },\n  \"succMsg\": \"登录成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "post",
    "url": "/v1/users/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"ctime\": \"2018-12-14 21:27:18\",\n      \"nickname\": \"ltc\",\n      \"username\": \"ltc\",\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n      \"id\": 1\n  },\n  \"succMsg\": \"注册成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "get",
    "url": "/v1/users/getUserInfo",
    "title": "获取当前登录的用户信息 (需要token)",
    "description": "<p>获取当前登录的用户信息</p>",
    "name": "getUserInfo",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": {\n     \"id\": 33,\n     \"nickname\": \"ltc\",\n     \"username\": \"ltc\",\n     \"mobile\": \"13888888888\",\n     \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n },\n \"succMsg\": \"获取用户信息成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getUserInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/updatePassword",
    "title": "修改密码 (需要token)",
    "description": "<p>修改密码</p>",
    "name": "updatePassword",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"succMsg\": \"修改密码成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updatePassword"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/updateUserInfo",
    "title": "修改个人信息 (需要token)",
    "description": "<p>修改个人信息</p>",
    "name": "updateUserInfo",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"id\": 1,\n      \"nickname\": \"ltc\",\n      \"username\": \"ltc\",\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n  },\n  \"succMsg\": \"用户信息修改成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updateUserInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/addReceiverAddress",
    "title": "添加收货人信息 (需要token)",
    "description": "<p>添加收货人信息</p>",
    "name": "addReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detailed_address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>添加的收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  {\n      \"id\": 1,\n      \"receiver_name\": \"传智人\",\n      \"mobile\": \"13838383838\",\n      \"postcode\": \"430000\",\n      \"province\": \"湖北省\",\n      \"city\": \"武汉市\",\n      \"area\": \"洪山区\",\n      \"detailed_address\": \"汤逊湖北路长城科技园6栋知乐楼\",\n      \"user_id\": 1\n  },\n  \"succMsg\": \"添加收货人成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/addReceiverAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "get",
    "url": "/v1/users/deleteReceiverAddress/:id",
    "title": "删除收货人信息 (需要token)",
    "description": "<p>删除收货人信息</p>",
    "name": "deleteReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>收货人id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": null,\n \"succMsg\": \"删除收货人成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/deleteReceiverAddress/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "get",
    "url": "/v1/users/getReceiverAddress",
    "title": "获取所有收货人信息 (需要token)",
    "description": "<p>获取所有收货人信息</p>",
    "name": "getReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>所有收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": [\n      {\n          \"id\": 2,\n          \"receiver_name\": \"传智大法好\",\n          \"mobile\": \"13030303030\",\n          \"postcode\": \"430070\",\n          \"province\": \"湖北省\",\n          \"city\": \"武汉市\",\n          \"area\": \"东湖高新区\",\n          \"detailed_address\": \"金融港B15栋\"\n      }\n  ],\n \"succMsg\": \"获取收货人列表成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getReceiverAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "post",
    "url": "/v1/users/updateReceiverAddress/:id",
    "title": "修改收货人信息 (需要token)",
    "description": "<p>修改收货人信息</p>",
    "name": "updateReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "detailed_address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>修改的收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  {\n      \"id\": 1,\n      \"receiver_name\": \"传智人\",\n      \"mobile\": \"13838383838\",\n      \"postcode\": \"430000\",\n      \"province\": \"湖北省\",\n      \"city\": \"武汉市\",\n      \"area\": \"洪山区\",\n      \"detailed_address\": \"汤逊湖北路长城科技园6栋知乐楼\",\n      \"user_id\": 1\n  },\n  \"succMsg\": \"修改收货人成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updateReceiverAddress/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "get",
    "url": "/v1/news/getCommentList/:id",
    "title": "获取评论列表",
    "description": "<p>获取评论列表</p>",
    "name": "getCommentList",
    "group": "4_News_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>评论列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": [\n        {\n            \"id\": 1,\n            \"comment\": \"这个手机真的太赞了!\",\n            \"news_id\": 1\n        }\n     ],\n  \"succMsg\": \"获取新闻列表数据成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/getCommentList/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  },
  {
    "type": "get",
    "url": "/v1/news/getNewsCategories",
    "title": "获取新闻分类列表",
    "description": "<p>获取新闻分类列表</p>",
    "name": "getNewsCategories",
    "group": "4_News_Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>分类列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  [\n      {\n          \"id\": 1,\n          \"name\": \"精选\"\n      },\n      {\n          \"id\": 2,\n          \"name\": \"手机\"\n      },\n      {\n          \"id\": 3,\n          \"name\": \"数码\"\n      },\n      {\n          \"id\": 4,\n          \"name\": \"汽车\"\n      },\n      {\n          \"id\": 5,\n          \"name\": \"运动\"\n      },\n      {\n          \"id\": 6,\n          \"name\": \"型男\"\n      }\n   ],\n  \"succMsg\": \"获取新闻分类列表成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/getNewsCategories"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  },
  {
    "type": "get",
    "url": "/v1/news/getNewsInfo/:id",
    "title": "获取新闻详情",
    "description": "<p>获取新闻详情</p>",
    "name": "getNewsInfo",
    "group": "4_News_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>分类列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  {\n        \"id\": 1,\n        \"title\": \"华为旗舰从4199到800也没人买？用户：老余贼尴尬！\",\n        \"icon\": \"https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/7963/22/8242/69293/5c0b8ed6Eece81a99/826842f8f0dbe29d.jpg!q70.jpg\",\n        \"description\": \"华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。\",\n        \"views\": \"<div class=\\\"_3DxVSWjoqsghQdmNPYtFxK _2RXg7l_BWEMqTnH7z_3eXh\\\"><div class=\\\"_6KXjmZXt4URp4NonrOWFB\\\"><div class=\\\"_2HOCMwa4f5nu5ghetrumiN\\\"><div class=\\\"_2CD7_2MZBYElpXw5FMiwuK\\\"><h3 clstag=\\\"newstxt|main_a\\\">华为旗舰从4199到800也没人买？用户：老余贼尴尬！</h3></div><div class=\\\"undefined\\\"><div class=\\\"undefined\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM zG7SQS_t1_Jg1IV2xtbo_\\\"><img src=\\\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\"></div><div class=\\\"_3Z3585d03aL1refvDecItG\\\">MrSix</div></div></div></div></div><div class=\\\"yCtYoR9aaUJ6gLLeZpGlr\\\"><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c01\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">都说从前没钱买华为，现在还是没钱买华为，因为现在的华为旗舰确实变贵了。华为从一开始走的就是高端路线，针对的目标用户是高端商务人群，所以手机一开始就不算是很便宜，现在质量性能和外观都提升了，高端品牌有溢价也是正常的。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c02\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">虽然现在的华为手机变贵了，但销量上并不少，可见除了目标用户，其他的很多消费者也都认可了华为。对溢价的宽容是因为华为的旗舰机性能确实强，质量对得起价格，比如今年的Mate20系列，还有P20系列，在性能配置和外观设计方面都是顶级旗舰的水准。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c03\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">但凡事总有例外，华为的旗舰也不是每一款都物有所值，也不是每一款消费者都能容忍它的高价，比如在2015年的9月份上市的华为MateS。这款手机的上市价是4199元，但是现在跌到了949元，但是尽管跌到了百元机的价位，但是却依然没人乐意买了用。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c04\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">华为MateS搭载的是麒麟935处理器，3+64G内存醋和，采用的是5.5英寸的2.5D弧面显示屏，外观上还是以前华为旗舰的风格，满满的商务风。另外，这款手机在拍照功能上采用的是前置800万，后置1300万单摄，虽然不强，但是对于当时来讲还算不错，这款手机还采用了升级版指纹识别，解锁更快。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c05\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">这款手机在当时算是不错的，但是现在的华为不是三年前的华为能比的，不管是品牌影响力还是手机的知名度，4199元的价格确实有点高了。这款手机的定价让它成为了华为最尴尬的一款旗舰，15年的时候正是iPhone 6sP开售，两种高端品牌一对比，消费者肯定会倾向于苹果手机一些。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c06\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">很多网友对于这款手机的评价也是一针见血。当时的华为手机是支撑不起这么高的定价的，买的人数可想而知，再看看同期上市的iPhone 6sP，现在的售价还在3000左右，就知道当年的华为手机和苹果差距有多大了，虽然现在已经缩小甚至赶超，但华为还需要再接再厉。</p></div></div>\"\n     },\n  \"succMsg\": \"获取新闻详情成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/getNewsInfo/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  },
  {
    "type": "get",
    "url": "/v1/news/getNewsList",
    "title": "获取新闻列表信息",
    "description": "<p>获取新闻列表信息</p>",
    "name": "getNewsList",
    "group": "4_News_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索关键字,不传表示获取所有</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cate",
            "description": "<p>分类id,不传表示获取所有新闻,权重高于keys,如果传入cate则不会进行搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"news\": [\n          {\n              \"id\": 4,\n              \"title\": \"Air Jordan 33开箱评测\",\n              \"icon\": \"https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/16507/37/1544/110289/5c1375b3Ed5618e9d/9b7c529ff53205f7.jpg!q70.jpg\",\n              \"description\": \"AIR JORDAN正代系列近两年一直走复古路线，31代和32代分别添加1代和2代设计元素，而当33代推出时大家第一时间是比较蒙圈的，因为设计确实相当超前。采用了*FastFit 技术，简单地拉起位于鞋面的扣环，便会带动系统收紧缆线，实现从脚踝到前掌的360度全方位锁定。我们来看看这款鞋的具体细节。\",\n              \"views\": 0\n         }\n     ],\n     \"totalCount\": 3\n  },\n  \"succMsg\": \"获取新闻列表数据成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/getNewsList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  },
  {
    "type": "post",
    "url": "/v1/news/postComment/:id",
    "title": "发表评论",
    "description": "<p>发表评论</p>",
    "name": "postComment",
    "group": "4_News_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"succMsg\": \"发表评论成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/postComment/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  },
  {
    "type": "get",
    "url": "/v1/goods/getGoodsCategories",
    "title": "获取商品一级分类列表信息",
    "description": "<p>获取商品一级分类列表信息</p>",
    "name": "getGoodsCategories",
    "group": "5_Goods_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>分类数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n      {\n          \"id\": 1,\n          \"name\": \"婴童\"\n      },\n      {\n          \"id\": 2,\n          \"name\": \"女士\"\n      },\n      {\n          \"id\": 3,\n          \"name\": \"家居\"\n      },\n      {\n          \"id\": 4,\n          \"name\": \"男士\"\n      }\n    ],\n    \"succMsg\": \"获取商品一级分类列表数据成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/goods/getGoodsCategories"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/goods.js",
    "groupTitle": "5_Goods_Category"
  },
  {
    "type": "get",
    "url": "/v1/goods/getGoodsSubCategories",
    "title": "获取商品所有二级分类列表信息",
    "description": "<p>获取商品所有二级分类列表信息</p>",
    "name": "getGoodsSubCategories",
    "group": "5_Goods_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>分类数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n      \"cates\": [\n        {\n            \"id\": 5,\n            \"name\": \"婴童护理\"\n        },\n        {\n            \"id\": 6,\n            \"name\": \"婴童卫浴\"\n        },\n        {\n            \"id\": 7,\n            \"name\": \"婴童床品\"\n        },\n        {\n            \"id\": 8,\n            \"name\": \"婴童服装(0-1岁)\"\n        },\n        {\n            \"id\": 9,\n            \"name\": \"婴童服装(1-4岁)\"\n        }\n      ],\n      \"totalCount\": 20\n    },\n    \"succMsg\": \"获取商品所有二级分类数据成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/goods/getGoodsSubCategories"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/goods.js",
    "groupTitle": "5_Goods_Category"
  },
  {
    "type": "get",
    "url": "/v1/goods/getGoodsSubCategories/:id",
    "title": "获取指定的二级分类列表信息",
    "description": "<p>获取指定的二级分类列表信息</p>",
    "name": "getGoodsSubCategoriesById",
    "group": "5_Goods_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>一级分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>分类列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n      {\n          \"id\": 5,\n          \"name\": \"婴童护理\"\n      },\n      {\n          \"id\": 6,\n          \"name\": \"婴童卫浴\"\n      },\n      {\n          \"id\": 7,\n          \"name\": \"婴童床品\"\n      },\n      {\n          \"id\": 8,\n          \"name\": \"婴童服装(0-1岁)\"\n      },\n      {\n          \"id\": 9,\n          \"name\": \"婴童服装(1-4岁)\"\n      },\n      {\n          \"id\": 10,\n          \"name\": \"婴童服装(4岁以上) \"\n      },\n      {\n          \"id\": 11,\n          \"name\": \"婴童服饰\"\n      }\n    ],\n    \"succMsg\": \"获取商品分类数据成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/goods/getGoodsSubCategories/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/goods.js",
    "groupTitle": "5_Goods_Category"
  },
  {
    "type": "get",
    "url": "/v1/goods/getGoodsInfo/:id",
    "title": "获取商品详情",
    "description": "<p>获取商品详情</p>",
    "name": "getGoodsInfo",
    "group": "6_Goods_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>根据商品id获取商品详细信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>商品列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n      \"id\": 1,\n      \"name\": \"婴儿纱布夹棉侧开睡袋90x58cm， 1条装\",\n      \"description\": \"双层纱布面料，中间100%棉填充，亲肤保暖；袖子可拆卸，伸展更自由。\",\n      \"discount_info\": \"【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）\",\n      \"content\": \"<div class=\\\"content\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"script-append\\\">\\r\\n\\t\\t\\t\\t\\t<script src=\\\"https://res.purcotton.com//mres/res/mall/js/commodity/commodity_790.js\\\"></script><div><img class=\\\"goods-notice\\\" style=\\\"vertical-align:middle;\\\" src=\\\"https://res.purcotton.com/base/images/goods-notice-pc.jpg?v=201802110943\\\"></div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<!-- mc上传商品的具体信息 -->\\r\\n\\t\\t\\t\\t<div class=\\\"upload\\\">\\r\\n\\t\\t\\t\\t\\t<p>\\r\\n\\t<img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/E63CD5AC361A9B15CDC6B5DE382E5DD9.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/645834B99E2C16BBF6642E9BFA86B3DE.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/AC0024704E484B28C897B6A0CFE83199.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2F6C7281DB84924802D07A0BBDE9D55A.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/37BD2AEADB8B6F842BD6263C3F089789.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/056DC542CE9505A62880BEDE009CDDA7.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/8E311DBC3E38A89FAD273EE83244F928.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/16AD3FB6F8978B6DFAFEB75E9D131436.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/27586CF62EBBF9AB6191F1C96D8C7892.jpg\\\"><img alt=\\\"\\\" src=\\\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2CFA25A9266FF17B2F0FB2159A168931.jpg\\\"></p>\\r\\n\\r\\n\\t\\t\\t\\t</div><!-- upload end -->\\r\\n\\t\\t\\t</div>\",\n      \"price\": \"398\",\n      \"sale_price\": \"398\",\n      \"stock\": 1230,\n      \"sale_count\": 2360,\n      \"ctime\": \"2018-12-19 18:30:00\",\n      \"color\": \"星际呦呦,森林乐章,绿底白树\",\n      \"size\": null,\n      \"small_img\": null,\n      \"big_img\": null\n    },\n    \"succMsg\": \"获取商品详情成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/goods/getGoodsInfo/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/goods.js",
    "groupTitle": "6_Goods_Info"
  },
  {
    "type": "get",
    "url": "/v1/goods/getGoodsList",
    "title": "获取商品列表信息",
    "description": "<p>获取商品列表信息</p>",
    "name": "getGoodsList",
    "group": "6_Goods_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "cateId",
            "description": "<p>根据分类id获取分类商品列表信息</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>商品列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n      \"goods\": [\n        {\n          \"id\": 1,\n          \"name\": \"婴儿纱布夹棉侧开睡袋90x58cm， 1条装\",\n          \"cover_img\": \"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/10000001_00000695/06FF87611C685BC71FA2C921058564CC.jpg_350x350.jpg\",\n          \"description\": \"双层纱布面料，中间100%棉填充，亲肤保暖；袖子可拆卸，伸展更自由。\",\n          \"discount_info\": \"【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）\",\n          \"price\": \"398\",\n          \"sale_price\": \"398\",\n          \"kucun\": 1230,\n          \"sale_count\": 2360,\n          \"ctime\": \"2018-12-19 18:30:00\"\n        },\n        {\n          \"id\": 2,\n          \"name\": \"幼儿纱布床品7件套件（带被芯）幼儿床适用， 1套装\",\n          \"cover_img\": \"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/62C44938FF4B0D57DB31EFEC869AF7C5.jpg_350x350.jpg\",\n          \"description\": \"透气-优质纱布面料， 舒适透气， 让宝宝享受高质量睡眠。\",\n          \"discount_info\": \"【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）\",\n          \"price\": \"1568\",\n          \"sale_price\": \"1019.2\",\n          \"kucun\": 1020,\n          \"sale_count\": 2323,\n          \"ctime\": \"2018-12-18 18:30:00\"\n        },\n        {\n          \"id\": 4,\n          \"name\": \"盒装水洗纱布面巾25x50-5P,3片/盒(水洗后成型尺寸)\",\n          \"cover_img\": \"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/10000001_00000607/3C9E19B7D6BA02964C19E6476E79FFD9.jpg_350x350.jpg\",\n          \"description\": \"纯棉5层纱布吸水迅速 易洗易干\",\n          \"discount_info\": \"【满折】棉苗会员正价商品92折，棉桃会员88折，棉花会员85折【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）\",\n          \"price\": \"98\",\n          \"sale_price\": \"98\",\n          \"kucun\": 0,\n          \"sale_count\": 4998,\n          \"ctime\": \"2018-12-20 18:30:00\"\n        }\n      ],\n      \"totalCount\": 3\n    },\n    \"succMsg\": \"获取商品列表成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/goods/getGoodsList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/goods.js",
    "groupTitle": "6_Goods_Info"
  },
  {
    "type": "get",
    "url": "/v1/cart/deleteGoodsFromCart/:id",
    "title": "删除购物车中的商品(需要token)",
    "description": "<p>删除购物车中的商品</p>",
    "name": "deleteGoodsFromCart",
    "group": "7_Shopping_Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>指定要删除的商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": null,\n    \"succMsg\": \"删除购物车商品成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/cart/deleteGoodsFromCart/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/cart.js",
    "groupTitle": "7_Shopping_Cart"
  },
  {
    "type": "get",
    "url": "/v1/cart/getGoodsFromCart",
    "title": "获取当前用户的购物车信息(需要token)",
    "description": "<p>获取当前用户的购物车信息</p>",
    "name": "getGoodsFromCart",
    "group": "7_Shopping_Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>商品列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": null,\n    \"succMsg\": \"删除购物车商品成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/cart/getGoodsFromCart"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/cart.js",
    "groupTitle": "7_Shopping_Cart"
  },
  {
    "type": "post",
    "url": "/v1/cart/postGoodsToCart/:id",
    "title": "添加商品到购物车(需要token)",
    "description": "<p>添加商品到购物车</p>",
    "name": "postGoodsToCart",
    "group": "7_Shopping_Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>将指定id的商品添加到购物车</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "count",
            "description": "<p>要添加到购物车的商品数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"data\": null,\n    \"succMsg\": \"添加购物车成功!\",\n    \"errMsg\": null\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/cart/postGoodsToCart/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/cart.js",
    "groupTitle": "7_Shopping_Cart"
  }
] });
