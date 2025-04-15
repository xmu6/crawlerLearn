require('./env')
require('./env2')
require('./loader')
require('./mod1')

data = process.argv[2]
data = JSON.parse(data)
console.log(data)
function getsign(data) {
    a = window.loader(20)

    sign = a.getSignature(data)
    console.log(':::'+sign+':::')
    process.exit()

}

// data = {
//     account: "bFigAaZ6rVFBuzSM1TxNfibaeL5zkDdFWZUrLr8E4idvkarO9VAqBkBFuWpJtTbDgufb/Z2BH3WriKMS4uBwAvvZxZSrFq4n9lGRTx92AEHTx+Q1J/35XXn3xEc4U7DW9UEd7cbgQaF6fIKQ4Lu4UX3nNGk108rKe197yPeRQxI=",
//     password: 'lKZWBEUQbNKbqMZ0oKgtYhy2sUHgTc8TkR5KxN5/5847Osr3Rr1/Mkf/oAxx7AgUYKxMUnmdWV91r2fJEgS72oVYJpIiUhJVcQ7s07Lt+GloNDenw/vusKb+FSgBp7ISmB0i9dlygyNq/TWxjT4z42e2/0UqUZohMzc4o7WgSRY=',
//     nonce: "0-88A21C534E788fcc2b510575ba60951474dc1e292dce4ed7cf00bf2d1537b3"
// }
getsign(data)


