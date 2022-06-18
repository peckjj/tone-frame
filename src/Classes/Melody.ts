import { Note } from "./Note";
import { TimeSignature } from "./TimeSignature";

export class Melody {
    public readonly name: string;
    public readonly timeSignature: TimeSignature;
    private loop: boolean;

    private notes: Note[];

    private cur: number;

    constructor(name: string, timeSignature?: TimeSignature, loop = false, notes: Note[] = []) {
        this.name = name;
        this.timeSignature = timeSignature;
        this.loop = loop;
        this.notes = notes;
        this.cur = 0;
    }

    enableLoop(loop: boolean) {
        this.loop = loop;
    }

    loopEnabled(): boolean {
        return this.loop;
    }

    addNotes(...note: Note[]) {
        this.notes.push(...note);
    }

    clearNotes() {
        this.notes = [];
    }

    hasNext(): boolean {
        return this.loop || this.cur < this.notes.length;
    }

    next(): Note {
        let note = (this.notes[this.cur]);
        console.log(note.copy());
        this.cur++;
        if (this.loop) {
            this.cur %= this.notes.length;
        }
        return note;
    }

    reset() {
        this.cur = 0;
    }
}