const { expect } = require('chai')
const SmoothieService = require('../lib/smoothie-service')

const service = new SmoothieService()

describe('SmoothieService', () => {
    describe('#list()', () => {
        it('should return populated object when init', () => {
            service.init()
            expect(service.list())
                .to.be.an('object')
                .that.is.not.empty
        });
    });
    describe('#save()', () => {

        it('create `Classic` plus `chocolate`', () => {
            service.init()
            const smoothie = "Classic,+chocolate"
            expect(service.save(smoothie))
                .to.eql([
                    "banana", "chocolate", "honey", "ice", "mango",
                    "peach", "pineapple", "strawberry", "yogurt"
                ])
        })

        it('create `Classic` plus `chocolate` minus `strawberry`', () => {
            service.init()
            const smoothie = "Classic,+chocolate,-strawberry"
            expect(service.save(smoothie))
                .to.eql([
                    "banana", "chocolate", "honey", "ice",
                    "mango", "peach", "pineapple", "yogurt"
                ])
        })

        it('create `Classic` smoothie', () => {
            service.init()
            const smoothie = "Classic"
            expect(service.save(smoothie))
                .to.eql([
                    "banana", "honey", "ice", "mango", "peach",
                    "pineapple", "strawberry", "yogurt"

                ])
        })

        it('create `Classic` minus `strawberry`', () => {
            service.init()
            const smoothie = "Classic,-strawberry"
            expect(service.save(smoothie))
                .to.eql([
                    "banana", "honey", "ice", "mango",
                    "peach", "pineapple", "yogurt"
                ])
        })

        it('create `Just Desserts` smoothie', () => {
            service.init()
            const smoothie = "Just Desserts,-strawberry"
            expect(service.save(smoothie))
                .to.eql([
                    "banana", "cherry", "chocolate",
                    "ice cream", "peanut"
                ])
        })

        it('create `Just Desserts` smoothie without `ice cream` and `peanut`', () => {
            service.init()
            const smoothie = "Just Desserts,-ice cream,-peanut"
            expect(service.save(smoothie))
                .to.eql(["banana", "cherry", "chocolate"])
        })

        it('create a smoothie without ingredients', () => {
            service.init()
            const smoothie = "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut"
            expect(service.save(smoothie))
                .to.eql([])
        })

        it('exclude unused ingredients', () => {
            service.init()
            const smoothie = "Classic,-banana,-mango,-peanut"
            expect(service.save(smoothie))
                .to.eql([
                    "honey", "ice", "peach", "pineapple",
                    "strawberry", "yogurt"
                ])
        })

        // console.log('service.smoothies', service.smoothies)

    })

})