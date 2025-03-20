'use strict'

const {test} = require('tap')
const {build} = require('../helper')

test('POST /accounts', async (t) => {
    const app = await build(t)

    // TODO: implement mock POST /accounts
    const { err, res } = await app.inject({
        method: 'GET',
        url: '/accounts',
        headers: {
            'Content-Type': 'application/json',
            'x-client-context': 'eyJyZXF1ZXN0SWQiOiIwMER4eDAwMDAwMDAwMDBFQTItN2M1NjYwOTEtN2FmMy00ZTg3LTg4NjUtNGUwMTQ0NDRjMjk4LTIwMjAtMDktMDNUMjA6NTY6MjcuNjA4NDQ0WiIsImFjY2Vzc1Rva2VuIjoiMDBEeHgwMDAwMDAwMDAwRUEyIUFRRUFRTzgwMHI3SmE0UHN3VkZzOXdvQzdENXpaTmxZMDNrY0VQdjNMd3g4dWYzZUFpMDF4OVdneThENWpjT21hY0E0cERZTGp1WUxYVnZvWXVkYUh6QVlaZi5JUWxOTiIsImFwaVZlcnNpb24iOiI2Mi4wIiwibmFtZXNwYWNlIjoiIiwib3JnSWQiOiIwMER4eDAwMDAwMDAwMDBFQTIiLCJvcmdEb21haW5VcmwiOiJodHRwczovL2hlcm9rdS5teS5zYWxlc2ZvcmNlLmNvbSIsInVzZXJDb250ZXh0Ijp7InVzZXJJZCI6IjAwNXh4MDAwMDAwMDAwMCIsInVzZXJuYW1lIjoiYWRtaW5AaGVyb2t1LmNvbSJ9fQ=='
        }
    });

    // TODO: validate response
})

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })
