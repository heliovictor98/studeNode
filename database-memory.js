import { randomUUID } from "crypto"

export class DatabaseMemory {

    #videos = new Map()

    create(video){
        const videoId = randomUUID
        this.#videos.set()
    }

    create(id,video){
        this.#videos.push(video)
    }
}