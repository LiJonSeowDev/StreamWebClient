type Stream = {
    id : number,
    title : string,
    description : string,
    userID : string
}

interface StreamDict<TValue> {
    [key: string]: TValue;
}
