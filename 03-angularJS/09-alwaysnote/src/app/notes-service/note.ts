let next_id = 0;

export class Note {
    id: number | undefined
    note:string | undefined
    created_at:Date | undefined
    updated_at:Date | undefined

    constructor(data: any) {
        this.id = next_id;
        next_id++;
        this.note = data.note;

        this.created_at = new Date()
        this.updated_at = new Date()
    };

    toObject() {
        return {
            id: this.id,
            note: this.note,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
};