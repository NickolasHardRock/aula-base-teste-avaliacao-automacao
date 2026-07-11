const {describe,test,it,expect,beforeAll,afterAll} = require ('@jest/globals')
const user = require('../../src/service/user.js')
const conexao = require('../../src/database.js')
const bcrypt = require('bcrypt')

describe("Teste de integração modulo user", () =>{
    let transaction

    beforeAll(async () => {
        transaction = await conexao.db.transaction()
    })

    test("Atualizar todos os parametros do um usuario",async () =>{
        const idOrganizationId = 35
        const idUser = 25
        const name = "helldiver"
        const email = "doDemo@hotmail.com"
        const password = 333
        const role = 'user'
        const DevilMan = user.Update(idOrganizationId,idUser,name,email,password,role,transaction)
        console.log(DevilMan)
        expect(DevilMan.idOrganizationId).toBe(DevilMan.idOrganizationId)
        expect(DevilMan.idUser).toBe(DevilMan.idUser)
        expect(DevilMan.name).toBe(DevilMan.name)
        expect(DevilMan.email).toBe(DevilMan.email)
        expect(DevilMan.password).toBe(DevilMan.password)
        expect(DevilMan.role).toBe(DevilMan.role)
    })

    test("Atualizar com parametro idOrganizationId do um usuario vazio",async () =>{
        const idOrganizationId = "35"
        const idUser = 25
        const name = "helldiver"
        const email = "doDemo@hotmail.com"
        const password = 333
        const role = 'user'
        await expect( DevilMan = user.Update(idOrganizationId,idUser,name,email,password,role,transaction)).rejects.toThrow();
    })



    test("Buscar usuario por id e organização",async () => {
        const Iduser = 25
        const IdOrganization = 17


        const getUserId =  await user.FindById(IdOrganization,Iduser)
        console.log(getUserId)
        expect(getUserId).toBeDefined()
        expect(getUserId).toHaveProperty("id",25)
        expect(getUserId).toHaveProperty("organizationId",17)  
    })

    test("Buscar todos os usuarios de uma organização", async () =>{

        const getAllUser = await user.FindAll(17)
        console.log(getAllUser)
        expect(getAllUser).toBeDefined()
        expect(getAllUser).toBeInstanceOf(Array)

    })


    afterAll(async () => {
        
        conexao.db.close
    })


})
