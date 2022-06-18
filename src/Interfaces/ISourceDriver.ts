import { Note } from "../Classes/Note";

export interface ISourceDriver {
    playNote(note: Note, time: number): Promise<void>;
}