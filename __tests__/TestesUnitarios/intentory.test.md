const {describe,it,test,expect,beforeAll,afterAll} = require('@jest/globals')
const generetePassword = require ('../../src/fns/generate-password')

describe("Teste para função Generete Password", () =>{

    test("Gerar senha nova", async () => {
        const senha = await generetePassword()

        expect(senha).not.toBeNull

        console.log("Senha aqui >>>",senha)

    })

    test("Gerar senhas diferentes a cada execução", async () => {
        const senha1 = await generetePassword()
        const senha2 = await generetePassword()
        expect(senha1).not.toBe(senha2)

        console.log("Senha aqui >>>",senha)

    })

    test("Gerar senhas com 36 caracteres", async () => {
        const senha = await generetePassword()
      
        expect(senha.length).toBe(36)
        expect(senha).toHaveLength(36)

        console.log("Senha aqui >>>",senha)

    })

    test("Gerar senhas com 36 caracteres", async () => {
        const senha = await generetePassword()
      
        expect(senha.length).toBe(36)
        expect(senha).toHaveLength(36)

        console.log("Senha aqui >>>",senha)

    })



})
