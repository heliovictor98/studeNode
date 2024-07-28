
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) =>{
    
    const {title, descripiton, duraction} = request.body

    
    database.create({
        title: title,
        description: descripiton,
        duration: duraction,
    })

    return reply.status(201).send()
})

server.get('/videos', () =>{
    const videos = database.list()
    console.log(videos)
    return videos
})

server.put('/videos/:id', (request, reply) =>{
    const videoId = request.params.id
    const {title, descripiton, duraction} = request.body

    database.update(videoId, {
        title,
        descripiton,
        duraction,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) =>{
    const videoId = request.params.id
    database.delete(videoId)

    return reply.status(204).send()
})



server.listen({
    port: 3333,
})