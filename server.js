
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.post('/videos', () =>{
    return 'Hello World'
})

server.get('/videos', () =>{
    return 'Hello World'
})

server.put('/videos/:id', () =>{
    return 'Hello World'
})

server.delete('/videos/:id', () =>{
    return 'Hello World'
})



server.listen({
    port: 3333,
})