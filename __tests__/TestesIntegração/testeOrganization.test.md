const {describe,test,it,expect,beforeAll,afterAll} = require ('@jest/globals')
const organization = require('../../src/service/organization.js')
const conexao = require('../../src/database.js')




describe("Teste de Integração modulo inventario", () =>{

    let transaction

    beforeAll(async () => {
        transaction = await conexao.db.transaction()
    })

    test("Criar organização com todos os parametros",async () =>{
        const name = "hell"
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"

        const Devilorganization = await organization.Create(name,address,phone,email,transaction)
        console.log(Devilorganization)
        expect(Devilorganization.name).toBe(Devilorganization.name)
        expect(Devilorganization.address).toBe(Devilorganization.address)
        expect(Devilorganization.phone).toBe(Devilorganization.phone)
        expect(Devilorganization.email).toBe(Devilorganization.email)
    })

    test("Criar organização com o parametros nome vazio",async () =>{
        const name = "vazio"
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    
    test("Criar organização com o parametros address vazio",async () =>{
        const name = "vazio"
        const address = ""
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros phone vazio",async () =>{
        const name = "vazio"
        const address = "rua hell"
        const phone = ""
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros phone vazio",async () =>{
        const name = "vazio"
        const address = "rua hell"
        const phone = 666666
        const email = ""
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    


    afterAll(async () => {
        
        conexao.db.close
    })








})