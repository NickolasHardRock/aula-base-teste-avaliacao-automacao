
const app = require("../../index.js")
const request = require("supertest")
const database = require("../../src/database.js")


describe("Teste de api para usuarios",() =>{

    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6ImFkbWluIiwib3JnYW5pemF0aW9uSWQiOjEzLCJpYXQiOjE3ODQwNzY0OTEsImV4cCI6MTc4NDA4MDA5MX0.bAkxe8wcArxTsKTwkSN6iCLygzS8QMA0XZLw93b92zA"
    
    test("Criar um usuario novo", async() =>{
        body = {
            name: "seu cagao",
            email: "seuCagao@teste.com.br",
            password: "r232sfs",
            role:'admin'
        }
        
        
        const resposta = await request(app)
        .post('/api/v1/user')
        .set("Authorization", token)
        .send(body)

        console.log(resposta.body)
    })

    
})