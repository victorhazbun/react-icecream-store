const useUniqueIds = require("./useUniqueIds")
// @ponicode
describe("useUniqueIds.default", () => {
    test("0", () => {
        let callFunction = () => {
            useUniqueIds.default(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            useUniqueIds.default(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            useUniqueIds.default(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            useUniqueIds.default(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            useUniqueIds.default(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            useUniqueIds.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
