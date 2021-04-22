const SmoothieService = require("./lib/smoothie-service")
const service = new SmoothieService()
service.init()

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What ingredients do you want to change smoothie?\n:> ", function (smoothie) {
    const smoothies = service.save(smoothie)
    console.log(smoothies)
    rl.close()
})

rl.on("close", function () {
    console.log("\nBye!")
    process.exit(0)
})