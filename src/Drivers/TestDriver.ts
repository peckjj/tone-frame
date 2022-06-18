import { Note } from "../Classes/Note";
import { Beats } from "../Enums/Beats";
import { Pitch } from "../Enums/Pitch";
import { ISourceDriver } from "../Interfaces/ISourceDriver";

export class TestDriver implements ISourceDriver {
    async playNote(note: Note, time: number): Promise<void> {
        console.log("Playing note: " + Pitch[note.getPitch()] + " (" + Beats[note.getBeat()] + ")");
        return new Promise(res => {
            setTimeout(res, time);
        });
    }
}