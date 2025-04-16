import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(express.json({ limit: '50mb' })); // Increase the limit to 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get("/health",(req,res) => {
    res.send("Health");
})

// UAM Mockup
app.post("/api/v1/authen/login",(req,res) => {
    console.log(req.headers)
    console.log(req.body);
    switch(req.body.username){
        case "60P01001":
            res.status(200)
            res.json(
                {
                    "content": {
                        "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4MzU4OSwiaWF0IjoxNzQwMzgxNzg5LCJuYmYiOjE3NDAzODE3ODksInJvbGVzIjpbIk1ha2VyIl0sInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsInRydXN0Il0sImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiZ3JvdXBfaWQiOiJESVNUUiIsImZ1bGxOYW1lIjoi4LiZ4Liy4LiiIOC4k-C4seC4kCDguYDguKXguLTguKjguKfguLTguJfguKLguLIiLCJkZXBhcnRtZW50Ijoi4LmA4LiC4LiV4LiY4Li44Lij4LiB4Li04LiIIFNNRSDguILguJnguLLguJTguYDguKXguYfguIEg4Liq4Liy4LiC4Liy4Lig4Li54Lih4Li04Lig4Liy4LiEIDMwMSAo4Liq4Li44Lij4Liy4Lip4LiP4Lij4LmM4LiY4Liy4LiZ4Li1KSIsInVzZXJfbmFtZSI6IjYwUDAxMDAxIiwic3ViIjoiNjBQMDEwMDEiLCJqdGkiOiJjMTY0YTQyMy04NDNkLTQxMzUtYWVhYS0xOTViODJiMzViNzQifQ.EchYUVdkXx95RIFyNoft3CXduJwXNIAKa0ZcjkPuV9LNfmaQH6CJI__EWIq_oWJpR8adH84rgEEBPZ-WB_6CqTyOQBFZMKyw19Zhl8-T75gqLLdeA8tS3-YMryF_TR_JK0WNTzrth2oQnJ-XH2NfTe353XZdOyZrpkhBeyq7CQC5_KGoBzGl_1ImyuTxeCrtyLFeH9kzK8pSoWLrMFoNj-fBLx0wAIJN2bZy9M_ysthQcIvBEOPV8j8eM6ud8ta77-0zxpRtwvvnJjnSglYpJSxtzUzjRt6ZOg6IpFplq27eab3LyOKR49USqPAuQzjOPYQ0QwiHZvRxasn-nqju2Q",
                        "tokenType": "bearer",
                        "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4NTM4OSwiaWF0IjoxNzQwMzgxNzkwLCJuYmYiOjE3NDAzODE3OTAsImdyb3VwX2lkIjoiRElTVFIiLCJzdWIiOiI2MFAwMTAwMSIsImp0aSI6Ijk2YzYyNWU4LWE1OWEtNGZjMy05MDMyLWUwMGVjOWU2ODAyZiJ9.IUPPV2sJ84HmmJTJqSFY_wO3lBTsBkayuqvabf8ypfV-Rnzu_gd1aKueXy31ILxfnX6vFn565AHMJ_SApuU2yOwDIaywnrgSj7Smy2ldsmBo3YExwc7adN5oJQ9h7Sj0wTE2KNPQXdo6sI1bWaJe4yHlb9_gnEJXWnKz8FeB3SSoz11IHK7wrHlQpI6MnxA_jUAYNT_Ywc6wD3ntzYL1EOUgKUJxhvBkoIga_nsIs-lwWds9tykR-wpA05xTApqYXhWtcE8Mt7aua5GuvwhV6v6o4ar8pZWc6ymor4ZA83j4CFvWmerySD-WfuC3knjSp33CCb5jDXuXKftT7V5pig",
                        "expiresIn": 1800
                    },
                    "apiErrors": null,
                    "status": {
                        "code": "200",
                        "message": "Success",
                        "messageTH": "สำเร็จ",
                        "serverDateTime": "2025-02-24T14:23:10.516669+07:00",
                        "clientTransactionID": uuidv4(),
                        "serverTransactionID": uuidv4()
                    },
                    "httpStatus": "OK"
                }
                
            )
        break;
        case "50T01004":
            res.status(200)
            res.json(
                {
                    "content": {
                        "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4Mzc3MSwiaWF0IjoxNzQwMzgxOTcxLCJuYmYiOjE3NDAzODE5NzEsInJvbGVzIjpbIk1ha2VyIiwiQ2hlY2tlckEiLCJNYWtlciJdLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJ0cnVzdCJdLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImdyb3VwX2lkIjoiRElTVFIiLCJmdWxsTmFtZSI6IuC4meC4suC4oiDguJjguJnguJnguKPguLTguJnguJfguKPguYwg4LiI4Liy4Lij4Li44LiB4Li04LiI4LmE4Lie4Lio4Liy4LilIiwiZGVwYXJ0bWVudCI6IuC5gOC4guC4leC4mOC4uOC4o-C4geC4tOC4iCBTTUUg4LiC4LiZ4Liy4LiU4LmA4Lil4LmH4LiBIOC4quC4suC4guC4suC4oOC4ueC4oeC4tOC4oOC4suC4hCAzMDEgKOC4quC4uOC4o-C4suC4qeC4j-C4o-C5jOC4mOC4suC4meC4tSkiLCJ1c2VyX25hbWUiOiI1MFQwMTAwNCIsInN1YiI6IjUwVDAxMDA0IiwianRpIjoiMWI1YzNmYjgtMzU4ZC00N2YzLTgzYzgtMTRmN2RiNDg3NDE2In0.Q7D2GnFuiU4cEguaP13giUyBF6dnCH4bSvyymLxrPJ2faVVWGaV3HiEfqfAidmH788hCDXh7L_wlA7r-V6g2jobIJwJn1MG1AZ2mrAcUmT58fFEJDgskM4VCBO_nJEuoKcfFhQ2irSvcue_-KCpTwGueT5CvpHkoKey77DtqhT3HHKldRIPNkD1l3TMLI75nOfKt_RMrg__p8LkelzPKBmfq3XF1XJwK5CLIEXA7TJQcMLWaqO6n21t5rhw1K5cJoZkShdpetZXSKoumD0oO_zFqho8LZP8OXrqxn-oEEXEQiT8-rQe0p4DzL1IkCtTpcqD-oofqR2_lVUFH_TqhSg",
                        "tokenType": "bearer",
                        "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4NTU3MSwiaWF0IjoxNzQwMzgxOTcyLCJuYmYiOjE3NDAzODE5NzIsImdyb3VwX2lkIjoiRElTVFIiLCJzdWIiOiI1MFQwMTAwNCIsImp0aSI6ImZjNGRhMWI5LTRmNmUtNDVmZS1iMTkzLTRhZmZjNmFjMmYwNCJ9.XizcuYZ0LpXLcP64WQ9MBoH7mUqfKXqRgPnaXyi6Kgk9-haqlL206VRhFtw4QieNNE9jt99dyEkwYD3um69Ghb-x7Sf_putdUQonPc7w7opt9OCv7WHafWNRUvt2DBYRAhHtcvJvJNw9xsXhJQxzoTsM0nx2eNGGTcirqMq5c-OOLavtgXa_z5uU6j-nlKDFXND4c7OH9cZXwFUb0Jz824lQOjw6jIcH3YZQdkpJ58OLUU_2J15hw-HUPRasH_dSD1kZNIL8QLNDzzIosn88X-59YCpE12a0fhrfcOvLbS4ru-HlyjtyU4RI0izOGueGLsBsR5bvZtScYTUPAgCsRA",
                        "expiresIn": 1800
                    },
                    "apiErrors": null,
                    "status": {
                        "code": "200",
                        "message": "Success",
                        "messageTH": "สำเร็จ",
                        "serverDateTime": "2025-02-24T14:26:12.4413934+07:00",
                        "clientTransactionID": uuidv4(),
                        "serverTransactionID": uuidv4()
                    },
                    "httpStatus": "OK"
                }
                
            )
        break;
        case "60P02001":
            res.status(200)
            res.json(
                {
                    "content": {
                        "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4Mzg0OSwiaWF0IjoxNzQwMzgyMDQ5LCJuYmYiOjE3NDAzODIwNDksInJvbGVzIjpbIk1ha2VyIl0sInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsInRydXN0Il0sImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiZ3JvdXBfaWQiOiJESVNUUiIsImZ1bGxOYW1lIjoi4LiZ4Liy4LiiIOC4iOC4seC4geC4oyDguIjguLTguJXguKPguJjguLLguKPguLIiLCJkZXBhcnRtZW50Ijoi4LmA4LiC4LiV4LiY4Li44Lij4LiB4Li04LiIIFNNRSDguILguJnguLLguJTguYDguKXguYfguIEg4Liq4Liy4LiC4Liy4Lig4Li54Lih4Li04Lig4Liy4LiEIDMwMSAo4Liq4Li44Lij4Liy4Lip4LiP4Lij4LmM4LiY4Liy4LiZ4Li1KSIsInVzZXJfbmFtZSI6IjYwUDAyMDAxIiwic3ViIjoiNjBQMDIwMDEiLCJqdGkiOiIxMGQ4NGFlOS00NTFmLTRjNjEtOWVhYi1kZTUyOTRjOGFmYWYifQ.EjP2bWhw4Mpdf_sItz_0o7pnfZwAfsiP_Axu3aInZVIBOHiPkhiJ6OC86i5rbj8AQtjw8EaEWIVGX1h59uZMB1_VMC9rF9osbCoK6zGY5r6onxsMnAk8y2LRdxoBpF0T5mjlBsFHvb_mnts6n1c1jPPtHdQw48ZHV6ekLi6wMkQ9K9ihJS0r7vwpTt2ID6tqwOXxfKUFEHqpHNEaOdc46En9nhqph2w-i3VOB7bq0qBosnfF5ya4IwXMkKTaY7OB00_sIAUJGjbtqomn-pXvRnDxkCw2cMqwQy4VfKxB8nqbDi4fOxrFLkTFtkt4Kz-8uq0M6v46g4jUntF48LMMAQ",
                        "tokenType": "bearer",
                        "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpcHJvLXBhc3Nwb3J0LWFwcCIsImlzcyI6Imlwcm8tYWNjb3VudCIsImV4cCI6MTc0MDM4NTY0OSwiaWF0IjoxNzQwMzgyMDUwLCJuYmYiOjE3NDAzODIwNTAsImdyb3VwX2lkIjoiRElTVFIiLCJzdWIiOiI2MFAwMjAwMSIsImp0aSI6ImJkMjhhYmYyLTRhNTgtNDJiMC1iYjRiLWEzYzc0Y2NjNTg0YyJ9.lBABZRNC28eD2dR_KwDVSX_SKKUPB4du-9D3ocH4I7GM0IPATckzei6S1llfcKOV2kajsapCtD2aAavsk0B6rf-jOxQS-DgObUs72gqQXavipyIo2Lw210L5nq1WuJ7s0isaAyUi733MQEFmb6NRGUZfoYjSOr4WxObcXDfyoxRAuclwxgmZW1Q78lplJwMiEv4zBapjQ_YwOPG1DllOrcnDwmCeaw-FhtzRcVLfnrDACxiFc2Yd8EQGDAoTIySn37-JptrR0CN_AWak_0XDEBwKU-Wpa6I-aovmau0LwtKyDnvwjDAmGGcUccEsWduz5aAy1xsD0WnKNXkmof-Z4Q",
                        "expiresIn": 1800
                    },
                    "apiErrors": null,
                    "status": {
                        "code": "200",
                        "message": "Success",
                        "messageTH": "สำเร็จ",
                        "serverDateTime": "2025-02-24T14:27:30.4380197+07:00",
                        "clientTransactionID": uuidv4(),
                        "serverTransactionID": uuidv4()
                    },
                    "httpStatus": "OK"
                }
                    
            )
        break;
        case "400":
            res.status(400)
            res.json(
                {
                    "content": null,
                    "apiErrors": null,
                    "status": {
                        "code": "400",
                        "message": "Bad Request",
                        "messageTH": "Bad Request",
                        "serverDateTime": "2024-08-20T14:18:48.413856+07:00",
                        "clientTransactionID": uuidv4(),
                        "serverTransactionID": uuidv4()
                    },
                    "httpStatus": "Bad Request"
                }      
            )
        break;
        // Unauthorized
            case "401100001":
                res.status(401)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                            "code": "401100001",
                            "message": "login fail(AD)",
                            "messageTH": "เข้าสู่ระบบไม่สำเร็จ(Ad)",
                            "serverDateTime": "2024-09-02T10:25:46.8235307+07:00",
                            "clientTransactionID": uuidv4(),
                            "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "Unauthorized"
                    }    
                )
            break;
            // User Locked
            case "401100002":
                res.status(401)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                            "code": "401100002",
                            "message": "User account is locked",
                            "messageTH": "บัญชีถูกล็อค",
                            "serverDateTime": "2024-09-02T10:25:46.8235307+07:00",
                            "clientTransactionID": uuidv4(),
                            "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "Unauthorized"
                    }    
                )
            break;
            // AD User Expired
            case "401100003":
                res.status(401)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                            "code": "401100003",
                            "message": "User account is expired",
                            "messageTH": "บัญชีผู้ใช้งานหมดอายุ",
                            "serverDateTime": "2024-09-02T10:25:46.8235307+07:00",
                            "clientTransactionID": uuidv4(),
                            "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "Unauthorized"
                    }    
                )
            break;                     
            case "403":
                res.status(403)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                          "code": "403",
                          "message": "Permission Denied",
                          "messageTH": "Permission Denied",
                          "serverDateTime": "2024-08-20T14:18:48.413856+07:00",
                          "clientTransactionID": uuidv4(),
                          "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "Forbidden"
                    }      
                )
            break;
            case "404":
                res.status(404)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                          "code": "404",
                          "message": "Not Found",
                          "messageTH": "Not Found",
                          "serverDateTime": "2024-08-20T14:18:48.413856+07:00",
                          "clientTransactionID": uuidv4(),
                          "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "Not Found"
                    }      
                )
            break;
            case "500":
                res.status(500)
                res.json(
                    {
                        "content": null,
                        "apiErrors": null,
                        "status": {
                          "code": "500",
                          "message": "Internal Server Error",
                          "messageTH": "Internal Server Error",
                          "serverDateTime": "2024-09-02T10:25:46.8235307+07:00",
                          "clientTransactionID": uuidv4(),
                          "serverTransactionID": uuidv4()
                        },
                        "httpStatus": "InternalServerError"
                    }
                       
                )
            break;

        default:
            res.status(400)
            res.json(
                {
                    "content": null,
                    "apiErrors": null,
                    "status": {
                        "code": "400",
                        "message": "Username not found.",
                        "messageTH": "Username not found.",
                        "serverDateTime": "2025-02-24T14:24:14.4734774+07:00",
                        "clientTransactionID": uuidv4(),
                        "serverTransactionID": uuidv4()
                    },
                    "httpStatus": "BadRequest"
                }                
        )
    }
})

