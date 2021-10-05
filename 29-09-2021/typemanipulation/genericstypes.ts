type ArrayElementType<T> = T extends Array<infer E> ? E : any;
// type ArrayElementType<T> = T extends Promise<any>?T:any;


type item1 = ArrayElementType<string[]>;


// type item2 = ArrayElementType<{ name: string }>;

