export class Video {
    constructor(
        public title: string,
        public url: string,
        public description: string|null,
        public userId: number,
        public id?: number,
    ) {}
}