// Internal API Mockup
app.post("/ipro-main/api/v1/th/internal/ecm/upload",(req,res) => {
    console.log(req.headers);
    console.log(req.body)
    res.json(
        {
            "content": {
              "documentID": "6087440"
            },
            "status": {
              "code": "2000000000",
              "message": "SUCCESS",
              "messageTH": "SUCCESS",
              "serverDateTime": "2024-08-20T14:18:48.413867+07:00",
              "clientTransactionID": uuidv4(),
              "serverTransactionID": uuidv4()
            },
            "httpStatus": "OK"
        } 
    )
    //res.send("<div>404 Not Found</div>");

})

app.post("/ipro-main/api/v1/th/internal/dopa/laser",(req,res) => {
    res.json(
        {
        "content": {
          "code": "0",
          "isVerfiryPass": true
        },
        "status": {
          "code": "2000000000",
          "message": "SUCCESS",
          "messageTH": "SUCCESS",
          "serverDateTime": "2024-08-20T14:18:48.413867+07:00",
          "clientTransactionID": uuidv4(),
          "serverTransactionID": uuidv4()
        },
        "httpStatus": "OK"
      } 
    )
})

app.post("/ipro-main/api/v1/th/internal/dopa/chip",(req,res) => {
    res.json({
        "content": {
            "code": "0",
            "isVerfiryPass": true
        },
        "status":{
            "code": "2000000000",
            "message": "SUCCESS",
            "messageTH": "SUCCESS",
            "serverDateTime": "2024-08-20T14:18:48.413867+07:00",
            "clientTransactionID": uuidv4(),
            "serverTransactionID": uuidv4()        
        },
        "httpStatus": "OK"
    })
})

app.post("/ipassport/api/v1/auth/ex",(req,res) => {
    console.log(req.headers);
    console.log(req.body);
})

app.post("/ipassport/api/v1/auth/login",(req,res) => {
    console.log(req.headers);
    console.log(req.body);
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})