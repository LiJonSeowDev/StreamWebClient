type Stream = {
    id : number,
    title : string,
    description : string
}

interface StreamDict<TValue> {
    [key: string]: TValue;
}
