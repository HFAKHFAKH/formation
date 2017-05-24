export class Formation {
    id?: number;
    title: string;
    description?: string;

    public static mapToFormation(model): Formation {
        const formation: Formation = new Formation();
        formation.id = model.id;
        formation.title = model.title;
        formation.description = model.description;
        return formation;
    }
}
