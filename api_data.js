define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/users/allIssues/:authToken",
    "title": "Get All Issues",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URl parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Issues Are listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              ProductImage:\"string\",\n              reporterName:\"string,\"\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersAllissuesAuthtoken"
  },
  {
    "type": "get",
    "url": "/api/v1/users/allusers/:authToken",
    "title": "Get All Users",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URl parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Users Are Listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersAllusersAuthtoken"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getmyIssue/:userId/:authToken",
    "title": "Get User Issue",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URl parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user passed as a URl parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Issues are listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetmyissueUseridAuthtoken"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getsingleIssue/:IssueId/:authToken",
    "title": "Get Single Issue",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URl parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a URl parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Successfully getting single Issue\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetsingleissueIssueidAuthtoken"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getwatcherlist",
    "title": "Get Watcher List",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Watchers Are Listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersGetwatcherlist"
  },
  {
    "type": "post",
    "url": "/api/v1/users/addwatcher",
    "title": "Add Watcher List",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"You Are Added Watcher List\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersAddwatcher"
  },
  {
    "type": "post",
    "url": "/api/v1/users/comment",
    "title": "Comment Issue",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Comment Is Added successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              reporterName:\"string\",\n              ProductImage:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersComment"
  },
  {
    "type": "post",
    "url": "/api/v1/users/createIssue/:authToken",
    "title": "Create Issue",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueTitle",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductImage",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Assignee",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Issue is Registered\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              IssueId:\"string\"\n              IssueTitle:\"string\",\n              description:\"string\",\n              ProductImage:\"string\",\n              reporterName:\"string\",\n              status:\"string\",\n              Assignee:\"string\",\n              watchers:\"array\",\n              comments:\"array\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersCreateissueAuthtoken"
  },
  {
    "type": "post",
    "url": "/api/v1/users/deleteIssue",
    "title": "Delete Issue",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Issue Is Deleted successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDeleteissue"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetcode",
    "title": "Password Reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Reset Code send successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetcode"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "Password Reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Newpassword",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Your Password Is Reset Successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signin",
    "title": "Signin",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signin successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              email:\"string\",\n              userId:\"string\",\n              mobileNumbernumber:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signup successfully\",\n \"status\":200,\n \"data\": [\n           {\n           firstName:\"string\",\n           lastName:\"string\",\n           userId:\"string\",\n           mobileNumber:\"number\"\n           }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500/403/400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/update/:IssueId/:authToken",
    "title": "Update Issue",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueTitle",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductImage",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Assignee",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a url parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IssueId",
            "description": "<p>of the user passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Issue Is Updated successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersUpdateIssueidAuthtoken"
  }
] });
