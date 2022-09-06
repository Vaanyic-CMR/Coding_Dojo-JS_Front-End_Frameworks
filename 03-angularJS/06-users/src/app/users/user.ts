export class User {
    name: string | undefined
    private created_at: Date | undefined
    private updated_at: Date | undefined
    
    constructor( data={name: "User"} ) {
        this.name = data.name
        this.created_at = new Date()
        this.updated_at = new Date()
    }
}