const {describe,test,it,expect,beforeAll,afterAll} = require ('@jest/globals')
const organization = require('../../src/service/organization.js')
const conexao = require('../../src/database.js')




describe("Teste de Integração modulo inventario", () =>{

    let transaction

    beforeAll(async () => {
        transaction = await conexao.db.transaction()
        // db conecta direto com o banco 
    })

    test("Criar organização com todos os parametros",async () =>{
        const name = "hell"
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"
        // não precisa da trasaction, porem se não fizer valores unique terao que ser trocados constantemente

        const Devilorganization = await organization.Create(name,address,phone,email,transaction)

        console.log("Aqui >>>>>>>>>>>>",Devilorganization)
        expect(Devilorganization.organization.name).toBe(name)
        expect(Devilorganization.organization.address).toBe(address)
        expect(Devilorganization.organization.phone).toBe(phone)
        expect(Devilorganization.organization.email).toBe(email)
       
    })

    test("Criar organização com o parametros nome vazio",async () =>{
        const name = null
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros address vazio",async () =>{
        const name = "vazio"
        const address = null
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros phone vazio",async () =>{
        const name = "vazio"
        const address = "rua hell"
        const phone = null
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